<template>
    <div id="login" v-show="!isEditView">
        <h2>User Profile</h2>
        <img :src="image">
        <span>Name: </span><b>{{ Name }}</b>
        <hr>
        <span>Email: </span><b>{{ Email }}</b>
        <hr>
        <span>Interest: </span><b>{{ Interest }}</b>
        <hr>
        <button @click="handleEditProfile">Edit Profile</button>
    </div>

    <div id="signup" v-show="isEditView">
        <h2>User Profile</h2>
        <img :src="image">
        <span>Name: </span><input type="text" v-model="Name">
        <hr>
        <span>Email: </span><input type="email" v-model="Email">
        <hr>
        <span>Interest: </span><input type="text" v-model="Interest">
        <hr>
        <button @click="handleUpdateProfile">Update Profile</button>
    </div>

    


</template>

<script>
import image from "./images.jpeg"
export default {
    name: "App",
    data(){
        return {
            image: image,
            Name: "",
            Email: "",
            Interest: "",
            isEditView: false
        }
        
    },

    async created(){
        const userData = await this.fetchUserProfile()
         this.Name = userData.Name
         this.Email = userData.Email
         this.Interest = userData.Interest   
        

    },

    methods: {
        handleEditProfile(){
            this.isEditView =true
        },

        async handleUpdateProfile(){
            const payload = {
                Name: this.Name,
                Email: this.Email,
                Insterst: this.Interest
            }
            const resJson = await this.updateUserProfile(payload)
            console.log(resJson)
            this.isEditView =false
            
        },
        async fetchUserProfile(){
            const res = fetch("get-profile")
            return await res.json()
            
        },
        async updateUserProfile(payload){
            const res = await fetch("update-profile", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    "Accept": "Appication/json"

                },
                body: JSON.stringify(payload)   
            })
            return await res.json()
        }


    }


    
}

</script>

<style>


#login {
    width: 80%;
    display: block;
    padding: 10px;
    margin: auto;
}

#login span {
    margin-left: 0px;
    
}
img {
    margin-bottom: 20px;
    display: block;
}

#signup {
    width: 80%;
    display: block;
    padding: 10px;
    margin: auto;
}

hr {
    width: 300px;
    margin-left: 0;
}

input {
    width:250px;
    height: 20px;
}
button {
    height: 30px;
}



</style>
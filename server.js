const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'teamable_db'
const collName = "user_profile"

app.use(bodyParser.json())
app.use("/",express.static(__dirname + "/dist"))

app.get("/get-profile", async function(req, res) {
    //connect to database
    await client.connect()
    console.log('Connected successfully to server')

    //initiate database
    const db = client.db(dbName)
    const collection = db.collection(collName)

    // get data from database
    const result = await collection.findOne({id: 2})
    console.log(result)
    const response = {
        Name: result.Name,
        Email: result.Email,
        Interest: result.Interest
    }

    res.send(response)

})

app.post("/update-profile", async function (req, res){
    const payload = req.body
    console.log(payload)

    

    if (Object.keys(payload).length ==0) {
        res.send({error: "empty payload. couldnt update user profile"})
    }else {
        res.send({info: "user update was successful"})

    }

    //connect to database
    await client.connect()
    console.log('Connected successfully to server')


    //initiate database
    const db = client.db(dbName)
    const collection = db.collection(collName)


    //send data to database
    payload["id"] = 2
    const updatedName = {$set: payload}
    await collection.updateOne({id: 2}, updatedName, {upsert: true})
    client.close()



    
})


app.listen(4000, function(){
    console.log("app is listening on port 4000")

})
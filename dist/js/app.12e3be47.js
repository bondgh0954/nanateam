(()=>{"use strict";var e={901:(e,t,n)=>{var l=n(751),i=n(641),r=n(33);const a={id:"login"},o=(0,i.Lk)("h2",null,"User Profile",-1),s=["src"],u=(0,i.Lk)("span",null,"Name: ",-1),p=(0,i.Lk)("hr",null,null,-1),d=(0,i.Lk)("span",null,"Email: ",-1),f=(0,i.Lk)("hr",null,null,-1),h=(0,i.Lk)("span",null,"Interest: ",-1),c=(0,i.Lk)("hr",null,null,-1),m={id:"signup"},k=(0,i.Lk)("h2",null,"User Profile",-1),L=["src"],b=(0,i.Lk)("span",null,"Name: ",-1),v=(0,i.Lk)("hr",null,null,-1),E=(0,i.Lk)("span",null,"Email: ",-1),g=(0,i.Lk)("hr",null,null,-1),w=(0,i.Lk)("span",null,"Interest: ",-1),y=(0,i.Lk)("hr",null,null,-1);function P(e,t,n,P,O,U){return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bo)((0,i.Lk)("div",a,[o,(0,i.Lk)("img",{src:O.image},null,8,s),u,(0,i.Lk)("b",null,(0,r.v_)(O.Name),1),p,d,(0,i.Lk)("b",null,(0,r.v_)(O.Email),1),f,h,(0,i.Lk)("b",null,(0,r.v_)(O.Interest),1),c,(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>U.handleEditProfile&&U.handleEditProfile(...e))},"Edit Profile")],512),[[l.aG,!O.isEditView]]),(0,i.bo)((0,i.Lk)("div",m,[k,(0,i.Lk)("img",{src:O.image},null,8,L),b,(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>O.Name=e)},null,512),[[l.Jo,O.Name]]),v,E,(0,i.bo)((0,i.Lk)("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>O.Email=e)},null,512),[[l.Jo,O.Email]]),g,w,(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>O.Interest=e)},null,512),[[l.Jo,O.Interest]]),y,(0,i.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>U.handleUpdateProfile&&U.handleUpdateProfile(...e))},"Update Profile")],512),[[l.aG,O.isEditView]])],64)}const O=n.p+"img/images.b0304aff.jpeg",U={name:"App",data(){return{image:O,Name:"",Email:"",Interest:"",isEditView:!1}},async created(){const e=await this.fetchUserProfile();this.Name=e.Name,this.Email=e.Email,this.Interest=e.Interest},methods:{handleEditProfile(){this.isEditView=!0},async handleUpdateProfile(){const e={Name:this.Name,Email:this.Email,Insterst:this.Interest},t=await this.updateUserProfile(e);console.log(t),this.isEditView=!1},async fetchUserProfile(){const e=fetch("get-profile");return await e.json()},async updateUserProfile(e){const t=await fetch("update-profile",{method:"POST",headers:{"Content-Type":"Application/json",Accept:"Appication/json"},body:JSON.stringify(e)});return await t.json()}}};var j=n(262);const N=(0,j.A)(U,[["render",P]]),I=N;(0,l.Ef)(I).mount("#app")}},t={};function n(l){var i=t[l];if(void 0!==i)return i.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.m=e,(()=>{var e=[];n.O=(t,l,i,r)=>{if(!l){var a=1/0;for(p=0;p<e.length;p++){for(var[l,i,r]=e[p],o=!0,s=0;s<l.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(o=!1,r<a&&(a=r));if(o){e.splice(p--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[l,i,r]}})(),(()=>{n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.p="/"})(),(()=>{var e={524:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var i,r,[a,o,s]=l,u=0;if(a.some((t=>0!==e[t]))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(s)var p=s(n)}for(t&&t(l);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},l=self["webpackChunknana_teamApp"]=self["webpackChunknana_teamApp"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=n.O(void 0,[504],(()=>n(901)));l=n.O(l)})();
//# sourceMappingURL=app.12e3be47.js.map
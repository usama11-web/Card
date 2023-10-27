/*
var istatus = document.querySelector("h5");
var addfriend = document.querySelector("#add");
var removefriend = document.querySelector("#remove");

addfriend.addEventListener("click",function(){
    istatus.innerHTML = "Friend";
    istatus.style.color = "Green";
})
removefriend.addEventListener("click",function(){
    istatus.innerHTML = "Stranger";
    istatus.style.color = "Red";
})
*/


var statuss = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0;

btn.addEventListener("click",function(){
    if(check == 0){
        statuss.innerHTML = "Friend"
        statuss.style.color = "Green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }else{
        statuss.innerHTML = "Stranger"
        statuss.style.color = "Red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})
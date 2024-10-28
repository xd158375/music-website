// JavaScript Document
var button = document.getElementById("start_button");
var alerts = document.getElementById("customAlert");
var visible = document.getElementById("visible");
    setTimeout(function(){
          alerts.classList.remove("hidden");
          alerts.classList.add("visible");
    },600);
    
    button.addEventListener("click",function(){
          alerts.classList.remove("visible");
          alerts.classList.add("hidden");

    });
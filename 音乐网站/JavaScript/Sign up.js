var toggleSignup = document.getElementById("toggleToSignup");
        var toggleSignin = document.getElementById("toggleToSignin");
        var overlayUp = document.getElementById("overlay_signup");
        var overlayIn = document.getElementById("overlay_signin");
        var overlay = document.getElementById("overlay");
        var loginIn = document.getElementById("login-in");
        var loginUp = document.getElementById("login-up");
        var circle_3 = document.getElementById("circle_3");
        var circle_4 = document.getElementById("circle_4");
        toggleSignup.addEventListener("click",function(){
            loginIn.style.transform = "translate(0px)";
            loginIn.style.opacity = "0";
            loginIn.style.zIndex = "1";
            loginUp.style.transform = "translate(0px)";
            loginUp.style.opacity = "1";
            loginUp.style.zIndex = "2";
            overlay.style.transform = "translateX(0px)";
            
            overlayUp.style.opacity = "0";
            overlayUp.style.zIndex = "1000";
            overlayIn.style.opacity = "1";
            overlayIn.style.zIndex = "1001";
            circle_3.style.transform = "translateX(0px)";
            circle_4.style.transform = "translateX(0px)";
            circle_3.id = "circle_3";
            circle_4.id = "circle_4";
        });
        
        toggleSignin.addEventListener("click",function(){
            loginIn.style.transform = "translate(-401px)";
            loginIn.style.opacity = "1";
            loginIn.style.zIndex = "2";
            loginUp.style.transform = "translate(-401px)";
            loginUp.style.opacity = "0";
            loginUp.style.zIndex = "1";
            overlay.style.transform = "translateX(601px)";
            
            overlayUp.style.opacity = "1";
            overlayUp.style.zIndex = "1001";
            overlayIn.style.opacity = "0";
            overlayIn.style.zIndex = "1000";
            circle_3.style.transform = "translateX(0px)";
            circle_4.style.transform = "translateX(0px)";
            circle_3.id = "circle_1";
            circle_4.id = "circle_2";
        });

// JavaScript Document
var usernameInput = document.getElementById("username");								//获取登录输入框内的账户
var passwordInput = document.getElementById("password");								//获取登录输入框内的密码

var userNameInput = document.getElementById("new_username");                            //获取注册输入框内的账户
var EmailInput    = document.getElementById("new_email");                               //获取注册输入框内的邮箱
var passWordInput = document.getElementById("new_password");                            //获取注册输入框内的密码

var Account = function(username,password){				//定义一个虚拟函数进行账号密码的登录验证
    if(username == "xd"&&password == "158375"){									
        return true;
    }else{
        return false;
    }
}
	
  function addAccount(){                                //在控制台输出user输入的账号邮箱密码
        console.log("用户已完成注册！");
        console.log("用户名为："+userNameInput.value);
        console.log("注册邮箱为："+EmailInput.value);
        console.log("密码为："+passWordInput.value);
    };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var registerList = new Array("Welcome to our website!&nbsp;&nbsp;",  
                             "In this vast crowd of people, we have met here. <br>Next, I would like to invite you to visit our website.",
                             //注册成功
                             "Register failed",                 
                             "The Username input cannot be empty.<br> Please enter again.",         //用户名为空
                             "The Email input cannot be empty.<br> Please enter again.",            //邮箱为空
                             "The Password input cannot be empty.<br> Please enter again.",         //密码为空             
                            );
                             //注册失败
var LoginList = new Array("Login successful",
                          "We are delighted to see you once again, <br>May each of your visits be filled with joy and enrichment.",
                             //登录成功
                          "Login failed",
                          "I'm sorry, but the account or password <br> you entered is incorrect. Please try again!");
                             //登录失败                            
                             

  

var container = document.getElementById("iframe-container");
var iframe = document.createElement("iframe");
var Login_date;
var register_error;
function showAlert(information){
        container.style.display = "block";      //装iframe容器为不可见
        iframe.src = "alert.html";
        iframe.id = "popupFrame";
        iframe.scrolling = 'no';
        container.appendChild(iframe);
        iframe.onload = function(){         //需要异步加载，否则会导致 iframeContent 和 start_button 变量为 null
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;  
        /* 插入内容到 iframe 的 body 中  */
            var iframeContent = iframeDoc.getElementById("main_font");
            //弹窗文本
            if(iframeContent){    
                //注册文本
                if(information === "register"){             
                    if(userNameInput.value == ""){
                        iframeContent.innerHTML = "<h3>"+registerList[2]+userNameInput.value+"</h3>"+"<p>"+registerList[3]+"</p>";
                        register_error = "username_empty";
                    }else if(EmailInput.value == ""){
                        iframeContent.innerHTML = "<h3>"+registerList[2]+userNameInput.value+"</h3>"+"<p>"+registerList[4]+"</p>";  
                        register_error = "email_empty";
                    }else if(passWordInput.value == ""){
                        iframeContent.innerHTML = "<h3>"+registerList[2]+userNameInput.value+"</h3>"+"<p>"+registerList[5]+"</p>";
                        register_error = "password_empty";
                    }else{
                        iframeContent.innerHTML = "<h3>"+registerList[0]+userNameInput.value+"</h3>"+"<p>"+registerList[1]+"</p>";
                    }
                  //登录文本
                } if(information === "Login"){              
                    if(Account(usernameInput.value,passwordInput.value)){       //通过Account函数判断账户密码是否正确
                        iframeContent.innerHTML = "<h3>"+LoginList[0]+"</h3>"+"<p>"+LoginList[1]+"</p>";          //登录成功
                        Login_date = "success";
                    }else{
                        iframeContent.innerHTML = "<h3>"+LoginList[2]+"</h3>"+"<p>"+LoginList[3]+"</p>";          //登录失败
                        Login_date = "failed";
                    }
                } 
            } 
            var start_button = iframeDoc.getElementById("start_button");
            start_button.addEventListener("click",function(){
                setTimeout(function(){
                    container.style.display = "none";      
                    container.removeChild(iframe);   
                    if(information === "register"){ 
                        if(register_error === "username_empty"||register_error === "email_empty"||register_error === "password_empty"){
                            window.location.href = 'Sign up.html';
                        }else{
                            window.location.href = 'Sign in.html';
                        }
                    } if(information === "Login"){
                        if(Login_date === "success"){
                            window.location.href = 'HomePage.html';
                        }else if(Login_date = "failed"){
                            window.location.href = 'Sign in.html';          
                        }
                    }
                },1500);

            });
        };
    };

    document.getElementById("Login_up_button").addEventListener("click",function(){
        showAlert("register");
    });
    document.getElementById("Login_in_button").addEventListener("click",function(){
        showAlert("Login");
    });
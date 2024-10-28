// JavaScript Document
var Files = document.getElementById("Files");
var Chat = document.getElementById("Chat");
var Videos = document.getElementById("Videos");
var Collect = document.getElementById("Collect");
var Search = document.getElementById("Search");
var Share = document.getElementById("Share");
var Sidebar = document.querySelectorAll(".Level_2");
var nav = document.querySelector(".nav");
var item = document.querySelectorAll(".item");
var clickCount = 0 ;                //创建点击次数

for(var toggleCount = 0; toggleCount<item.length; toggleCount++){     //切换次数
    item[toggleCount].addEventListener("mouseleave",function(){       //当鼠标切换item时，清空clickCount;
        clickCount = 0;
    });
}

Files.addEventListener("click",function(){                  //监听Files的点击事件
    clickCount++;                                           //点击次数+1
    if(clickCount % 2 === 0){                               //当点击次数为偶数时，收起Sidebar
        Sidebar[0].style.width = "0px";
    }else{                                                  //否则点击次数为奇数次
        toggleDiv(0);                                       //运行toggleDiv函数
    }
});
Sidebar[0].addEventListener("mouseleave",function(){        //监听Sidebar的鼠标移除事件
    Sidebar[0].style.width = "0px";                         //当鼠标移除时，收起Sidebar
});

Chat.addEventListener("click",function(){                   //Chat
    clickCount++;
    if(clickCount % 2 === 0){
        Sidebar[1].style.width = "0px";
    }else{
        toggleDiv(1);
    }  
});
Sidebar[1].addEventListener("mouseleave",function(){
    Sidebar[1].style.width = "0px";
});

Videos.addEventListener("click",function(){                 //Videos
    clickCount++;
    if(clickCount % 2 === 0){
        Sidebar[2].style.width = "0px";
    }else{
        toggleDiv(2);
    } 
});
Sidebar[2].addEventListener("mouseleave",function(){
    Sidebar[2].style.width = "0px";
});

Collect.addEventListener("click",function(){                //Collect
    clickCount++;
    if(clickCount % 2 === 0){
        Sidebar[3].style.width = "0px";
    }else{
        toggleDiv(3);
    }  
});
Sidebar[3].addEventListener("mouseleave",function(){
    Sidebar[3].style.width = "0px";
});

Search.addEventListener("click",function(){                 //Search
    clickCount++;
    if(clickCount % 2 === 0){
        Sidebar[4].style.width = "0px";
    }else{
        toggleDiv(4);
    }  
});
Sidebar[4].addEventListener("mouseleave",function(){
    Sidebar[4].style.width = "0px";
});

Share.addEventListener("click",function(){                  //Share
    clickCount++;
    if(clickCount % 2 === 0){
        Sidebar[5].style.width = "0px";
    }else{
        toggleDiv(5);
    }  
});
Sidebar[5].addEventListener("mouseleave",function(){
    Sidebar[5].style.width = "0px";
});

// 创建一个ResizeObserver实例，并传入一个回调函数  
const resizeObserver = new ResizeObserver(entries => {  
    for (let entry of entries) {  
    // 获取元素的最新宽度  
        const newWidth = entry.contentRect.width;  
//        console.log('Sidebar width changed to:', newWidth);  
    // 你可以在这里添加你想要执行的逻辑  
        for(var i = 0; i<Sidebar.length;i++){
            clickCount = 0;
            Sidebar[i].style.width = "0px"; 
        }
    }  
});  
resizeObserver.observe(nav);

function toggleDiv(number){
    for(var x = 0;x<Sidebar.length;x++){
        if(x === number){
            Sidebar[x].style.width = "215px";
        }else{
            Sidebar[x].style.width = "0px";    
                 
        }
    }
}
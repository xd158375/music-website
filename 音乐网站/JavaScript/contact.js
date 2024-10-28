// 获取所有的盒子元素  
var garden = document.getElementById('garden');  
var blog = document.getElementById('Blog');  
var box3 = document.getElementById('box3');  
  
// 监听第一个盒子的鼠标移入事件，改变第二个盒子的大小 

    garden.addEventListener('mouseover', function() {  
        blog.style.width = '200px';  
        blog.style.height = '200px';  
    });  

    // 监听第一个盒子的鼠标移出事件，恢复第二个盒子的大小  
    garden.addEventListener('mouseout', function() {  
        blog.style.width = '100px';  
        blog.style.height = '100px';  
    });  

    // 监听第二个盒子的鼠标移入事件，改变第三个盒子的大小  
    box2.addEventListener('mouseover', function() {  
        box3.style.width = '200px';  
        box3.style.height = '200px';  
    });  

    // 监听第二个盒子的鼠标移出事件，恢复第三个盒子的大小  
    box2.addEventListener('mouseout', function() {  
        box3.style.width = '100px';  
        box3.style.height = '100px';  
    });
    }
// JavaScript Document

// 监听digital-garden的鼠标移入事件，改变大小 
var garden = document.getElementById('garden');
var Blog = document.getElementById('Blog');
var weichat = document.getElementById('weichat');                                                          //缩小模式
var QQ = document.getElementById('QQ');                                         //.querySelector('.text'); (7~12排后)          
var Tiktok = document.getElementById('Tiktok');
var tuite = document.getElementById('tuite');
var youxiang = document.getElementById('youxiang');
var weibo = document.getElementById('weibo');
var Timer = null;                                                               //var transitions = document.querySelectorAll('div.transition');
                                                                                //var Jumpsimg = document.querySelectorAll('img.tiaozhuan');

document.getElementById('garden').addEventListener('mouseenter', function() { 
//数字花园
        this.style.width = '282px';                 /*原尺寸 255px；*/
        this.style.height = '170px';
                                                                                //缩小格式
                                                                                //this.classList.add('garden-transition');
                                                                                //this.classList.remove('retracted');
//博客
        Blog.style.width = '103px';                 
        Blog.style.height = '180px';
//微信
                                                                                //weichat.style.width = '33px';
        weichat.style.height = '50px';
        weichat.style.top = '220px';
        weichat.querySelector('.text').style.marginTop = '-4px';
//        weichat.querySelector('#weichat_icon').style.transform = 'translate(-5px,-15px) scale(0.8)';                                                                      
                                                                                //weichat.style.left = '331px';
                                                                                //weiT.classList.add('hidden');
//QQ        
                                                                                //QQ.style.width = '33px';
        QQ.style.height = '50px';
        QQ.style.top = '220px';
        QQ.querySelector('.text').style.marginTop = '-4px';
                                                                                //QQ.style.left = '367px';
                                                                                //QQT.classList.add('hidden');
//抖音     
                                                                                //Tiktok.style.width = '33px';
        Tiktok.style.height = '50px';
        Tiktok.style.top = '220px';
        Tiktok.querySelector('.text').style.marginTop = '-4px';
                                                                                //Tiktok.style.right = '22px;';
                                                                                //TikT.classList.add('hidden');
//推特       
                                                                                //tuite.style.width = '33px';
        tuite.style.height = '50px';
        tuite.style.top = '280px';
        tuite.querySelector('.text').style.marginTop = '-4px';
                                                                                //tuite.style.left = '331px';
                                                                                //TuiT.classList.add('hidden');
//邮箱       
                                                                                //youxiang.style.width = '33px';
        youxiang.style.height = '50px';
        youxiang.style.top = '280px';
        youxiang.querySelector('.text').style.marginTop = '-4px';
                                                                                //youxiang.style.left = '367px';
                                                                                //YouT.classList.add('hidden');
//微博        
                                                                                //weibo.style.width = '33px';
        weibo.style.height = '50px';
        weibo.style.top = '280px';
        weibo.querySelector('.text').style.marginTop = '-4px';
                                                                                //weibo.style.right = '22px;';
                                                                                //BoT.classList.add('hidden');
                                                                                //Jumpsimg.forEach(function(img){           //跳转图片隐藏
                                                                                //img.style.display = 'none';
                                                                                //});                                                                        
    });  

    // 监听digital-garden的鼠标移出事件，恢复大小  
    document.getElementById('garden').addEventListener('mouseleave', function() {   
//数字花园
        this.style.width = '259px';  
        this.style.height = '120px';
                                                                                // this.classList.remove('garden-transition');
                                                                                // this.classList.add('retracted');
//博客
        Blog.style.width = '127px';
        Blog.style.height = '130px';
        Blog.querySelector('.text').style.marginTop = '0px';
//微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('.text').style.marginTop = '0px';
//        weichat.querySelector('#weichat_icon').style.transform = 'translate(0px,0px) scale(1)';
                                                                                // weichat.style.left = '25px';
                                                                                // weiT.classList.remove('hidden');
//QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.querySelector('.text').style.marginTop = '0px';
                                                                                // QQ.style.left = '166.7px';
                                                                                // QQT.classList.remove('hidden');
//抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.querySelector('.text').style.marginTop = '0px';
                                                                                //TikT.classList.remove('hidden');
//推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('.text').style.marginTop = '0px';
                                                                                //tuite.style.left = '25px';
                                                                                //TuiT.classList.remove('hidden');
//邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.querySelector('.text').style.marginTop = '0px';
                                                                                //youxiang.style.left = '166.7px';
                                                                                //YouT.classList.remove('hidden');
//微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('.text').style.marginTop = '0px';
//过渡动画                                                                       // BoT.classList.remove('hidden');
                                                                                // Jumpsimg.forEach(function(img){     //跳转图片显现
        });                                                                     //      img.style.display = 'inline';
                                                                                //  });
                                                                                // transitions.forEach(function(div){                                                   //      div.classList.remove('transition');                                  
                                                                                //  });
                                                                                // transitions.forEach(function(div){
                                                                                //      div.classList.add('guodu');        
                                                                                //      setTimeout(function() {
                                                                                // 这里是延迟执行的代码
                                                                                //      div.classList.remove('guodu');       
                                                                                //      console.log('类已被移除，并执行了延迟操作');    
                                                                                //    }, 1000); // 延迟 1000 毫秒（1 秒）  
                                                                                // });

    // 监听Blog盒子的鼠标移入事件，改变其他盒子的大小  
    document.getElementById('Blog').addEventListener('mouseenter', function() { 
    //数字花园
        garden.style.width = '183px';  
        garden.style.height = '170px';
    //博客
        this.style.width = '202px';
        this.style.height = '180px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '50px';
        weichat.style.top = '220px';
        weichat.querySelector('.text').style.marginTop = '-4px';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '50px';
        QQ.style.top = '220px';
        QQ.querySelector('.text').style.marginTop = '-4px';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '50px';
        Tiktok.style.top = '220px';
        Tiktok.querySelector('.text').style.marginTop = '-4px';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '50px';
        tuite.style.top = '280px';
        tuite.querySelector('.text').style.marginTop = '-4px';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '50px';
        youxiang.style.top = '280px';
        youxiang.querySelector('.text').style.marginTop = '-4px';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '50px';
        weibo.style.top = '280px';
        weibo.querySelector('.text').style.marginTop = '-4px';
    //过渡动画
         
    });  

    // 监听Blog盒子的鼠标移出事件，恢复其他盒子的大小  
    document.getElementById('Blog').addEventListener('mouseleave', function() {  
    //数字花园
        garden.style.width = '259px';  
        garden.style.height = '120px';
    //博客
        this.style.width = '127px';
        this.style.height = '130px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('.text').style.marginTop = '0px';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.querySelector('.text').style.marginTop = '0px';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.querySelector('.text').style.marginTop = '0px';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('.text').style.marginTop = '0px';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.querySelector('.text').style.marginTop = '0px';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('.text').style.marginTop = '0px';
    //过渡动画     
        
        
    });




    // 监听weichat盒子的鼠标移入事件，改变其他盒子的大小 
    document.getElementById('weichat').addEventListener('mouseenter', function() {
        
        if (Timer) {                                            //判断Timer是否存在
            clearTimeout(Timer);                                //如果存在，则清空Timer
        } 
        Timer = setTimeout(function(){                          //将函数赋值给Timer，在mouseleave时移除
                    
    //数字花园
        garden.style.width = '255px';  
        garden.style.height = '90px';
        garden.querySelector('.jump').style.marginBottom = '-5px';
    //博客
        Blog.style.width = '130px';
        Blog.style.height = '100px';
        Blog.querySelector('.jump').style.marginBottom = '-5px';
        Blog.querySelector('.text').style.marginBottom = '-10px';
    //微信
        weichat.style.width = '220px';
        weichat.style.height = '120px';
        weichat.style.top = '140px';
        weichat.querySelector('.text').style.transform = 'translate(-20px,15px) scale(1.6)';
        weichat.querySelector('.tiaozhuan').style.transform = 'translate(5px,15px) scale(0.6)';
    //QQ
        QQ.style.width = '85px';
        QQ.style.height = '120px';
        QQ.style.top = '140px';
        QQ.style.left = '255px';
        QQ.querySelector('#QQ-img').style.transform = 'translate(5px,-10px) scale(0.8)';     //向右移5px，向上移10px
        QQ.querySelector('.text').style.transform = 'translate(-20px,80px)';                //将文字向左移20px，向下移80px
        QQ.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';           //当选择weichat时，QQ和Tiktok的跳转图标会放大 因此将跳转图标缩放0.6倍
        QQ.querySelector('.tiaozhuan').style.visibility = 'hidden';              //跳转图标隐藏
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeIn 1s forwards';   //跳转图标透明度过渡动画
    //抖音
        Tiktok.style.width = '85px';
        Tiktok.style.height = '120px';
        Tiktok.style.top = '140px';
        Tiktok.querySelector('#Tiktok-img').style.transform = 'translate(2px,-10px) scale(0.8)';
        Tiktok.querySelector('.text').style.transform = 'translate(-15px,80px)';
        Tiktok.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'hidden';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeIn 1s forwards';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '50px';
        tuite.style.top = '275px';
        tuite.querySelector('.text').style.transform = 'translateY(8px)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'hidden';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeIn 1s forwards';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '50px';
        youxiang.style.top = '275px';
        youxiang.querySelector('.text').style.transform = 'translateY(8px)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'hidden';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeIn 1s forwards';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '50px';
        weibo.style.top = '275px';
        weibo.querySelector('.text').style.transform = 'translateY(8px)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeIn 1s forwards';
            
        }, 150);
    });

    // 监听weichat盒子的鼠标移出事件，恢复其他盒子的大小
    document.getElementById('weichat').addEventListener('mouseleave', function() {
        
    if (Timer) {  
            clearTimeout(Timer);                                //移除Timer  （231行）
        }    
        
    //数字花园
        garden.style.width = '259px';  
        garden.style.height = '120px';
        garden.querySelector('.jump').style.marginBottom = '0px';
    //博客 
        Blog.style.width = '127px';
        Blog.style.height = '130px';
        Blog.querySelector('.text').style.marginBottom = '0px';
        Blog.querySelector('.jump').style.marginBottom = '0px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('.text').style.transform = 'translate(0px,0px) scale(1.0)';
        weichat.querySelector('.tiaozhuan').style.transform = 'translate(0px,0px) scale(1.0)';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.style.left = '166.7px';
        QQ.querySelector('#QQ-img').style.transform = 'translate(0px,0px) scale(1.0)';
        QQ.querySelector('.text').style.transform = 'translate(0px,0px)';
        QQ.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'visible';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.style.right = '25px';
        Tiktok.querySelector('#Tiktok-img').style.transform = 'translate(0px,0px) scale(1.0)';
        Tiktok.querySelector('.text').style.transform = 'translate(0px,0px)';
        Tiktok.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'visible';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('.text').style.transform = 'translateY(0px)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'visible';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.querySelector('.text').style.transform = 'translateY(0px)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'visible';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('.text').style.transform = 'translateY(0px)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'visible';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
        
    });

    // 监听QQ盒子的鼠标移入事件，改变其他盒子的大小
    document.getElementById('QQ').addEventListener('mouseenter', function() {
        
        if (Timer) {  
            clearTimeout(Timer);  
        }
        Timer = setTimeout(function(){
        
    //数字花园
        garden.style.width = '255px';  
        garden.style.height = '90px';
        garden.querySelector('.jump').style.marginBottom = '-5px';
    //博客
        Blog.style.width = '130px';
        Blog.style.height = '100px';
        Blog.querySelector('.jump').style.marginBottom = '-5px';
        Blog.querySelector('.text').style.marginBottom = '-10px';
    //微信
        weichat.style.width = '85px';
        weichat.style.height = '120px';
        weichat.style.top = '140px';
        weichat.querySelector('#weichat-img').style.transform = 'translate(5px,-10px) scale(0.8)';
        weichat.querySelector('.text').style.transform = 'translate(-15px,80px)';
        weichat.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //QQ
        QQ.style.width = '220px';
        QQ.style.height = '120px';
        QQ.style.top = '140px';
        QQ.style.left = '120px';
        QQ.querySelector('.text').style.transform = 'translate(-20px,15px) scale(1.6)';
        QQ.querySelector('.tiaozhuan').style.transform = 'translate(5px,15px) scale(0.6)';
    //抖音
        Tiktok.style.width = '85px';
        Tiktok.style.height = '120px';
        Tiktok.style.top = '140px';
        Tiktok.querySelector('#Tiktok-img').style.transform = 'translate(2px,-10px) scale(0.8)';
        Tiktok.querySelector('.text').style.transform = 'translate(-15px,80px)';
        Tiktok.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'hidden';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '50px';
        tuite.style.top = '275px';
        tuite.querySelector('.text').style.transform = 'translateY(8px)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'hidden';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '50px';
        youxiang.style.top = '275px';
        youxiang.querySelector('.text').style.transform = 'translateY(8px)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'hidden';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '50px';
        weibo.style.top = '275px';
        weibo.querySelector('.text').style.transform = 'translateY(8px)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
        
        },150);
    });
    
    // 监听QQ盒子的鼠标移出事件，恢复其他盒子的大小
    document.getElementById('QQ').addEventListener('mouseleave', function() {
        
        if (Timer) {  
            clearTimeout(Timer);  
        }
        
    //数字花园
        garden.style.width = '259px';  
        garden.style.height = '120px';
        garden.querySelector('.jump').style.marginBottom = '0px';
    //博客 
        Blog.style.width = '127px';
        Blog.style.height = '130px';
        Blog.querySelector('.text').style.marginBottom = '0px';
        Blog.querySelector('.jump').style.marginBottom = '0px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('#weichat-img').style.transform = 'translate(0px,0px) scale(1.0)';
        weichat.querySelector('.text').style.transform = 'translate(0px,0px)';
        weichat.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'visible';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.style.left = '166.7px';
        QQ.querySelector('.text').style.transform = 'translate(0px,0px) scale(1.0)';
        QQ.querySelector('.tiaozhuan').style.transform = 'translate(0px,0px) scale(1.0)';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.style.right = '25px';
        Tiktok.querySelector('#Tiktok-img').style.transform = 'translate(0px,0px) scale(1.0)';
        Tiktok.querySelector('.text').style.transform = 'translate(0px,0px)';
        Tiktok.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'visible';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('.text').style.transform = 'translateY(0px)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'visible';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.querySelector('.text').style.transform = 'translateY(0px)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'visible';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('.text').style.transform = 'translateY(0px)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'visible';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
            
        
    });
    // 监听Tiktok盒子的鼠标移入事件，改变其他盒子的大小 
    document.getElementById('Tiktok').addEventListener('mouseenter', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        Timer = setTimeout(function(){
        
    //数字花园
        garden.style.width = '255px';  
        garden.style.height = '90px';
        garden.querySelector('.jump').style.marginBottom = '-5px';
    //博客
        Blog.style.width = '130px';
        Blog.style.height = '100px';
        Blog.querySelector('.jump').style.marginBottom = '-5px';
        Blog.querySelector('.text').style.marginBottom = '-10px';
    //微信
        weichat.style.width = '85px';
        weichat.style.height = '120px';
        weichat.style.top = '140px';
        weichat.querySelector('#weichat-img').style.transform = 'translate(5px,-10px) scale(0.8)';
        weichat.querySelector('.text').style.transform = 'translate(-15px,80px)';
        weichat.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //QQ
        QQ.style.width = '85px';
        QQ.style.height = '120px';
        QQ.style.top = '140px';
        QQ.style.left = '120px';
        QQ.querySelector('#QQ-img').style.transform = 'translate(5px,-10px) scale(0.8)';     
        QQ.querySelector('.text').style.transform = 'translate(-20px,80px)'; 
        QQ.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'hidden';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //抖音
        Tiktok.style.width = '220px';
        Tiktok.style.height = '120px';
        Tiktok.style.top = '140px';
        Tiktok.querySelector('.text').style.transform = 'translate(-20px,15px) scale(1.6)';
        Tiktok.querySelector('.tiaozhuan').style.transform = 'translate(5px,15px) scale(0.6)';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '50px';
        tuite.style.top = '275px';
        tuite.querySelector('.text').style.transform = 'translateY(8px)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'hidden';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '50px';
        youxiang.style.top = '275px';
        youxiang.querySelector('.text').style.transform = 'translateY(8px)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'hidden';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '50px';
        weibo.style.top = '275px';
        weibo.querySelector('.text').style.transform = 'translateY(8px)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
        
        },150);
    });  
    // 监听Tiktok盒子的鼠标移出事件，恢复其他盒子的大小
    document.getElementById('Tiktok').addEventListener('mouseleave', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        
    //数字花园
        garden.style.width = '259px';  
        garden.style.height = '120px';
        garden.querySelector('.jump').style.marginBottom = '0px';
    //博客 
        Blog.style.width = '127px';
        Blog.style.height = '130px';
        Blog.querySelector('.text').style.marginBottom = '0px';
        Blog.querySelector('.jump').style.marginBottom = '0px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('#weichat-img').style.transform = 'translate(0px,0px) scale(1.0)';
        weichat.querySelector('.text').style.transform = 'translate(0px,0px)';
        weichat.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'visible';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.style.left = '166.7px';
        QQ.querySelector('#QQ-img').style.transform = 'translate(0px,0px) scale(1.0)';
        QQ.querySelector('.text').style.transform = 'translate(0px,0px)';
        QQ.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'visible';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.style.right = '25px';  
        Tiktok.querySelector('.text').style.transform = 'translate(0px,0px) scale(1.0)';
        Tiktok.querySelector('.tiaozhuan').style.transform = 'translate(0px,0px) scale(1.0)';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('.text').style.transform = 'translateY(0px)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'visible';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.querySelector('.text').style.transform = 'translateY(0px)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'visible';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('.text').style.transform = 'translateY(0px)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'visible';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    });

    // 监听推特盒子的鼠标移入事件，改变其他盒子的大小 
    document.getElementById('tuite').addEventListener('mouseenter', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        Timer = setTimeout(function(){
        
    //数字花园
        garden.style.width = '255px';  
        garden.style.height = '90px';
        garden.querySelector('.jump').style.marginBottom = '-5px';
    //博客
        Blog.style.width = '130px';
        Blog.style.height = '100px';
        Blog.querySelector('.jump').style.marginBottom = '-5px';
        Blog.querySelector('.text').style.marginBottom = '-10px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '50px';
        weichat.style.top = '140px';
        weichat.querySelector('.text').style.transform = 'translateY(8px)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '50px';
        QQ.style.top = '140px';
        QQ.style.left = '166.7px';
        QQ.querySelector('.text').style.transform = 'translateY(8px)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'hidden';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '50px';
        Tiktok.style.top = '140px';
        Tiktok.querySelector('.text').style.transform = 'translateY(8px)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'hidden';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //推特
        tuite.style.width = '220px';
        tuite.style.height = '120px';
        tuite.style.top = '205px';
        tuite.querySelector('.text').style.transform = 'translate(-20px,15px) scale(1.6)';
        tuite.querySelector('.tiaozhuan').style.transform = 'translate(5px,15px) scale(0.6)';

    //邮箱
        youxiang.style.width = '85px';
        youxiang.style.height = '120px';
        youxiang.style.top = '205px';
        youxiang.style.left = '255px';
        youxiang.querySelector('#youxiang-img').style.transform = 'translate(5px,-10px) scale(0.8)';     
        youxiang.querySelector('.text').style.transform = 'translate(-15px,80px)'; 
        youxiang.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'hidden';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //微博
        weibo.style.width = '85px';
        weibo.style.height = '120px';
        weibo.style.top = '205px';
        weibo.querySelector('#weibo-img').style.transform = 'translate(4px,-10px) scale(0.8)';     
        weibo.querySelector('.text').style.transform = 'translate(-15px,80px)';
        weibo.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
        
        },150);
    });  
    // 监听推特盒子的鼠标移出事件，恢复其他盒子的大小
    document.getElementById('tuite').addEventListener('mouseleave', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        
    //数字花园
        garden.style.width = '259px';  
        garden.style.height = '120px';
        garden.querySelector('.jump').style.marginBottom = '0px';
    //博客 
        Blog.style.width = '127px';
        Blog.style.height = '130px';
        Blog.querySelector('.text').style.marginBottom = '0px';
        Blog.querySelector('.jump').style.marginBottom = '0px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('.text').style.transform = 'translateY(0px)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'visible';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.style.left = '166.7px';
        QQ.querySelector('.text').style.transform = 'translateY(0px)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'visible';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.style.right = '25px';  
        Tiktok.querySelector('.text').style.transform = 'translateY(0px)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'visible';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('.text').style.transform = 'translate(0px,0px) scale(1.0)';
        tuite.querySelector('.tiaozhuan').style.transform = 'translate(0px,0px) scale(1.0)';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.style.left = '166.7px';
        youxiang.querySelector('#youxiang-img').style.transform = 'translate(0px,0px) scale(1.0)';
        youxiang.querySelector('.text').style.transform = 'translate(0px,0px)';
        youxiang.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'visible';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('#weibo-img').style.transform = 'translate(0px,0px) scale(1.0)';
        weibo.querySelector('.text').style.transform = 'translate(0px,0px)';
        weibo.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'visible';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    });

    // 监听邮箱盒子的鼠标移入事件，改变其他盒子的大小 
    document.getElementById('youxiang').addEventListener('mouseenter', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        Timer = setTimeout(function(){
        
    //数字花园
        garden.style.width = '255px';  
        garden.style.height = '90px';
        garden.querySelector('.jump').style.marginBottom = '-5px';
    //博客
        Blog.style.width = '130px';
        Blog.style.height = '100px';
        Blog.querySelector('.jump').style.marginBottom = '-5px';
        Blog.querySelector('.text').style.marginBottom = '-10px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '50px';
        weichat.style.top = '140px';
        weichat.querySelector('.text').style.transform = 'translateY(8px)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '50px';
        QQ.style.top = '140px';
        QQ.querySelector('.text').style.transform = 'translateY(8px)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'hidden';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '50px';
        Tiktok.style.top = '140px';
        Tiktok.querySelector('.text').style.transform = 'translateY(8px)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'hidden';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //推特
        tuite.style.width = '85px';
        tuite.style.height = '120px';
        tuite.style.top = '205px';
        tuite.querySelector('#tuite-img').style.transform = 'translate(5px,-10px) scale(0.8)';     
        tuite.querySelector('.text').style.transform = 'translate(-15px,80px)'; 
        tuite.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';    
        tuite.querySelector('.tiaozhuan').style.visibility = 'hidden';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //邮箱
        youxiang.style.width = '220px';
        youxiang.style.height = '120px';
        youxiang.style.top = '205px';
        youxiang.style.left = '120px';
        youxiang.querySelector('.text').style.transform = 'translate(-20px,15px) scale(1.6)';
        youxiang.querySelector('.tiaozhuan').style.transform = 'translate(5px,15px) scale(0.6)';
    //微博
        weibo.style.width = '85px';
        weibo.style.height = '120px';
        weibo.style.top = '205px';
        weibo.querySelector('#weibo-img').style.transform = 'translate(4px,-10px) scale(0.8)';     
        weibo.querySelector('.text').style.transform = 'translate(-15px,80px)'; 
        weibo.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
        
        },150);
    });  
    // 监听邮箱盒子的鼠标移出事件，恢复其他盒子的大小
    document.getElementById('youxiang').addEventListener('mouseleave', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        
    //数字花园
        garden.style.width = '259px';  
        garden.style.height = '120px';
        garden.querySelector('.jump').style.marginBottom = '0px';
    //博客 
        Blog.style.width = '127px';
        Blog.style.height = '130px';
        Blog.querySelector('.text').style.marginBottom = '0px';
        Blog.querySelector('.jump').style.marginBottom = '0px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('.text').style.transform = 'translateY(0px)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'visible';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.style.left = '166.7px';
        QQ.querySelector('.text').style.transform = 'translateY(0px)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'visible';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.style.right = '25px';
        Tiktok.querySelector('.text').style.transform = 'translateY(0px)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'visible';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('#tuite-img').style.transform = 'translate(0px,0px) scale(1.0)';
        tuite.querySelector('.text').style.transform = 'translate(0px,0px)';
        tuite.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'visible';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.style.left = '166.7px';
        youxiang.querySelector('.text').style.transform = 'translate(0px,0px) scale(1.0)';
        youxiang.querySelector('.tiaozhuan').style.transform = 'translate(0px,0px) scale(1.0)';
    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('#weibo-img').style.transform = 'translate(0px,0px) scale(1.0)';
        weibo.querySelector('.text').style.transform = 'translate(0px,0px)';
        weibo.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        weibo.querySelector('.tiaozhuan').style.visibility = 'visible';
        weibo.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    });

    // 监听微博盒子的鼠标移入事件，改变其他盒子的大小 
    document.getElementById('weibo').addEventListener('mouseenter', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        Timer = setTimeout(function(){
        
    //数字花园
        garden.style.width = '255px';  
        garden.style.height = '90px';
        garden.querySelector('.jump').style.marginBottom = '-5px';
    //博客
        Blog.style.width = '130px';
        Blog.style.height = '100px';
        Blog.querySelector('.jump').style.marginBottom = '-5px';
        Blog.querySelector('.text').style.marginBottom = '-10px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '50px';
        weichat.style.top = '140px';
        weichat.querySelector('.text').style.transform = 'translateY(8px)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'hidden';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '50px';
        QQ.style.top = '140px';
        QQ.querySelector('.text').style.transform = 'translateY(8px)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'hidden';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '50px';
        Tiktok.style.top = '140px';
        Tiktok.querySelector('.text').style.transform = 'translateY(8px)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'hidden';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //推特
        tuite.style.width = '85px';
        tuite.style.height = '120px';
        tuite.style.top = '205px';
        tuite.querySelector('#tuite-img').style.transform = 'translate(5px,-10px) scale(0.8)';     
        tuite.querySelector('.text').style.transform = 'translate(-15px,80px)';
        tuite.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'hidden';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //邮箱
        youxiang.style.width = '85px';
        youxiang.style.height = '120px';
        youxiang.style.top = '205px';
        youxiang.style.left = '120px';
        youxiang.querySelector('#youxiang-img').style.transform = 'translate(5px,-10px) scale(0.8)';     
        youxiang.querySelector('.text').style.transform = 'translate(-15px,80px)';
        youxiang.querySelector('.tiaozhuan').style.transform = 'scale(0.6)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'hidden';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeIn 2s forwards';
    //微博
        weibo.style.width = '220px';
        weibo.style.height = '120px';
        weibo.style.top = '205px';
        weibo.querySelector('.text').style.transform = 'translate(-20px,15px) scale(1.6)';
        weibo.querySelector('.tiaozhuan').style.transform = 'translate(5px,15px) scale(0.6)';

        },150);
    });  
    // 监听微博盒子的鼠标移出事件，恢复其他盒子的大小
    document.getElementById('weibo').addEventListener('mouseleave', function() {
        if (Timer) {  
            clearTimeout(Timer);  
        }
        
    //数字花园
        garden.style.width = '259px';  
        garden.style.height = '120px';
        garden.querySelector('.jump').style.marginBottom = '0px';
    //博客 
        Blog.style.width = '127px';
        Blog.style.height = '130px';
        Blog.querySelector('.text').style.marginBottom = '0px';
        Blog.querySelector('.jump').style.marginBottom = '0px';
    //微信
        weichat.style.width = '126.7px';
        weichat.style.height = '70px';
        weichat.style.top = '170px';
        weichat.querySelector('.text').style.transform = 'translateY(0px)';
        weichat.querySelector('.tiaozhuan').style.visibility = 'visible';
        weichat.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //QQ
        QQ.style.width = '126.7px';
        QQ.style.height = '70px';
        QQ.style.top = '170px';
        QQ.style.left = '166.7px';
        QQ.querySelector('.text').style.transform = 'translateY(0px)';
        QQ.querySelector('.tiaozhuan').style.visibility = 'visible';
        QQ.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //抖音
        Tiktok.style.width = '126.7px';
        Tiktok.style.height = '70px';
        Tiktok.style.top = '170px';
        Tiktok.style.right = '25px';
        Tiktok.querySelector('.text').style.transform = 'translateY(0px)';
        Tiktok.querySelector('.tiaozhuan').style.visibility = 'visible';
        Tiktok.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //推特
        tuite.style.width = '126.7px';
        tuite.style.height = '70px';
        tuite.style.top = '255px';
        tuite.querySelector('#tuite-img').style.transform = 'translate(0px,0px) scale(1.0)';
        tuite.querySelector('.text').style.transform = 'translate(0px,0px)';
        tuite.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        tuite.querySelector('.tiaozhuan').style.visibility = 'visible';
        tuite.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';
    //邮箱
        youxiang.style.width = '126.7px';
        youxiang.style.height = '70px';
        youxiang.style.top = '255px';
        youxiang.style.left = '166.7px';
        youxiang.querySelector('#youxiang-img').style.transform = 'translate(0px,0px) scale(1.0)';
        youxiang.querySelector('.text').style.transform = 'translate(0px,0px)';
        youxiang.querySelector('.tiaozhuan').style.transform = 'scale(1.0)';
        youxiang.querySelector('.tiaozhuan').style.visibility = 'visible';
        youxiang.querySelector('.tiaozhuan').style.animation = 'fadeOut 1s forwards 1s';

    //微博
        weibo.style.width = '126.7px';
        weibo.style.height = '70px';
        weibo.style.top = '255px';
        weibo.querySelector('.text').style.transform = 'translate(0px,0px) scale(1.0)';
        weibo.querySelector('.tiaozhuan').style.transform = 'translate(0px,0px) scale(1.0)';
        
    });







/////////////////////////////////////////////////////////////阴影蒙版////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {  
    var overlay = document.getElementById('overlay');  
    var jiantou = overlay.querySelector('#svg-jiantou');
    // 假设我们想让动画在3秒后开始，并在1秒内结束  
    jiantou.addEventListener('click', function() {  
        // 移除或隐藏加载动画内容（如果需要）  
        // overlay.removeChild(overlay.querySelector('.loader'));  
        // 触发向上移动动画  
        overlay.classList.add('hidden');  
        // 可以在动画结束后执行一些操作，比如显示页面内容  
        setTimeout(function() {  
            // 例如，移除全屏背景  
            overlay.style.display = 'none';  
            // 允许页面滚动  
            document.body.style.overflow = 'auto';  
        }, 500); // 确保动画完成后执行  
    });
});
document.addEventListener('DOMContentLoaded', function() {
	//头像移动函数
	setTimeout(function(){
		var head = document.getElementById("headphoto");
		head.style.borderRadius = '50%';
		head.style.height = '28%';
		head.style.top = '230px';
		head.style.right = '18%';
	},1500);
	setTimeout(function () {  
        const topDiv = document.querySelector('.top-div');  
        const currentTransform = parseInt(window.getComputedStyle(topDiv).transform.match(/\d+/g)[0]);  
        if (currentTransform < 100) {  
            topDiv.style.transform = `translateX(${currentTransform + 140}%)`;  
        }  
    },2000);
	
    // 定义一个函数来执行动画开始的操作  
    setTimeout(function() {  
        // 获取ID为'container'的元素  
        var container = document.getElementById('container');  
        // 如果元素存在，则添加'fin'类  
        if (container) {  
            container.classList.add('fin');  
        }  // 使用setTimeout来延迟执行函数，延迟时间为3000毫秒    
    },3000); 
    
});
      $(function () {
       var $win = $(window);
       var $backToTop = $('.js-back-to-top');
        // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕
       $win.scroll(function () {
       if ($win.scrollTop() > 100) {
       $backToTop.show();
       } 
       else {
       $backToTop.hide();
       }
       });
        // 當用戶點擊按鈕時，通過動畫效果返回頭部
       $backToTop.click(function () {
       $('html, body').animate({scrollTop: 0}, 600);
       });
       });


      $(function(){
      　$(window).load(function(){
      　　$(window).bind('scroll resize', function(){
      　　var $this = $(this);
      　　var $this_Top=$this.scrollTop();
      　　//當高度小於100時，關閉區塊
      　　if($this_Top < 100){
      　　　$('#top-bar').stop().animate({top:"-100px"});
      　　　}
      　　if($this_Top > 100){
      　　　$('#top-bar').stop().animate({top:"0px"});   　　　
            }
      　　}).scroll();
      　});
      });


      $('.to-aboutme').click(function(){
          $('html,body').animate({scrollTop:$('#關於我').offset().top},800);
      });

      $('.to-skill').click(function(){
          $('html,body').animate({scrollTop:$('#技能').offset().top},800);
      });

      $('.to-experience').click(function(){
          $('html,body').animate({scrollTop:$('#經歷').offset().top},800);
      });

      $('.to-portfolio').click(function(){
          $('html,body').animate({scrollTop:$('#作品集').offset().top},800);
      });


      $('.button1').click(function(){
        $(".p1").toggle(300);
      });

      $('.button2').click(function(){
        $(".p2").toggle(300);
      });

      $('.button3').click(function(){
        $(".p3").toggle(300);
      });

      $('.button4').click(function(){
        $(".p4").toggle(300);
      });

      $('.button5').click(function(){
        $(".p5").toggle(300);
      });

      $('.button6').click(function(){
        $(".p6").toggle(300);
      });

      $('.button7').click(function(){
        $(".p7").toggle(300);
      });

      $('.button8').click(function(){
        $(".p8").toggle(300);
      });

      $('.button9').click(function(){
        $(".p9").toggle(300);
      });
      

      
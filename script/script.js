$(function(){
    $(".btn2").click(function(){
        $("#popup1").fadeIn(200);
    });
    $(".close").click(function(){
        $("#popup1").fadeOut(200);
    });

    $(".btn3").click(function(){
        $("#popup2").fadeIn(200);
    });
    $(".close").click(function(){
        $("#popup2").fadeOut(200);
    });

    $(".btn4").click(function(){
        $("#popup3").fadeIn(200);
    });
    $(".close").click(function(){
        $("#popup3").fadeOut(200);
    });

    $(".btn5").click(function(){
        $("#popup4").fadeIn(200);
    });
    $(".close").click(function(){
        $("#popup4").fadeOut(200);
    });

    $(".btn6").click(function(){
        $("#popup5").fadeIn(200);
    });
    $(".close").click(function(){
        $("#popup5").fadeOut(200);
    });

    const saTriggerMargin = 400;
      const saElementList = document.querySelectorAll('.sa');

      const saFunc = function() {
        for (const element of saElementList) {
          if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
              element.classList.add('show');
            }
          }
        }
      }

      window.addEventListener('load', saFunc);
      window.addEventListener('scroll', saFunc);
});
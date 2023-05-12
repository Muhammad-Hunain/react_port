//Navigation Start
$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});
//Navigation End

// for dark mode iconsnction*******************************************
       
$("document").ready(function(){
    $("#moon").click(function(){
      $("#moon").slideDown();

      if($("#moon").hide()){
        $("#sun").css("display","inline-block");
      }
      $("#sun").click(function(){
        $("#sun").hide();
        if($("#sun").hide()){
          $("#moon").show();

      } 
      })
    })
  })
// for dark mode iconsnction*******************************************

  $("document").ready(function(){
    $("#moon").click(function(){
      $("body").css("background","#212121");
      if($("body").css("background","#212121")){
        $(".menu-btn").css("color","white");
        $(".web-design-text h6 ").css("color","white");
        $(".bar p ").css("color","white");
        $(".my-profession ").css("color","#9e9e9e");
        $("#sun").click(function(){
          $("body").css("background","#fff");
        $(".web-design-text h6").css("color","");
        })
      }
    })
  })

  $(document).ready(function(){
    $('#moon').click(function(){
      $('.hide-bg-color').css({'background':'#423a6d57'})
    })
    $('#sun').click(function(){
      $('.hide-bg-color').css({'background':'#eff1ff'})
    })
  })




  $(document).ready(function(){
    $(".web-design").click(function(){
      $(".icon1").toggleClass("down1");
    })
  
    $(".back-end").click(function(){
      $(".icon2").toggleClass("down2");
    });
  });

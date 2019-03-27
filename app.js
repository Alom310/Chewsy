$(document).ready(function(){
    $(".hamMenu").click(function(){
      $("#menu").slideToggle();
    });
  });

  function myFunction(x) {
    x.classList.toggle("change");
  };
  
  $('.menu').on('click', function(){
      $('.sidenav').toggle('slow')
  });
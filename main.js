$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
      $(this).toggleClass('open');
      $('.top-nav-mob').toggleClass('open');
    });
  
    $('.top-nav-mob .nav-link').on('click', function(){
      $('.menu-toggler').removeClass('open');
      $('.top-nav-mob').toggleClass('open');
    });
  });
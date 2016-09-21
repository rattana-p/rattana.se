$(document).ready(function(){            
  
  $('#my-kontakt-info').hover(function(){
    $(this).css({
      "color":"white",
      "text-decolation":"none",
      "opacity":"1",
      "background-color":"rgba(255, 250, 42, .45)",
      "transition":"all .7s linear"})
  });
  
  $('#my-kontakt-info').mouseleave(function(){
    $(this).css({
      "opacity":"1.2",
      "color":"white",     
      "background-color":"rgba(255, 250, 42, .13)",
      "transition":"all .6s linear"})
  });

  $('.social img').hover(function(){
    $(this).css({  
        "color":"rgba(254, 249, 118, .9);" },
      
    $('#my-kontakt-info img').css({
      "transition":"all 1s linear",
      "transition-property":"transform",
      "transform":"rotate(45deg)" } ) )
   }); 

  
  $('.social img').mouseleave(function(){
   $('#my-kontakt-info img').css({
      "transition":"all .8s linear",
      "transition-property":"transform",
      "transform":"rotate(0deg)" })
  }); 
   
  $('.nav a').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $(this).parent().addClass("active");
});

  
  
  
  
});

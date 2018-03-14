$("#modal_btn").click(function () {
    $('.ui.mini.modal').modal('show');
    return false;
});

$("#banner_btn").click(function () {
    $("#top_banner").slideUp();
});

$('.special.cards .image').dimmer({
    on: 'hover'
});

$('#carousel_ban_body').liquidCarousel({
    loop: false
});

$(window).scroll(function() {
    let nav1_y = $('#gnb').offset().top;
    let nav2_y = $('section').offset().top;
    if($(this).scrollTop() >= nav2_y){
        $('#sticky_wrap').show();
        $('#sticky_nav1').show();
        $('#sticky_nav2').show();
    }else if($(this).scrollTop() >= nav1_y){
        $('#sticky_wrap').show();
        $('#sticky_nav1').show();
    }else{
        $('#sticky_wrap').hide();
        $('#sticky_nav1').hide();
        $('#sticky_nav2').hide();
    }

  });
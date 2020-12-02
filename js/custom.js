$(function(){

    $('.info li').click(function(){
        $(this).addClass('Active').siblings('li').removeClass('Active');
        // console.log($(this).data('info'));
        $('.info-content div').hide();
        $('.' + $(this).data('info')).fadeIn()
    });

});
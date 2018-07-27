$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<div class="control left"></div>', '<div class="control right"></div>'],
        dots: true,
        items: 1
    })

    $('.js-make-bigger').click(function () {
        var valueNode = $(this).closest($('.counter')).find($('.value'));
        var valueData = valueNode.html();
        valueData++;
        valueNode.html(valueData);
    });

    $('.js-make-less').click(function () {
        var valueNode = $(this).closest($('.counter')).find($('.value'));
        var valueData = valueNode.html();
        if (valueData >= 1) valueData--; else return;
        valueNode.html(valueData);
    });

    $('#js-menu-handler').click(function () {
        var parentWrap = $(this).closest($('.mobile-nav-wrapper'));
        var menuToOpen = parentWrap.find($('.menu'));

        menuToOpen.slideToggle(300);
    });

    $('.with-dropdown').click(function () {
        var menuToOpen = $(this).find($('.dropdown'));

        menuToOpen.slideToggle(300);
    });

    $('#js-thumbs img').click(function () {
        var order = $(this).data('order');
        $('#js-thumbs img').removeClass('active');
        $(this).addClass('active');
        $('#js-product li').css('display', 'none');
        $('#js-product li[data-order=' + order + ']').css('display', 'block');
    });

    $('.rate-star').click(function () {
        var currentRate = $('.voted').length;
        var clickedRate = $(this).data('value');

        var newRate = Math.ceil((currentRate + clickedRate) / 2);
        $('.rate-star').removeClass('voted');

        for (var i=0;i<newRate;i++){
            $($('.rate-star')[i]).addClass('voted')
        }

        $('.rate-wrapper').addClass('disabled');
    });

    $('.js-toggle-tab').click(function () {
        var tab = $(this).data('tab');
        $('.js-toggle-tab').removeClass('active');
        $('.js-tab-handler').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-handler[data-tab="' + tab +'"]').addClass('active')
    });


});
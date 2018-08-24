$(document).ready(function () {
    $('.owl-carousel-main, .owl-carousel-sales').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<div class="control left"></div>', '<div class="control right"></div>'],
        dots: true,
        items: 1
    });

    if ($(window).width() <= 768) {
        //хиты продаж
        $('.mobile-768-products-carousel-1, ' +
            '.mobile-768-products-carousel-2, ' +
            '.mobile-768-products-carousel-3').children('.owl-carousel').remove();
        $('.mobile-768-products-carousel-1, .mobile-768-products-carousel-2').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 3,
            responsive:{
                0:{
                    items:2,

                },
                500:{
                    items:3,

                },
                768:{
                    items:4,

                }
            }
        });
        $('.mobile-768-products-carousel-3').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1
        });
        $('.owl-carousel-mobile-768-2, .owl-carousel-mobile-768-3, .owl-carousel-mobile-768-4').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            items: 1
        });
    }

    $('.owl-carousel-news, .owl-carousel-new-products').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<div class="control left"></div>', '<div class="control right"></div>'],
        dots: false,
        items: 1
    });

    if ($('.fixed-block').length) {
        var topPosition = $('.fixed-block').offset().top;
        var leftPosition = $('.fixed-block').offset().left;
        $('.fixed-block').css({'left':leftPosition});
        $('.fixed-fix').css({'height': $('.fixed-block').outerHeight()});
        $(document).on('scroll', function() {
            if (topPosition <= $(document).scrollTop()) {
                $('.fixed-block').addClass('fixed');
                $('.fixed-block').css({'left':leftPosition});

                $('.fixed-fix').addClass('active');
                $('.fixed-fix').css({'height': $('.fixed-block').outerHeight()});
            }
            else {
                $('.fixed-block').removeClass('fixed');
                $('.fixed-fix').removeClass('active');
            }
        });
    }

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
        var menuToOpen = $(this).find($('.dropdown-container'));

        menuToOpen.slideToggle(300);
        $('.with-dropdown').toggleClass('active');
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

        for (var i = 0; i < newRate; i++) {
            $($('.rate-star')[i]).addClass('voted')
        }

        $('.rate-wrapper').addClass('disabled');
    });

    $('.js-toggle-tab').click(function () {
        var tab = $(this).data('tab');
        $('.js-toggle-tab').removeClass('active');
        $('.js-tab-handler').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-handler[data-tab="' + tab + '"]').addClass('active')
    });

    $('.js-nail-handler').click(function () {
        event.preventDefault();
        if ($(this).hasClass('.disabled')) return;

        $(this).toggleClass('active');
        $(this).find('input').attr('checked', true);
    });

    $('.choose-brand-dropdown .name').click(function () {
        event.preventDefault();

        $('.choose-brand-dropdown').toggleClass('active');
    });



    $('.js-reset').click(function () {
        $('.price-down').val('');
        $('.price-up').val('');

        $('.js-nail-handler').removeClass('active');
        $('.js-nail-handler').find('input').attr('checked', false);
        $('.choose-brand-dropdown').find('input').attr('checked', false);
    });

});
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


    var input1 = $('.price-down');
    var input2 = $('.price-up');

    var values = [$('#min').html(), $('#max').html()];

    input1.change(function () {
        $('.slider').slider("values", 0, $(this).val());

    });

    input2.change(function () {
        $('.slider').slider("values", 1, $(this).val());

    });

    $('.slider').slider({
        range: true,
        min: parseInt(values[0]),
        max: parseInt(values[1]),
        step: 10,
        values: values,
        animate: 'slow',
        create: function () {
            $('#min').appendTo($('.slider span').get(0));
            $('#max').appendTo($('.slider span').get(1));
        },
        change: function (event, ui) {
            $(ui.handle).find('a').html('' + ui.value);

            var index = $(ui)[0].handleIndex;
            var value = ui.value;
        },
        slide: function (event, ui) {
            $(ui.handle).find('a').html('' + ui.value);

            var index = $(ui)[0].handleIndex;
            var value = ui.value;

            if (index === 0)
                input1.val(value);
            else
                input2.val(value);
        }
    });

// only initially needed
    $('#min').html('' + $('.slider').slider('values', 0)).position({
        my: 'center top',
        at: 'center bottom',
        of: $('.slider span:eq(0)'),
        offset: "0, 10"
    });

    $('#max').html('' + $('.slider').slider('values', 1)).position({
        my: 'center top',
        at: 'center bottom',
        of: $('.slider span:eq(1)'),
        offset: "0, 10"
    });


    $('.js-reset').click(function () {
        input1.val('');
        input2.val('');
        $('.slider').slider( "values", values );

        $('.js-nail-handler').removeClass('active');
        $('.js-nail-handler').find('input').attr('checked', false);
    });

});
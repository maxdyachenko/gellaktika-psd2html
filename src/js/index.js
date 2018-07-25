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

});
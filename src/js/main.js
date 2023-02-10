import $ from './lib/lib';

$('.btn').on('click', function () {
    $('div').eq(1).toggleClass('active');
});

$('.active').addAttr('data-value', 'haha');

// function seyHello() {
//     console.log('Hello');
// }

// console.log($('.btn').html());

$('div').click(function () {
    console.log($(this).index());
});


console.log($('div').eq(2).find('.some'));
import $ from './lib/lib';

$('.btn').on('click', function () {
    $(this).toggleClass('active');
});

$('.active').addAttr('data-value', 'haha');

// function seyHello() {
//     console.log('Hello');
// }

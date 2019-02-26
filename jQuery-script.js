$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
})

// Native JS options for jQuery:

// -- $-selectors
//  document.querySelectorAll('.list-item').forEach(callbackFunc);
// -- class togglers etc.:
//  .classList
// -- on() - event handlers:
//  .addEventListener
// -- $.ajax:
//  .fetch
// -- animations:
//  CSS3-animations
//  JS - Element.animate
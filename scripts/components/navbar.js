
document.write(
        '<nav class="navigation">'
    +       '<div class="nav-logo">Your Logo</div>'
    +       '<ul class="nav-menu">'
    +           '<li>'
    +                   '<a href="#">Services</a>'
 
    +           '</li>'
    +           '<li><a href="">Info</a></li>'
    +           '<li><a href="">Contact</a></li>'
    +       '</ul>'
    +       '<div class="nav-toggle">'
    +           '<span class="icon-bar"></span>'
    +           '<span class="icon-bar"></span>'
    +           '<span class="icon-bar"></span>'
    +       '</div>'
    +   '</nav>'
    +   '<div class="nav-overlay"></div>'
);

//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);
$('option').click(function(){
    var href = $(this).data('href');
    if(href) { location.href = href; }
});
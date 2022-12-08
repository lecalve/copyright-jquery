(function ($) {
    $(document).ready(function() {
        $("p,li").filter(function() {
            return !$(this).find('img:first').length;
        })
        .html(function(index, old) {
            return old.replace(/©/g, "<span style='font-family:Arial Black;font-weight:700;'>©</span>");
        });
        $("p").filter(function() {
            return !$(this).find('img:first').length;
        })
        .html(function(index, old) {
            return old.replace(/®/g, "<span style='font-family:Arial Black;font-weight:700;'>®</span>");
        });
    })

})(jQuery);

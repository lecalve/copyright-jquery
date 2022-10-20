(function ($) {
    $(document).ready(function() {
        $("strong:nth-child(2)").each(function() {
            $(this).html($(this).html().replace(/©/g,"<span style='font-family:Arial Black;font-weight:700;'>©</span>"));
        });
        $("strong:nth-child(1)").each(function() {
            $(this).html($(this).html().replace(/®/g,"<span style='font-family:Arial;font-weight:700;font-size:14px;'>®</span>"));
        });
        $("li").each(function() {
            $(this).html($(this).html().replace(/©/g,"<span style='font-family:Arial Black;font-weight:700;'>©</span>"));
        });
    })
})(jQuery);
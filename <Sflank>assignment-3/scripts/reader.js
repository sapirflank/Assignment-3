$(document).ready(function () {
    $("*:not(body)").hover(
        function (ev) {
            $(this).addClass("highlight");
            ev.stopPropagation();
            $(document).keydown(function (e) {
                if (e.keyCode == 0 || e.keyCode == 32) {
                    e.preventDefault(); //taken from: https://stackoverflow.com/
                    // questions/22559830/html-prevent-space-bar-from-scrolling-page
                    var alttext = $(".highlight").attr("alt");
                    var srcofimg = $(".highlight").attr("src");
                    if ($(".highlight").attr("alt")) {
                        speechSynthesis.speak(new SpeechSynthesisUtterance(alttext));
                    }
                    else if($(".highlight").attr("src")){
                        speechSynthesis.speak(new SpeechSynthesisUtterance(srcofimg));
                    }
                    else {
                        speechSynthesis.speak(new SpeechSynthesisUtterance($(".highlight").text()));
                    }
                }
                else{
                    speechSynthesis.cancel();
                    $(this).removeClass("highlight");
                    $(".highlight").removeClass('highlight');
                }
                e.stopImmediatePropagation();

            })
        },
        function (ev) {
            $(this).removeClass("highlight");
            speechSynthesis.cancel();
        }
    )
    })



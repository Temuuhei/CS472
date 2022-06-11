"use strict";

$(document).ready(function () {
    $("#articlesList a").on("click", function(event) {
        event.preventDefault();

        const $a = $("<a>", {
            href : "https://www.google.com",
            text : "Click to Add a new Article",
        });
        const $p = $("<p>", {
            text : "Article Title - "
        }).append($a);
        const $article = $("<article>").append($p);
        $("#articlesList").append($article);
    });
});
$(document).ready(function() {

    var $img = $("img");

    $img.click(function() {

        var num = $(this).attr("id");

        var url = "http://anapioficeandfire.com/api/houses/" + num;

        var proxy = 'https://cors-anywhere.herokuapp.com/';

        $.get(proxy + url, function(info) {

            var familyName = info.name;
            var familyWords = info.words;
            var familyTitles = info.titles;
            
            var str = "<legend>House Details</legend><p>Name: " + familyName + '</p><p>Words: "' + familyWords + '"</p><p>Titles: ';

            for (var i = 0; i < familyTitles.length - 1; i++) {
                str += familyTitles[i] + ", ";
            }

            str += familyTitles[familyTitles.length - 1] + ".";

            str += "</p>";

            $("fieldset").html(str);

        }, "json");

    });

});
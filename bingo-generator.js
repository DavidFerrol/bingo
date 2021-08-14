$(function () {
    var bingo = {
        selectedNumbers: [],
        generateRandom: function () {
            var random = Math.floor(Math.random() * 90) + 1; //1-90
            return random;
        },
        generateNextRandom: function () {
            if (bingo.selectedNumbers.length > 89) {
                alert("All numbers Exhausted");
                return 1;
            }
            var random = bingo.generateRandom();
            while ($.inArray(random, bingo.selectedNumbers) > -1) {
                random = bingo.generateRandom();
            }
            bingo.selectedNumbers.push(random);
            return random;
        }
    };

    $("td").each(function () {
        var concatClass = this.cellIndex + "" + this.parentNode.rowIndex;
        var numberString = parseInt(concatClass, 10).toString();
        $(this)
            .addClass("cell" + numberString)
            .text(numberString);
    });

    $("#btnGenerate").click(function () {
        var random = bingo.generateNextRandom().toString();
        $(".bigNumberDisplay span").text(random);
        $("td.cell" + random).addClass("selected");

        console.log(random);
    });

    window.onbeforeunload = function (e) {
        e = e || window.event;
        var returnString = "Are you sure?";
        if (e) {
            e.returnValue = returnString;
        }
        return returnString;
    };
});

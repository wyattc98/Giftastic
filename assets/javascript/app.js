$(".button-inputs").on("click", function () {
    
    var person = $(this).attr("data-person");
    console.log(person)
    var queryURL = "http:api.giphy.com/v1/gifs/search?q=" + person + "&api_key=bmL1lkyIs1JxJjzLV2VyyVcWU8aHAvhG&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating)

                var charImg = $("<img>")
                charImg.attr("src", results[i].images.fixed_height.url)
                charImg.attr("alt", "character gif")
                gifDiv.append(p)
                gifDiv.append(charImg)
                console.log("gifDiv", gifDiv)
                $("#gifs-appear-here").prepend(gifDiv);
            }
        })
});

$(".add-button").on("click", function(){
    event.preventDefault();
    var newCharButton = $("<button class='btn btn-primary button-inputs'>")

    var newP = $("<p>")

    newP.append($("#add-input"))
    newCharButton.append(newP)

    $(".char-inputs").append(newP)


    

})





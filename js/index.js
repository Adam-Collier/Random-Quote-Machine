var randomQuote = [{
  "quote": "The good life is one inspired by love and guided by knowledge. ",
  "background": "#D2A1B8",
  "author":  "Bertrand Russell"
},
{
  "quote": "Character is the ability to carry out a good resolution long after the excitement of the moment has passed.",
  "background": "#F7567C",
  "author": "Cavett Robert"
},
{
   "quote": "One good thing about music, when it hits you, you feel no pain. ",
   "background": "#99E1D9",
   "author":  "Bob Marley"
}];

var randomise = Math.floor(Math.random()*randomQuote.length);



$( document ).ready(function() {
  
  
  $("h1").html('"'+randomQuote[randomise].quote+'\"');
  $("body").css("background", randomQuote[randomise].background).fadeIn();
  $("h2").html("-" + randomQuote[randomise].author)
 
  
  
  
  
  $(".click-me").on("click", function(){
   var randomise = Math.floor(Math.random()*randomQuote.length);
   var tweet = "https://twitter.com/intent/tweet?text=";
  $("h1").html(randomQuote[randomise].quote);
  $("body").css("background", randomQuote[randomise].background);
  $("h2").html("-" + randomQuote[randomise].author)
  $(".tweet").attr("href", tweet+  randomQuote[randomise].quote+" - "+randomQuote[randomise].author);

});
});
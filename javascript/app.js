// What do you have?
//   - jQuery to make AJAX requests to an API
//   - jQuery to work with the DOM
//   - Some existing HTML with placeholder information (.result-card)
//   - An API endpoint that has data for me "https://api.tvmaze.com/search/shows?q="
//   - A reference to how to use that API: "https://www.tvmaze.com/api#show-search"

// What do you need?
// When the user clicks the search button, the following needs to happen afterwards:
//     1. I need to take the text they typed in the input box
//     2. I need to get the TV show information based on what the user typed in: "https://api.tvmaze.com/search/shows?q=[SEARCH_STRING]"
//     2. I need to display that information using the .result-card html as a template

// How do you get there?
// I need to use this API endpoint: "https://api.tvmaze.com/search/shows?q="
// I can use the URL bar in my web browser to see what comes back when I visit an end point, e.g."https://api.tvmaze.com/search/shows?q=lost"
// I need to handle a click event on the search button
// I need to get the user information from the input box
// I need to use $.get to make an AJAX request to the endpoint with the user search info, e.g. "https://api.tvmaze.com/search/shows?q=lost"
// I need to use jQuery to recreate the .result-card html and all of it's nested elements
// I need to go through the data sent from the AJAX request and create a result card for each TV show
// I need to add each result card to the #results element.

$.get("https://api.tvmaze.com/search/shows?q=breaking%20bad", (data) => {
  console.log(data);
  //var results = JSON.parse(data); // The data comes to us in JSON format, it must be parsed in to a object that we can use
  console.log(results);
});

/*Repeat function
  $.get(, (data) =>{
    //Create an empty SPAN
    let $span# = $('<span></span>');
    fShow.addClass('result-card');
    $Body.append($span#)
    //Create a H3 for the Title
    let (first portion of the show name +)Show = $('<h3></h3>');
    fShow.text('');
    $span#.append(fShow);
    //Create the title card image
    let (first portion of the show name +)Img = $('<img></ul>');
    fImg.addClass('.card-image');
    fImg.######('src=""');
    $span#.append(fImg);
    //Create a H2 for the Genre
    let (first portion of the show name +)Genre = $('<h2></h2>');
    fGenre.addClass('.card-genres');
    fGenre.text('');
    $span#.append(fGenre);
    //Create a summary div to hold summary information
    let $div# = $('<div></div>');
    $div#.addClass('.card-summary');
    $span#.append($div#);
    //Create an summary header
    let $em# = $('<em></em>');
    $em#.text('Summary');
    $div#.append($em#);
    //Create an summary paragraph
    let $p# = $('<p></p>');
    $p#.text("<b>TITLE</b> Brief Overview");
    $div#.append($p#);
    //Create an card link
    let $a# = $('<a></a>');
    $a#.#####('herf = #######');
    $a#.text('View Show');
    $div#.append($a#);
  });

*/

const $divResults = $('results');

//Black Butler Start
  //Create an empty SPAN
  let $span1 = $('<span></span>');
  $span1.addClass('result-card');
  $divResults.append($span1);

  //Create a H3 for Title
  let butlerShow = $('<h3></h3>');
  butlerShow.addClass('shows');
  butlerShow.text('Black Butler');
  console.log(butlerShow);
  $span1.append(butlerShow);

  let butlerImg = $('<img></img>');
  butlerImg.addClass('card-image');
  butlerImg.attr('src', 'https://static.tvmaze.com/uploads/images/medium_portrait/9/24483.jpg');
  $span1.append(butlerImg);

  //Create a H2 for the Genre
  let butlerGenre = $('<h2></h2>');
  butlerGenre.addClass('card-genres');
  butlerGenre.text('Dark comedy, Dark fantasy, Supernatural');
  $span1.append(butlerGenre);

  //Create a summary div to hold summary information
  let $div1 = $('<div></div>');
  $div1.addClass('card-summary');
  $span1.append($div1);

  //Create an summary header
  let $em1 = $('<em></em>');
  $em1.text('Summary');
  $div1.append($em1);

  //Create an summary paragraph
  let $p1 = $('<p></p>');
  $p1.text("<b>Black Butler</b> One of the noble families of England - Phantomhive, has a butler, Sebastian Michaelis. He has unquestionably perfect knowledge, manners, talent with materials. martial arts and much more. But for some reason, he serves a 12 year old master.");
  $div1.append($p1);

  //Create an card link
  let $a1 = $('<a></a>');
  $a1.attr("href", "https://www.tvmaze.com/shows/1750/black-butler");
  $a1.text('View Show');
  $div1.append($a1);
//Black Butler End

//AOT Start
  //Create an empty SPAN
  let $span2 = $('<span></span>');
  $span2.addClass('result-card');
  $divResults.append($span2);

  //Create a H3 for the Title
  let aotShow = $('<h3></h3>');
  aotShow.addClass('shows');
  aotShow.text('Attack on Titans');
  console.log(aotShow);
  $span2.append(aotShow);
  
  //Create the title card image
  let aotImg = $('<img></img>');
  aotImg.addClass('card-image');
  aotImg.attr('src', 'https://static.tvmaze.com/uploads/images/medium_portrait/311/779751.jpg');
  $span2.append(aotImg);
  
  //Create a H2 for the Genre
  let aotGenre = $('<h2></h2>');
  aotGenre.addClass('card-genres');
  aotGenre.text('Action, Adventure, Anime, Fantasy');
  $span2.append(aotGenre);

  //Create a summary div to hold summary information
  let $div2 = $('<div></div>');
  $div2.addClass('card-summary');
  $span2.append($div2);

  //Create an summary header
  let $em2 = $('<em></em>');
  $em2.text('Summary');
  $div2.append($em2);

  //Create an summary paragraph
  let $p2 = $('<p></p>');
  $p2.text("<b>Attack on Titans</b> Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress.");
  $div2.append($p2);

  //Create an card link
  let $a2 = $('<a></a>');
  $a2.attr("href", "https://www.tvmaze.com/shows/919/attack-on-titan");
  $a2.text('View Show');
  $div2.append($a2);
//AOT End  

//Black Summoner Start
  //Create an empty SPAN
  let $span3 = $('<span></span>');
  $span3.addClass('result-card');
  $divResults.append($span3);

  //Create a H3 for the Title
  let summonerShow = $('<h3></h3>');
  summonerShow.addClass('shows');
  summonerShow.text('Black Summoner');
  console.log(summonerShow);
  $span3.append(summonerShow);
  
  //Create the title card image
  let summonerImg = $('<img></img>');
  summonerImg.addClass('card-image');
  summonerImg.attr('src', 'https://static.tvmaze.com/uploads/images/medium_portrait/414/1035092.jpg');
  $span3.append(summonerImg);
  
  //Create a H2 for the Genre
  let summonerGenre = $('<h2></h2>');
  summonerGenre.addClass('card-genres');
  summonerGenre.text('Fantasy');
  $span3.append(summonerGenre);

  //Create a summary div to hold summary information
  let $div3 = $('<div></div>');
  $div3.addClass('card-summary');
  $span3.append($div3);

  //Create an summary header
  let $em3 = $('<em></em>');
  $em3.text('Summary');
  $div3.append($em3);

  //Create an summary paragraph
  let $p3 = $('<p></p>');
  $p3.text("<b>Black Summoner</b>  Waking up in a strange new place with no memory of his past life, Kelvin learns that he's bartered away those very memories in exchange for powerful new abilities during his recent transmigration.");
  $div3.append($p3);

  //Create an card link
  let $a3 = $('<a></a>');
  $a3.attr("href", "https://www.tvmaze.com/shows/62747/black-summoner");
  $a3.text('View Show');
  $div3.append($a3);
//Black Summoner End 

//Fairy Tail Start
  //Create an empty SPAN
  let $span4 = $('<span></span>');
  $span4.addClass('result-card');
  $divResults.append($span4);

  //Create a H3 for the Title
  let fairyShow = $('<h3></h3>');
  fairyShow.addClass('shows');
  fairyShow.text('Fairy Tail');
  console.log(fairyShow);
  $span4.append(fairyShow);
  
  //Create the title card image
  let fairyImg = $('<img></img>');
  fairyImg.addClass('card-image');
  fairyImg.attr('src', 'https://static.tvmaze.com/uploads/images/medium_portrait/62/156497.jpg');
  $span4.append(fairyImg);
  
  //Create a H2 for the Genre
  let fairyGenre = $('<h2></h2>');
  fairyGenre.addClass('card-genres');
  fairyGenre.text('Action Comedy');
  $span4.append(fairyGenre);

  //Create a summary div to hold summary information
  let $div4 = $('<div></div>');
  $div4.addClass('card-summary');
  $span4.append($div4);

  //Create an summary header
  let $em4 = $('<em></em>');
  $em4.text('Summary');
  $div4.append($em4);

  //Create an summary paragraph
  let $p4 = $('<p></p>');
  $p4.text("<b>Fairy Tail</b> The story follows a teenage girl named Lucy Heartfilla who is determined to join the notorious magical Fairy Tail Guild.");
  $div4.append($p4);

  //Create an card link
  let $a4 = $('<a></a>');
  $a4.attr("href", "https://www.tvmaze.com/shows/2069/fairy-tail");
  $a4.text('View Show');
  $div4.append($a4);
//Fairy Tail End

//Demon Slayer Start
  //Create an empty SPAN
  let $span5 = $('<span></span>');
  $span5.addClass('result-card');
  $divResults.append($span5);

  //Create a H3 for the Title
  let dSlayerShow = $('<h3></h3>');
  dSlayerShow.addClass('shows');
  dSlayerShow.text('Demon Slayer');
  console.log(dSlayerShow);
  $span5.append(dSlayerShow);
  
  //Create the title card image
  let dSlayerImg = $('<img></img>');
  dSlayerImg.addClass('card-image');
  dSlayerImg.attr('src', 'https://static.tvmaze.com/uploads/images/medium_portrait/189/472604.jpg');
  $span5.append(dSlayerImg);
  
  //Create a H2 for the Genre
  let dSlayerGenre = $('<h2></h2>');
  dSlayerGenre.addClass('card-genres');
  dSlayerGenre.text('Drama, Action, Anime, Fantasy');
  $span5.append(dSlayerGenre);

  //Create a summary div to hold summary information
  let $div5 = $('<div></div>');
  $div5.addClass('card-summary');
  $span5.append($div5);

  //Create an summary header
  let $em5 = $('<em></em>');
  $em5.text('Summary');
  $div5.append($em5);

  //Create an summary paragraph
  let $p5 = $('<p></p>');
  $p5.text("<b>Black Butler</b> Since ancient times, rumors have abounded of man-eating demons lurking in the woods. Because of this, the local townsfolk never venture outside at night. Legend has it that a demon slayer also roams the night, hunting down these bloodthirsty demons. For young Tanjiro, these rumors will soon to become his harsh reality…");
  $div5.append($p5);

  //Create an card link
  let $a5 = $('<a></a>');
  $a5.attr("href", "https://www.tvmaze.com/shows/41469/demon-slayer-kimetsu-no-yaiba");
  $a5.text('View Show');
  $div5.append($a5);
//Black Butler End

  const searchButton = $('#submit');
  searchButton.click(searchAnime);

//anime[i] = [buttlerShow, titanShow, demonShow, summonerShow, cloverShow, fairyShow]
//define a function that uses the search button
function searchAnime(event){
  // const resultFilter = searchButton.value;
  // console.log(resultFilter) + 'shows';
 let anime = $('.shows').text();
 let animeArr = $.makeArray(anime);
  //anime.split(" , ");
  //animeArr.push(anime);
  console.log(animeArr);
  // for(let i = 0; i < anime.length; i++){
  //   animeArr.push(anime[i]);
  //   console.log('This anime: ' + animeArr);
    // if(!anime[i].text().includes(searchButton)){
    //   animeArr[i].getElementsByClassName.display="none";
    // }else{
    //   animeArr[i].style.display= anime[i].text;
    // }
  //}
}

searchAnime();

function test(){
  console.log("I ran");
}
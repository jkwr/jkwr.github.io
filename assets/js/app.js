// sanity check
console.log("app.js linked.");

let images = [
{
	'name': 'Dice Game',  	
	'url': 'https:jkwr.github.io/Dicegame.io/', 
	'images': 'assets/imgs/dicegame.png',
	'about': 'The game was created using HTML, CSS, JS, JQuery'

},
{
	'name': 'Budget',
	'url': 'http://dldbudget.tk/',
	'images': 'assets/imgs/budget.png', 
	'about': 'The game was created using HTML, CSS, JS, JQuery'

},
{
	'name': 'Memory Game',
	'url': 'https://github.com/jkwr/wdi-fundamentals-memorygame',
	'images': 'assets/imgs/memory-game.png', 
	'about': 'The game was created using HTML, CSS, JS, JQuery'
}
];

$(document).ready(function () {


for (let i=0;i<images.length;i++) {
	$('.games').append(` 
	
     <div class="card small"><div class="card-image waves-effect waves-block waves-light">
      <img class="activator" class="col s4" id="game-image" class="responsive-img" src=${images[i].images}>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${images[i].name}<i class="material-icons right"></i></span>
      <p><a href="${images[i].url}">${images[i].url}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>${images[i].about}/</p>
    </div>
  </div> 

  `);
  }


});

    $(document).ready(function(){
      $('.carousel').carousel();
    });
// <img class="col s4" id="dice" class="responsive-img" src="assets/imgs/js1.png"></li>
// <img class="col s4" id="budget" class="responsive-img" src="assets/imgs/js1.png"></li>
// <img class="col s4" id="memory" class="responsive-img" src="assets/imgs/js1.png"></li>
// $(‘.port’).eq(0).append(`<img src=${portfolio[0].img}>`);
 //class="activator"<div class="card"> 
//=================================================
// for (let i=0;i<images.length;i++) {
// 	$('#page2').append(` 
	
//      <img class="col s4" id="game-image" class="responsive-img" src=${images[i].images}> `);
	
// 	}

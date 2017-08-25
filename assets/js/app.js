// sanity check
console.log("app.js linked.");
// This is my array of objects of projects created 
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

// This for loop will loop through the name and index's of the array and result them in my projects location.
for (let i=0;i<images.length;i++) {
	$('.games').append(` 
		<div class='col s4'>
     <div class="card small"><div class="card-image waves-effect waves-block waves-light">
      <img class="activator" class="col s4" id="game-image" class="responsive-img" src=${images[i].images}>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${images[i].name}<i class="material-icons right"></i></span>
      <p><a href="${images[i].url}">${images[i].url}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${images[i].name}<i class="material-icons right">close</i></span>
      <p id="project-text">${images[i].about} test</p>
    </div>
    </div>
  </div> 

  `);
  }


});


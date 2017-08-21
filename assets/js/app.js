// sanity check
console.log("app.js linked.");

let images = [
{
	'name': 'Dice Game',  	
	'url': 'https:jkwr.github.io/Dicegame.io/', 
	'images': 'assets/imgs/dicegame.jpg' 

}
];

$(document).ready(function () {
//  var n = [];
// 	for (let i = 0; i < images.length; i++ ) {
// 		n.push(images[i]);
// 	}
// 	return n ;
// });


for (let i=0;i<images.length;i++) {
	$('#page3').append(`<img id="dg" src=${images[0].images}>`);
}
});

// $(‘.port’).eq(0).append(`<img src=${portfolio[0].img}>`);

 $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
        
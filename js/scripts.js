
$(document).ready(function() {
	getPokemon();
});

function getPokemon() {
	var numberOfPokemon = 13;
	var URLs = [];

	for (var i = 1; i < numberOfPokemon; i++) {
		URLs.push("http://pokeapi.co/api/v2/pokemon/" + i);
	}

	$.each(URLs, function(i, index) {
		$.getJSON(index, function(pokemon) {
			var j = i +1;
			var item = {};
			item.name = pokemon.name;
			item.height = pokemon.height;
			item.weight = pokemon.weight;
			item.smallImage = pokemon.sprites.front_default;
			item.largeImage = 'images/pokemon' + j + '.png';
			URLs.push(item);

			var content = document.getElementById('gallery');
			var caption = item.name + "/height:" + item.height + "/weight:" + item.weight;
			content.innerHTML += '<li><a href=' + item.largeImage + ' class="strip" data-strip-caption=' + caption + '>' + '<img src=' + item.smallImage + ' alt="pokemon picture" class="small-img">' +  '</a></li>';
		});
	});
}
import './Spread.css';
/*
 * The original code uses AMD and can be 
 * found here:
 * https://github.com/MathiasPaumgarten/spread
 */


//const spreadDiv = document.getElementById("spread");

let orientation = {
	TOP: 0,
	RIGHT: 1,
	BOTTOM: 2,
	LEFT: 3
}
let options = {
	tileSize: 140,
	color: "#4fb0ca",
	randomColor: false
}

 function color() {

	var values = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
	var color = "#", i = 7;

	while ( --i ) color += values[ ~~( Math.random() * 16 ) ];

	return color;
}

function random( min, max ) {
	return min + Math.random() * ( max - min );
}

function Tile( x, y, color, onComplete ) {

	var div, inlay, cover;
	var neighbors = [];
	var isShown = false;

	function initUI() {

		div = document.createElement( "div" );
		div.className = "tile";
		div.style.width = options.tileSize + "px";
		div.style.height = options.tileSize + "px";
		div.style.top = y * options.tileSize + "px";
		div.style.left = x * options.tileSize + "px";

		inlay = document.createElement( "div" );
		inlay.className = "inlay";
		inlay.style.backgroundColor = color;

		cover = document.createElement( "div" );
		cover.className = "cover";

		div.appendChild( inlay );
		inlay.appendChild( cover );

	}

	// ------
	// PUBLIC
	// ------

	this.isShown = function() {
		return isShown;
	}

	this.getElement = function() {
		return div;
	}

	this.addNeighbor = function( direction, neighbor ) {
		neighbors[ direction ] = neighbor;
	}

	this.fromTop = function() {
		div.classList.add( "from-top" );
		show();
	}

	this.fromBottom = function() {
		div.classList.add( "from-bottom" );
		show();
	}

	this.fromRight = function() {
		div.classList.add( "from-right" );
		show();
	}

	this.fromLeft = function() {
		div.classList.add( "from-left" );
		show();
	}

	function onTransitionEnd() {

		for ( var i = 0; i < neighbors.length; i++ ) {

			if ( neighbors[ i ] && ! neighbors[ i ].isShown() ) {
				neighbors[ i ][ getFunctionName( i ) ]();
				setTimeout( onTransitionEnd, random( 10, 300 ) );
				break;
			}

		}

	}

	// -------
	// PRIVATE
	// -------

	function getFunctionName( index ) {
		return [ "fromBottom", "fromLeft", "fromTop", "fromRight" ][ index ];
	}

	function show() {
		isShown = true;

		setTimeout( function() {

			inlay.classList.add( "show" );

			setTimeout( onTransitionEnd, random( 100, 200 ) );
			setTimeout( onComplete, 200 );

		}, 50 );
	}

	initUI();

}


function changeSlide( event ) { 

	var div = document.createElement( "div" );

	var size = {
		width: window.innerWidth,
		height: window.innerHeight
	}

	var position = {
		x: event.pageX,
		y: event.pageY
	}

	var controller = new Controller( div, size, position );

	controller.onComplete( function() {
		
		if(document.getElementById("spread")){
			document.getElementById("spread").style.backgroundColor = controller.getColor();
			document.getElementById("spread").removeChild( div );
		}
		

	} );

	if(document.getElementById("spread")){
	document.getElementById("spread").appendChild( div );
	}

}

function Controller( cont, size, position ) {

	var width = Math.ceil( size.width / options.tileSize );
	var height = Math.ceil( size.height / options.tileSize );
	var tiles = [];
	var onComplete = null;
	var completeCount = 0;
	var tileColor = options.randomColor ? color() : options.color;

	function init() {
		fillScreen();
		snowball();
	}

	// ------
	// PUBLIC
	// ------

	this.onComplete = function( closure ) {
		onComplete = closure
	}

	this.getColor = function() {
		return tileColor;
	}

	// -------
	// PRIVATE
	// -------

	function fillScreen() {

		var tile, row, col;
		var length = width * height;

		for ( var y = 0; y < height; y++ ) {
			for ( var x = 0; x < width; x++ ) {

				tile = new Tile( x, y, tileColor, tileComplete );

				cont.appendChild( tile.getElement() );

				tiles.push( tile );

			}
		}

		for ( var i = 0; i < length; i++ ) {

			tile = tiles[ i ];
			row = ~~( i / width );
			col = i % width;

			if ( col < width - 1 )
				tile.addNeighbor( orientation.RIGHT, tiles[ i + 1 ] );

			if ( col > 0 )
				tile.addNeighbor( orientation.LEFT, tiles[ i - 1 ] );

			if ( row > 0 )
				tile.addNeighbor( orientation.TOP, tiles[ i - width ] );

			if ( row < height - 1 )
				tile.addNeighbor( orientation.BOTTOM, tiles[ i + width ] );
		}
	}

	function snowball() {
    
		var row = ~~( position.y / options.tileSize );
		var col = ~~( position.x / options.tileSize );
    
		tiles[ col + row * width ].fromTop();
	}

	function tileComplete() {
		completeCount++;

		if ( completeCount === tiles.length && onComplete ) {
			onComplete();
		}
	}

	init();

}
export default function spread(color) {
	options.color = color;
  var event = {
    pageX: window.innerWidth / 2,
    pageY: window.innerHeight / 2
  } 
  changeSlide( event );
}
 
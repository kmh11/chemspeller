var symbolsLower = ['h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's', 'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga', 'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po', 'at', 'rn', 'fr', 'ra', 'ac', 'th', 'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'uut', 'fl', 'uup', 'lv', 'uus', 'uuo', 'e', 'g', 'l', 'm','a', 'z', 'j', 't', 'q', 'd', 'x', 'r'];
var symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'RD4n', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo', 'e', 'g', 'l', 'm', '&alpha;', 'Z', 'J', '&tau;', 'q', 'd', 'X', 'R'];
var names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Caesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Ununtrium', 'Flerovium', 'Ununpentium', 'Livermorium', 'Ununseptium', 'Ununoctium', 'Electron', 'Gluon', 'Lepton', 'Mass', 'Alpha Particle', 'Z Boson', 'Joule', 'Tau', 'Quark', 'Down Quark', 'X Boson', 'Roentgen'];
var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
var colors = ["#D4F2FC", "#FCDED4", "#DEFCD4", "#F2D4FC", "#FAFCD4", "#D4FCF8"]
var bgcolors = ["#CEDCE0", "#E0CEC8", "#D3E6CC", "#DECFE3", "#FBFCE6", "#C5DEDB"]
var table;
var number;
var symbol;
var one;
var two;
var three;
var matches;
var showSpelling;
var line;

//From https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function checkKey() {
	if (event.keyCode === 13) {
		document.getElementById("button").click();
	}
}

function _elementSpell(word, spelling) {
	if (word === "") {
		return spelling;
	}
	one = symbolsLower.indexOf(word.slice(0, 1));
	two = symbolsLower.indexOf(word.slice(0, 2));
	three = symbolsLower.indexOf(word.slice(0, 3));
	matches = [three, two, one];
	for (j=0; j < matches.length; j++) {
		if (matches[j] != -1) {
			spelling.push(matches[j])
			if (_elementSpell(word.slice(symbolsLower[matches[j]].length), spelling) != false) {
				return spelling
			}
		}
	}
	return false
}

function animateTable(spelling, line) {
	if (!spelling) {
		document.getElementById("tables").innerHTML = "<h1>Impossible!</h1><p>Remeber to avoid special symbols (/.,?!) and to spell out numbers.</p>";
	} else {
		var delay = 50;
		var delayJ = spelling.length*50;
		var j=0;
		var maxJ = spelling.length;
		var k=0;
		var maxK = spelling.length*spelling.length*spelling.length-spelling.length/5;
		function outerTimeoutLoop() {
			if (++j < maxJ) {
				setTimeout(outerTimeoutLoop, delayJ)
			}
			function innerTimeoutLoop() {
				if (j>1) {
					showSpelling = spelling.slice(0,j-1).concat([Math.floor(Math.random()*118)])
				} else {showSpelling = [Math.floor(Math.random()*118)]}
				makeTable(showSpelling, line);
				if (++k < maxK) {
					setTimeout(innerTimeoutLoop, delay);
				} else {makeTable(spelling.slice(0,j+1), line)}
			}
			setTimeout(innerTimeoutLoop, delay);

		}
		setTimeout(outerTimeoutLoop, delayJ);
	}
}

function makeTable(spelling, line) {
	line = line.toString()
	table = "<table><tr>";
	for (i=0; i < spelling.length; i++) {
		number = (symbols.indexOf(symbols[spelling[i]])+1).toString();
		if (number === "119") {
			number = "-1";
		} else if (number === "120") {
			number = "0"
		} else if (Number(number) >= 119) {
			number = ""
		}
		table = table+"<td class=\"number tableColor\">"+number+"</td>";
	}
	table = table+"</tr><tr>"
	for (i=0; i < spelling.length; i++) {
		if (symbols[spelling[i]] === "e") {
			symbol = "e<sup>-</sup>"
		} else {
			symbol = symbols[spelling[i]]
		}
		table = table+"<td class=\"symbol tableColor\">"+symbol+"</td>";
	}
	table = table+"</tr><tr>"
	for (i=0; i < spelling.length; i++) {
		table = table+"<td class=\"name tableColor\">"+names[spelling[i]]+"</td>";
	}
	table = table+"</table>"
	document.getElementById(line).innerHTML = table
}

function color(onLoad = false) {
	colorNum = Math.floor(Math.random()*colors.length);
	trick = getQueryVariable("trick");
	if ((Math.floor(Math.random()*100) === 1 && !onLoad)|| trick === "rick") {
		youtube();
		document.getElementById("color").innerHTML = "<style>.table, #logo, #description, footer {color: white;} .symbol, .name, .number, .symbolLogo, .nameLogo, .numberLogo {border: 0.0625vw solid white;} .name, .nameLogo {border-top: 0} .number, .numberLogo {border-bottom: 0;} .symbol, .symbolLogo {background-image: url(\"images/rickastley.gif\"); background-size: 66%; background-position: 0.3em 0; background-repeat: no-repeat; border-bottom: 0; border-top: 0;}</style>";
	} else if (Math.floor(Math.random()*50) === 1 || getQueryVariable("trick") === "rainbow") {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
		document.getElementById("color").innerHTML = "<div id=\"rainbow\" style=\"position: fixed; z-index: -98; width: 100%; height: 100%; margin: -8px;\"></div><style>.symbol, .symbolLogo {background-image: url(\"images/rainbow-clouds.gif\"); background-size: 100%; background-position: 0px -0.25em; background-repeat: no-repeat;}</style>";
	} else {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
		document.getElementById("color").innerHTML = "<style>.tableColor {background-color: "+colors[colorNum]+";} body {background-color: "+bgcolors[colorNum]+"} </style>";
	}
}

function elementSpell() {
	color();
	document.getElementById("tables").innerHTML = ""
	word = document.getElementById("wordInput").value.toLowerCase();
	words = word.split(" ");
	if (words[0] != "") {
		for (c=0; c < words.length; c++) {
			document.getElementById("tables").innerHTML += "<div id="+c.toString()+" class=\"table\"></div>"
			animateTable(_elementSpell(words[c], []), c);
		}
	}
	player.playVideo();
}

//Youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function youtube() {
	player = new YT.Player('video', {
		frameborder: "0",
		height: "100%",
		width: "144.444%",
		videoId: "dQw4w9WgXcQ",
		playerVars:{"autoplay":1, "controls":0, "showinfo":0, "autohide":1, "loop":1, "playlist":"dQw4w9WgXcQ"},
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady() {
	player.playVideo();
}


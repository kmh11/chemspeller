var symbolsLower = ['h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's', 'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga', 'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po', 'at', 'rn', 'fr', 'ra', 'ac', 'th', 'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'uut', 'fl', 'uup', 'lv', 'uus', 'uuo', 'e', 'g', 'l', 'm','a', 'z', 'j', 't', 'q', 'd', 'x', 'r'];
var symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'RD4n', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo', 'e', 'g', 'l', 'm', '&alpha;', 'Z', 'J', '&tau;', 'q', 'd', 'X', 'R'];
var names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Caesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Ununtrium', 'Flerovium', 'Ununpentium', 'Livermorium', 'Ununseptium', 'Ununoctium', 'Electron', 'Gluon', 'Lepton', 'Mass', 'Alpha Particle', 'Z Boson', 'Joule', 'Tau', 'Quark', 'Down Quark', 'X Boson', 'Roentgen'];
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
var ready=false;
var word;

//From https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return false;
}

function checkKey(event) {
	if (event.keyCode === 13) {
		document.getElementById("button").click();
	}
}

function _elementSpell(word, spelling, depth = 0) {
	for (var i = 0; i < symbolsLower.length; i++) {
		if (symbolsLower[i] === word) {
			spelling.push([i, depth])
		} else if (symbolsLower[i] === word.slice(0, symbolsLower[i].length)) {
			spelling.push([i, depth])
			_elementSpell(word.slice(symbolsLower[i].length, word.length), spelling, depth+1)
		}
	}
	return spelling
}

function containsList(list, sublist) {
	for (var i = 0; i< list.length; i++) {
		if (list[i].join("") === sublist.join("")) {
			return true;
		}
	}
	return false;
}

function animateTable(spelling, line) {
	if (!spelling) {
		document.getElementById("tables").innerHTML = "<h1 class=\"error\">Impossible!</h1><p class=\"error\">Remember to avoid special symbols (/.,?!) and to spell out numbers.</p>";
	} else {
		var delay = 50;
		var delayJ = 315;
		var j=0;
		var maxJ = spelling.length;
		var k=0;
		var maxK = 64+(51*(spelling.length-4));
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
		youtube("dQw4w9WgXcQ");
		document.getElementById("color").innerHTML = "<style>.table, #logo, #description, footer {color: white;} .symbol, .name, .number, .symbolLogo, .nameLogo, .numberLogo {border: 0.0625vw solid white;} .name, .nameLogo {border-top: 0} .number, .numberLogo {border-bottom: 0;} .symbol, .symbolLogo {background-image: url(\"images/rickastley.gif\"); background-size: 66%; background-position: 0.3em 0; background-repeat: no-repeat; border-bottom: 0; border-top: 0;} .error, #inputDescription, #links a {color: white;} #links a {border-color: white;}</style>";
	} else if ((Math.floor(Math.random()*100) === 1 && !onLoad)|| trick === "trump") {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
		document.getElementById("color").innerHTML = "<div id=\"trump\" style=\"position: fixed; z-index: -98; width: 100%; height: 100%; margin: -8px;\"></div><style>.table, #logo, #description, footer {color: white;} .symbol, .name, .number, .symbolLogo, .nameLogo, .numberLogo {border: 0.0625vw solid white;} .name, .nameLogo {border-top: 0} .number, .numberLogo {border-bottom: 0;} .symbol, .symbolLogo {background-size: 66%; background-position: 0.3em 0; background-repeat: no-repeat; border-bottom: 0; border-top: 0;} .error, #inputDescription, #links a {color: white;} #links a {border-color: white;}</style>";
  	} else if (Math.floor(Math.random()*50) === 1 || getQueryVariable("trick") === "rainbow") {
  		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
  		document.getElementById("color").innerHTML = "<div id=\"rainbow\" style=\"position: fixed; z-index: -98; width: 100%; height: 100%; margin: -8px;\"></div><style>.symbol, .symbolLogo {background-image: url(\"images/rainbow-clouds.gif\"); background-size: 100%; background-position: 0px -0.25em; background-repeat: no-repeat;}</style>";

	} else if (Math.floor(Math.random()*50) === 1 || getQueryVariable("trick") === "rainbow") {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
		document.getElementById("color").innerHTML = "<div id=\"rainbow\" style=\"position: fixed; z-index: -98; width: 100%; height: 100%; margin: -8px;\"></div><style>.symbol, .symbolLogo {background-image: url(\"images/rainbow-clouds.gif\"); background-size: 100%; background-position: 0px -0.25em; background-repeat: no-repeat;}</style>";
	} else {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
		document.getElementById("color").innerHTML = "<style>.tableColor, #links a {background-color: "+colors[colorNum]+";} body {background-color: "+bgcolors[colorNum]+"} </style>";
	}
}

function bestSpelling(spellings) {
	var nonElements = []
	var allElements = []
	for (var s = 0; s < spellings.length; s++) {
		flag = false;
		for (var e = 0; e < spellings[s].length; e++) {
			if (spellings[s][e] > 117) {
				nonElements.push(spellings[s])
				flag = true;
				break
			}
		}
		if (!flag) {
			allElements.push(spellings[s])
		}
	}
	allElements = allElements.sort(compareLength)
	nonElements = nonElements.sort(compareLength)
	if (allElements.length > 0) {
		return allElements[0]
	} else {
		return nonElements[0]
	}
}

function allSpellings() {
	spellings = []
	var spells = []
	color();
	document.getElementById("tables").innerHTML = ""
	word = document.getElementById("wordInput").value.toLowerCase();
	if (word === "") {
		word = getQueryVariable("word").replace("%20", " ");
		document.getElementById("wordInput").setAttribute("value", word);
	}
	document.getElementById("spellings").setAttribute("href", "index.html?word="+word);
	if (/[^A-Za-z ]/g.test(word)) {
		word = ";"
	}
	words = word.split(" ");
	spells = getSpellings(words[0], _elementSpell(words[0].toLowerCase(), [])).sort(compareLength)
	for (w = 1; w < words.length; w++) {
		var spells = spells.concat(getSpellings(words[w].toLowerCase(), _elementSpell(words[w].toLowerCase(), [])).sort(compareLength))
	}
	if (words[0] != "") {
		for (c=0; c < spells.length; c++) {
			document.getElementById("tables").innerHTML += "<div id="+c.toString()+" class=\"table\"></div>"
			makeTable(spells[c], c);
		}
	}
}

function elementSpell() {
	spellings = []
	color();
	document.getElementById("tables").innerHTML = ""
	word = document.getElementById("wordInput").value
	if (word === "") {
		word = getQueryVariable("word").replace("%20", " ");
		document.getElementById("wordInput").setAttribute("value", word);
	}
	document.getElementById("spellings").setAttribute("href", "spellings.html?word="+word);
	if (/[^A-Za-z ]/g.test(word)) {
		word = ";"
	}
	words = word.split(" ");
	if (words[0] != "") {
		for (c=0; c < words.length; c++) {
			document.getElementById("tables").innerHTML += "<div id="+c.toString()+" class=\"table\"></div>"
			animateTable(bestSpelling(getSpellings(words[c].toLowerCase(), _elementSpell(words[c].toLowerCase(), []))), c);
		}
	}
}

function printElements(spelling) {
	for (var s =0 ; s < spelling.length; s++) {
	}
}

var compareLength = function(a, b) {
	return a.length - b.length;
}

function getSpellings(word, spelling) {
	spellings = []
	for (var s = 0; s < spelling.length; s++) {
		var depth = spelling[s][1]
		var element = spelling[s][0]
		if (depth === 0) {
			spellings.push([element])
		} else if (depth === spelling[s-1][1]) {
			spellings.push((spellings[spellings.length-1].slice(0,spellings[spellings.length-1].length-1)).concat([element]))
		} else if (depth > spelling[s-1][1]) {
			spellings[spellings.length-1].push(element)
		} else if (depth < spelling[s-1][1]) {
			spellings.push((spellings[spellings.length-1].slice(0,spellings[spellings.length-1].length-1-(spelling[s-1][1]-depth))).concat([element]))
		}
	}
	return spellings
}

//Youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function youtube(id) {
	var ready=false;
	player = new YT.Player('video', {
		frameborder: "0",
		height: "100%",
		width: "144.444%",
		videoId: id,
		playerVars:{"controls":0, "showinfo":0, "autohide":1, "loop":1, "playlist":id, "autoplay":1},
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady() {
	player.playVideo()
}

var symbolsLower = ['h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's', 'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga', 'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po', 'at', 'rn', 'fr', 'ra', 'ac', 'th', 'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'uut', 'fl', 'uup', 'lv', 'uus', 'uuo', 'e', 'g', 'l', 'm','a', 'z', 'j', 't', 'q', 'd', 'x', 'r'];
var symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo', 'e', 'g', 'l', 'm', '&alpha;', 'Z', 'J', '&tau;', 'q', 'd', 'X', 'R'];
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
var showing;
var line;
var ready=false;
var word;

var fontColor = {
  black: "white",
  gray: "white",
  silver: "black",
  white: "black",
  maroon: "white",
  red: "black",
  olive: "white",
  yellow: "black",
  green: "white",
  lime: "black",
  teal: "white",
  aqua: "black",
  navy: "white",
  blue: "white",
  purple: "white",
  fuchsia: "white"
}

function makeUrlVars(varDict) {
  varString = "?"
  if (varDict.word !== undefined) {
      varString += varDict["word"].replace(/ /g, "%20")
  }
  for (var key in varDict) {
    if (key != "word") {
      varString += "&"+key+"="+varDict[key].replace(/ /g, "%20")
    }
  }
  return varString
}

function getUrlVars() {
  var urlVars = window.location.search.substring(1);
  var vars = urlVars.split("&");
  var varDict = {word:vars[0].replace(/%20/g, " ")};
  for (var index = 1; index < vars.length; index++) {
    var pair = vars[index].split("=");
    varDict[pair[0]] = pair[1].replace(/%20/g, " ");
  }
  return varDict;
}

function options() {
	if (window.location.href.indexOf("?") === -1) {
		window.location.href = window.location.href+"?"
	}
  var urlVars = getUrlVars();
  document.getElementById("spelling").setAttribute("href", "index.html"+makeUrlVars(urlVars));
  document.getElementById("spellings").setAttribute("href", "spellings.html"+makeUrlVars(urlVars));
  if (urlVars.word != undefined) {
    document.getElementById("defaultWord").value = urlVars.word
  }
  if (urlVars.color != undefined) {
    document.getElementById("colorChoice").value = urlVars.color
  }
  if (urlVars.bgcolor != undefined) {
    document.getElementById("bgcolorChoice").value = urlVars.bgcolor
  }
  if (urlVars.bgcolor != undefined) {
    document.getElementById("bgcolorChoice").value = urlVars.bgcolor
  }
  if (urlVars.trick != undefined) {
    document.getElementById("trickChoice").value = urlVars.trick
  }
  if (urlVars["length"] != undefined) {
    document.getElementById("long").checked = true;
  } else {document.getElementById("short").checked = true}
	color()
}

function link(page) {
	window.location.href = page+window.location.search
	return false;
}

function addParameterToURL(param){
    _url = location.href;
    _url += (_url.split('?')[1] ? '&':'?') + param;
    return _url;
}

function checkKey(event) {
	if (event.keyCode === 13) {
		document.getElementById("button").click();
	}
}

function apply() {
	var color = document.getElementById("colorChoice");
	var bgcolor = document.getElementById("bgcolorChoice");
  var word = document.getElementById("defaultWord").value;
  var length = document.querySelector("input[name='length']:checked").value;
  var trick = document.getElementById("trickChoice").value;
  var urlVars = getUrlVars()
  if (color.value != "default") {
    urlVars.color = color.value
  } else {delete urlVars.color}
  if (bgcolor.value != "default") {
    urlVars.bgcolor = bgcolor.value
  } else {delete urlVars.bgcolor}
  if (word != "") {
    urlVars.word = word
  } else {delete urlVars.word}
  if (length === "long") {
    urlVars["length"] = "long"
  } else {delete urlVars["length"]}
  if (trick !== "default") {
    urlVars.trick = trick
  } else {delete urlVars.trick}
  window.location.href = window.location.href.split("?")[0]+makeUrlVars(urlVars)
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
    var done = 0
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
				} else { if (done == spelling.length-1) {makeTable(spelling.slice(0,j+1), line, true);} else {makeTable(spelling.slice(0,j+1), line);done += 1;}}
			}
			setTimeout(innerTimeoutLoop, delay);

		}
		setTimeout(outerTimeoutLoop, delayJ);
	}
}

function makeTable(spelling, line, final) {
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
    var urlVars = getUrlVars()
    urlVars["e"] = names[spelling[i]]
    var infourl = "info.html"+makeUrlVars(urlVars)
		table = table+"<td class=\"number turnWhite tableColor\">"+"<a href=\""+infourl+"\">"+number+"</a></td>";
	}
	table = table+"</tr><tr>"
	for (i=0; i < spelling.length; i++) {
		if (symbols[spelling[i]] === "e") {
			symbol = "e<sup>-</sup>"
		} else {
			symbol = symbols[spelling[i]]
		}
    var urlVars = getUrlVars()
    urlVars["e"] = names[spelling[i]]
    var infourl = "info.html"+makeUrlVars(urlVars)
		table = table+"<td class=\"symbol turnWhite tableColor\">"+"<a href=\""+infourl+"\">"+symbol+"</a></td>";
	}
	table = table+"</tr><tr>"
	for (i=0; i < spelling.length; i++) {
    var urlVars = getUrlVars()
    urlVars["e"] = names[spelling[i]]
    var infourl = "info.html"+makeUrlVars(urlVars)
		table = table+"<td class=\"name turnWhite tableColor\">"+"<a href=\""+infourl+"\">"+names[spelling[i]]+"</a></td>";
	}
	table = table+"</table>"
	document.getElementById(line).innerHTML = table
  if (final) {
    var elementImage = document.getElementById("tables")
    domtoimage.toPng(elementImage)
      .then(function (dataUrl) {
        if (dataUrl != "data:,") {
          if (document.getElementById("links").innerHTML.indexOf("id=\"download\"") == -1) {
            document.getElementById("links").innerHTML = "<a id=\"download\" class=\"turnWhite tableColor\">Download Image</a><br>"+document.getElementById("links").innerHTML
          }
          console.log("here")
          var download = document.getElementById("download")
          download.href = dataUrl
          download.download = word+"-chemspeller.png"
        }
    });
  }
}

function color() {
  var urlVars = getUrlVars()
	var colorNum = Math.floor(Math.random()*colors.length);
	var trick = urlVars.trick;
	var bgcolor = urlVars.bgcolor;
	var getColor = urlVars.color;
  var bghex = "#"+urlVars.bghex;
	var getHex = "#"+urlVars.hex;
	if ((Math.floor(Math.random()*100) === 1)|| trick === "rick") {
		youtube("dQw4w9WgXcQ");
		document.getElementById("color").innerHTML = "<style>.turnWhite {color: white !important; border-color: white !important;} .name, .nameLogo {border-top: 0} .number, .numberLogo {border-bottom: 0;} .symbol, .symbolLogo {background-image: url(\"images/rickastley.gif\"); background-size: 66%; background-position: 0.3em 0; background-repeat: no-repeat; border-bottom: 0; border-top: 0;}</style>";
	} else if ((Math.floor(Math.random()*100) === 1)|| trick === "trump") {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
    document.getElementById("color").innerHTML = "<div id=\"trump\" style=\"position: fixed; z-index: -98; width: 100%; height: 100%; margin: -8px;\"></div><style>.turnWhite {color: white !important; border-color: white !important;} .name, .nameLogo {border-top: 0} .number, .numberLogo {border-bottom: 0;} .symbol, .symbolLogo {background-size: 66%; background-position: 0.3em 0; background-repeat: no-repeat; border-bottom: 0; border-top: 0;}</style>";
  } else if ((Math.floor(Math.random()*100) === 1) || trick === "yee") {
    youtube("q6EoRBvdVPQ")
    document.getElementById("color").innerHTML = "<style>.turnWhite {color: white !important; border-color: white !important;} .name, .nameLogo {border-top: 0} .number, .numberLogo {border-bottom: 0;} .symbol, .symbolLogo {background-image: url(\"images/yee.gif\"); background-size: 66%; background-position: 0.3em 0; background-repeat: no-repeat; border-bottom: 0; border-top: 0;}</style>";
  } else if (Math.floor(Math.random()*50) === 1 || trick === "rainbow") {
  		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
  		document.getElementById("color").innerHTML = "<div id=\"rainbow\" style=\"position: fixed; z-index: -98; width: 100%; height: 100%; margin: -8px;\"></div><style>.symbol, .symbolLogo {background-image: url(\"images/rainbow-clouds.gif\"); background-size: 100%; background-position: 0px -0.25em; background-repeat: no-repeat;}</style>";
	} else if (Math.floor(Math.random()*50) === 1 || trick === "rainbow") {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
		document.getElementById("color").innerHTML = "<div id=\"rainbow\" style=\"position: fixed; z-index: -98; width: 100%; height: 100%; margin: -8px;\"></div><style>.symbol, .symbolLogo {background-image: url(\"images/rainbow-clouds.gif\"); background-size: 100%; background-position: 0px -0.25em; background-repeat: no-repeat;}</style>";
	} else {
		document.getElementById("vidDiv").innerHTML = "<div id=\"video\"></div>";
		if (getColor !== undefined) {
			usedColor = getColor;
		} else if (getHex !== "#undefined") {
      usedColor = getHex;
    } else { usedColor = colors[colorNum]; }
		if (bgcolor !== undefined) {
			usedbgColor = bgcolor;
		} else if (bghex !== "#undefined") {
      usedbgColor = bghex;
    } else { usedbgColor = bgcolors[colorNum]; }
		document.getElementById("color").innerHTML = "<style>.tableColor {background-color: "+usedColor+";} body {background-color: "+usedbgColor+";} </style>";
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
  if (getUrlVars()["length"] !== undefined) {
    var last = true;
  }
  if (last) {
    return nonElements[nonElements.length-1]
  }
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
	word = document.getElementById("wordInput").value;
	params=getUrlVars()
	if (word === "" && params.word != undefined) {
		word = params.word;
		document.getElementById("wordInput").setAttribute("value", word);
	}
  if (word !== "") {
    params.word = word;
  }
	history.replaceState('', document.title, "spellings.html"+makeUrlVars(params))
	document.getElementById("spelling").setAttribute("href", "index.html"+makeUrlVars(params));
  document.getElementById("optionsLink").setAttribute("href", "options.html"+makeUrlVars(params));
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
	params = getUrlVars()
  if (word === "" && params.word != undefined) {
		word = params.word;
		document.getElementById("wordInput").setAttribute("value", word);
	}
  if (word !== "") {
    params.word = word;
  }
	history.replaceState('', document.title, "index.html"+makeUrlVars(params))
	document.getElementById("spellings").setAttribute("href", "spellings.html"+makeUrlVars(params))
  document.getElementById("optionsLink").setAttribute("href", "options.html"+makeUrlVars(params));
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

function getInfo() {
  color()
  var urlVars = getUrlVars()
  var element = urlVars["e"]
  delete urlVars["e"]
  document.getElementById("spelling").setAttribute("href", "index.html"+makeUrlVars(urlVars));
  document.getElementById("spellings").setAttribute("href", "spellings.html"+makeUrlVars(urlVars))
  document.getElementById("optionsLink").setAttribute("href", "options.html"+makeUrlVars(urlVars));
  document.getElementById("elementName").innerHTML = "<strong>"+element+"<strong>"
  httpGetAsync("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&origin=*&redirects=&titles="+element.toLowerCase(), function(response) {
    var wiki = JSON.parse(response);
    for (var v in wiki.query.pages) {
      document.getElementById("info").innerHTML = wiki.query.pages[v].extract.split("\n")[0]+"<br><br><a href=https://en.wikipedia.org/wiki/"+wiki.query.pages[v].title.replace(" ","%20")+">Read More</a>";
    }
  })
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xmlHttp.send(null);
}

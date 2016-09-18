var symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo', 'e', 'g', 'l'];
var names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Caesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Ununtrium', 'Flerovium', 'Ununpentium', 'Livermorium', 'Ununseptium', 'Ununoctium', 'Electron', 'Gluon', 'Lepton'];
var symbolLower;
var table;
var number;
var symbol;
function _elementSpell(word, spelling) {
	word = word.toLowerCase();
	for (i=0; i < symbols.length; i++) {
		symbolLower = symbols[i].toLowerCase();
		if (symbolLower === word || symbolLower === word.slice(word.length-symbolLower.length, word.length)) {
			spelling.push(i);
		}
		if (symbolLower === word || (symbolLower === word.slice(word.length-symbolLower.length, word.length) && _elementSpell(word.slice(0,word.length-symbolLower.length), spelling))) {
			return spelling;
		}
	}
}

function elementSpell() {
	var spelling = _elementSpell(document.getElementById("wordInput").value, []).reverse();
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
		table = table+"<td class=\"number\">"+number+"</td>";
	}
	table = table+"</tr><tr>"
	for (i=0; i < spelling.length; i++) {
		if (symbols[spelling[i]] === "e") {
			symbol = "e<sup>-</sup>"
		} else {
			symbol = symbols[spelling[i]]
		}
		table = table+"<td class=\"symbol\">"+symbol+"</td>";
	}
	table = table+"</tr><tr>"
	for (i=0; i < spelling.length; i++) {
		table = table+"<td class=\"name\">"+names[spelling[i]]+"</td>";
	}
	table = table+"</table>"
	document.getElementById("table").innerHTML = table;
}

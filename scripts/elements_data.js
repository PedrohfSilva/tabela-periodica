// Array de objetos das propriedades dos elementos
const elementsProperties = [];

// Arrays com as informações e propriedades dos elementos
const elementsName = [
    "Hidrogênio", "Hélio", "Lítio", "Berílio", "Boro", "Carbono", "Nitrogênio", "Oxigênio", "Flúor", "Neônio", "Sódio", "Magnésio", "Alumínio", "Silício", "Fósforo", "Enxofre", "Cloro", "Argônio", "Potássio", "Cálcio", "Escândio", "Titânio", "Vanádio", "Cromo", "Manganês", "Ferro", "Cobalto", "Níquel", "Cobre", "Zinco", "Gálio", "Germânio", "Arsênio", "Selênio", "Bromo", "Criptônio", "Rubídio", "Estrôncio", "Ítrio", "Zircônio", "Nióbio", "Molibdênio", "Tecnécio", "Rutênio", "Ródio", "Paládio", "Prata", "Cádmio", "Índio", "Estanho", "Antimônio", "Telúrio", "Iodo", "Xenônio", "Césio", "Bário", "Lantânio", "Cério", "Praseodímio", "Neodímio", "Promécio", "Samário", "Európio", "Gadolínio", "Térbio", "Disprósio", "Hólmio", "Érbio", "Túlio", "Itérbio", "Lutécio", "Háfnio", "Tântalo", "Tungstênio", "Rênio", "Ósmio", "Irídio", "Platina", "Ouro", "Mercúrio", "Tálio", "Chumbo", "Bismuto", "Polônio", "Ástato", "Randônio", "Frâncio", "Rádio", "Actínio", "Tório", "Protactínio", "Urânio", "Netúnio", "Plutônio", "Amerício", "Cúrio", "Berquélio", "Califórnio", "Einstênio", "Férmio", "Mendelévio", "Nobélio", "Laurêncio", "Rutherfórdio", "Dúbnio", "Seabórgio", "Bóhrio", "Hássio", "Meitnério", "Darmstádio", "Roentgênio", "Copernício", "Nihônio", "Fleróvio", "Moscóvio", "Livermório", "Tenessino", "Oganessônio"
];
const elementsSymbol = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og" 
];
const elementsMass = [
    1.008, 4.003, 6.941, 9.012, 10.811, 12.011, 14.007, 15.999, 18.998, 20.18, 22.99, 24.305, 26.982, 28.086, 30.974, 32.065, 35.453, 39.948, 39.098, 40.078, 44.956, 47.867, 50.942, 51.996, 54.938, 55.845, 58.933, 58.693, 63.546, 65.409, 69.723, 72.64, 74.922, 78.96, 79.904, 83.798, 85.468, 87.62, 88.906, 91.224, 92.906, 95.94, 98, 101.07, 102.905, 106.42, 107.868, 112.411, 114.818, 118.71, 121.76, 128.60, 126.904, 131.293, 132.905, 137.327, 138.905, 140.116, 140.908, 144.242, 145, 150.36, 151.964, 157.25, 158.925, 162.50, 164.930, 167.259, 168.934, 173.04, 174.967, 178.49, 180.948, 183.84, 186.207, 190.23, 192.217, 195.084, 196.967, 200.59, 204.383, 207.20, 208.98, 210, 210, 220, 223, 226, 227, 232.03806, 231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 261.00001, 262, 266, 264, 277, 268, 271, 272, 277, 286, 289, 288, 293, 294, 294
];
const elementsGroup = [
    1, 6, 2, 7, 3, 1, 1, 1, 8, 6, 2, 7, 4, 3, 1, 1, 8, 6, 2, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 3, 3, 1, 8, 6, 2, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 4, 3, 3, 8, 6, 2, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 4, 4, 3, 8, 6, 2, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 4, 4, 4, 8, 6
];
const elementsPosition = [
    [1, 1], [18, 1], [1, 2], [2, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2], [18, 2], [1, 3], [2, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5], [15, 5], [16, 5], [17, 5], [18, 5], [1, 6], [2, 6], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [12, 9], [13, 9], [14, 9], [15, 9], [16, 9], [17, 9], [18, 9], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6], [12, 6], [13, 6], [14, 6], [15, 6], [16, 6], [17, 6], [18, 6], [1, 7], [2, 7], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7], [15, 7], [16, 7], [17, 7], [18, 7]
];

// Função contructor para criar os objetos com as propriedades dos elementos
function ElementCreate(name, symbol, number, mass, group, position) {
    this.name = name;
    this.symbol = symbol;
    this.number = number;
    this.mass = massToString(mass);
    this.group = group;
    this.positionX = position[0];
    this.positionY = position[1];
}

// Função que formata o número da massa atômica para string
function massToString(mass) {
    if(Number.isInteger(mass)) {
        return '[' + String(mass) + ']';
    }
    else {
        return String(mass.toFixed(3));
    }
}

// Cria o arry de objetos com as informaçãoes de cada elemento
for (let i=0; i<118; i++) {
    let element = new ElementCreate(elementsName[i], elementsSymbol[i], i+1, elementsMass[i], elementsGroup[i], elementsPosition[i]);
    elementsProperties.push(element);
}
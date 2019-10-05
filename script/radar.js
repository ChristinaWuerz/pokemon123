// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


//Load CSV Data
d3.csv("data/pokemon_data.csv", function(error, pokeData) {
    if (error) return console.warn(error);
  
    // console.log(pokeData);
  
    // log a list of names
    var names = pokeData.map(data => data.name);
    // console.log("names", names);
  
    // Cast each data value in pokeData as a number using the unary + operator
   pokeData.forEach(function(data) {
      data.generation = +data.generation;
      data.attack = +data.attack;
      data.defense = +data.defense;
      data.hp = +data.hp;
      data.special_attack = +data.special_attack;
      data.special_defense = +data.special_defense;
      data.speed = +data.speedd;
      
    });
    console.log(pokeData);
      //Create filter WILL UPDATE FOR DROPDOWN VALUE
      function pokemon(x){
        return (x.name ==="pikachu" && x.generation == 1);
      }
     //Store filtered data in CHOSEN variable 
      var chosen = pokeData.filter(pokemon);
      console.log(chosen);

  });


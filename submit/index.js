
var pokemon = document.getElementById("pk-name").value;
pokemon.toLowerCase()
var link ="https://pokeapi.co/api/v2/pokemon/ditto";
var URL = link+ pokemon;

fetch (URL)
.then(resp) => resp.json()
.then(function(data){
  console.log("Nome do Pokemon" + data.nome);
  console.log("Id do Pokemon" + data.id);
})       
.catch(function(error){
  console.log(error);
  console.log("Deu Pau API");
});

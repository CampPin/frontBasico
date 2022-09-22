var nome = document.getElementById("pkname").value;
$.ajax(url= "https://pokeapi.co/api/v2/pokemon/ditto" + pokemon,
    success:function(data){
        console.log("Nome do Pokemon" + data.nome);
        console.log("Id do Pokemon" + data.abilities[0].ability.name);
    }
{renderUser(result);})
//cifaão e  avariavel do Jquery que guarda sempre o cifrão
//o AJAX faz uma reuisiçãoa  uma API
//eu faço uma requisição de um servidor de um site
//um objjeto denyro de uma API
//seleção do item dentro da bilcioteca
//outro exercicio
function pesquisar(){
    var pokemon = document.getElementById("pk-nasme").value;
    pokemon= pokemon.toLowerCase();
    $.ajax({url:"https://pokeapi.co/api/v2/pokemon/"+pokemon,
            success: function(data){
              console.log("Nome do pokemon" + data.name);
              console.log("Id do pokemon" + data.id);
            }
            });
  }
//outra função para praticar
$("#form").submit(false);
$('submit').on ('click', function(){
    carregaPokemon()
});
function carregaPokemon(){
    $.ajax({url: 'https://pokeapi.co/api/v2/pokemon/', success:
    function(result){
        console.log(result.abilities[0].ability.name)
    }
    });

};

//outra função

function pesquisar(){
    var pokemon = document.getElementById('pk-name').value;
    pokemon=pokemon.toLowerCase();
    $.ajax({url:'https://pokeapi.co/api/v2/ability/7/'+pokemon,
success:function(data){
    console.log("nome do Pokemon"+data.nome);
    console.log("Id do Pokemon"+data.id);
}})
}

script.js

$("#data").datepicker({
    onSelect: function(dateText) {
    arr=document.getElementById('data').value.split("/");
    data=`${arr[2]}-${arr[0]}-${arr[1]}`;
    pegar()
    }
});

$("#data").datepicker("setDate", new Date());

arr=document.getElementById('data').value.split("/");
data=`${arr[2]}-${arr[0]}-${arr[1]}`;

function expand(){
    imagem=document.getElementById("imagem")
    if(window.matchMedia("(min-width:800px)").matches){
    if(imagem.classList.contains("peq")){
        imagem.style.cssText="width:100%; margin-bottom:3%"
        imagem.classList.remove("peq")
    } else {
        imagem.style.cssText="width:50%; margin-bottom:0%"
        imagem.classList.add("peq")}}
}

window.onload = pegar()
function pegar(){
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=Gu0MZYR5dc4VHP5VISzp9eQINX6AibiJsP8BR9Ai&date=${data}`,
        success: function(param) {
        var img=param.url
        var hdimg=param.hdurl
            $('#imagem').attr('src', hdimg);
            $('#background').attr('src', img);
            $('#nome').text(param.title);
            $('#explanation').text(param.explanation);
            $('#copyName').text(param.copyright);
            
        if (param.media_type==="video"){
            document.getElementById('imagem').style.cssText="display:none"
            document.getElementById('video').style.cssText="display:block"
            document.getElementById('video').src=param.url;
            document.getElementById('background').src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
        }

        if (param.media_type==="image"){
            document.getElementById('imagem').style.cssText="display:block"
            document.getElementById('video').style.cssText="display:none"
        }}})}








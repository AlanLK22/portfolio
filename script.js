const projetos = [
{id: 1, name: "Pokedex", url: "https://alanlk22.github.io/pokedex/site.html"},
{id: 2, name: "Pedra papel tesoura", url: "https://alanlk22.github.io/pedra-papel-tesoura/pedra%20papel%20tesoura.html"},
{id: 3, name: "projetos futuros", url: "./assets/html/projetosFuturos.html"}
]

const redesSociais = [
    {id: 1, name: "github", url: "https://github.com/AlanLK22"},
    {id: 2, name: "facebook", url: "https://www.facebook.com/alan.sena.104/"}
]

const linksRedesSociais = redesSociais.map(({ id, name, url }) =>{

const elementos = `<div key=${id}   class="redes-sociais">

     <a href=${url} target= _blank>${name}</a>
</div>`

return elementos

})


const linksDosProjetos = projetos.map(({ id, name, url }) =>{

const elementos = `<div key=${id}  class="projetos">
<a href=${url} target= _blank>${name}</a>
</div>`

return elementos
})

const links = document.querySelector('.links').innerHTML = linksDosProjetos
const linksDasRedesSociais = document.querySelector('.links-redes-sociais').innerHTML = linksRedesSociais
const projetos = [
    {id: 1, name: "Pokedex", url: "https://alanlk22.github.io/pokedex/site.html"},
    {id: 2, name: "Pokedex mobile", url: "https://github.com/AlanLK22/pokedex-mobile"},
    {id: 3, name: "Cotação de moedas", url: "https://alanlk22.github.io/cotacao-de-moedas/"},
    {id: 4, name: "AnimeLand (buscar animes)", url: "https://alanlk22.github.io/AnimeLand/"},
    {id: 5, name: "Pedra papel tesoura", url: "https://alanlk22.github.io/pedra-papel-tesoura/pedra%20papel%20tesoura.html"},
    {id: 6, name: "projetos futuros", url: "./assets/html/projetosFuturos.html"}
    ]
    
    const redesSociais = [
        {id: 1, name: "github", url: "https://github.com/AlanLK22"},
        {id: 2, name: "facebook", url: "https://www.facebook.com/alan.sena.104/"}
    ]
    
    const linksRedesSociais = redesSociais.map(({ id, name, url }) =>{
    
    let className = name === "facebook" ? "facebook" : "github";
    
    const elementos = `<ul key=${id}   class="redes-sociais">
    
         <a href=${url} target= _blank class=${className}>${name}</a>
    </ul>`
    
    return elementos
    
    })
    
    
    const linksDosProjetos = projetos.map(({ id, name, url }) =>{
    
    const elementos = `<div key=${id}  class="projetos">
    <a href=${url} target= _blank>${name}</a>
    </div>`
    
    return elementos
    })
    
    const links = document.querySelector('.projetos').innerHTML = linksDosProjetos.join('');
    const linksDasRedesSociais = document.querySelector('.links-redes-sociais').innerHTML = linksRedesSociais.join('');

    
    
    const music = () => {
        const audio = new Audio('music/secunda.mp3');
        document.querySelector('body').addEventListener('click', () => {
          audio.play();
        });
        
    }
    
music();
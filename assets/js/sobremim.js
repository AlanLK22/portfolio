const card = document.querySelector('.sobre-mim')

const sobreMim = () => {

return {
    nome: 'Alan sena',
    idade: 26,
    imagem: './assets/img/perfil2.jpeg',
    bio: 'Sou um estudante autodidata de programação, atualmente estudando javascript e typescript, amo tecnologia e sua capacidade de mudar o mundo!'
}


}



const infomações = `<div class=card>

<h1>${sobreMim().nome}</h1>
<img src=${sobreMim().imagem}></img>

<p> <b>idade:</b> ${sobreMim().idade} anos</p>

<h2>Sobre mim</h2>

<p class=bio>${sobreMim().bio}</p>

</div>`

card.innerHTML = infomações
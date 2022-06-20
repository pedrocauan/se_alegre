const botao = document.querySelector("button");
const main =  document.querySelector("main");
const imgs = document.querySelectorAll("img");

botao.addEventListener("click", () => {
    main.classList.add("clicou");
})

const rodaAnimacao = () => {
    setInterval(()=>{
        imgs.forEach(img => {
            img.classList.toggle("animacao")
                
        })
        
    }, 800);
}

rodaAnimacao();
function criaCartao(categoria,pergunta,resposta){
   let container = document.getElementById('container')
   let cartao = document.createElement('article')
   cartao.className = 'cartao'
   cartao.innerHTML = `            
   <article cl
   <div class="cartao__conteudo">
                <h3>programação</h3>
                <div class="cartao__conteudo__pergunta">
                    <h3> {categoria} </h3>
                </div>
                <div class="cartao__conteudo__resposta">
                  <p>linguagem de programação</p>  
                </div>`
              
          
            
  </article>


  let respostaEstaVIsivel= false

  function viraCartao () {
  respostaEstaVisivel = !respostaEstaVisivel
  cartao.}
export default function Help () {
    return (
        <section className="container">
          <h1 className="text-center">Ajuda</h1>
          <hr/>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    O que é Lorem Ipsum?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,</strong>
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
                    os embaralhou para fazer um livro de modelos de tipos.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    De onde ele vem?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. </strong>
                    Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC.
                    Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia,
                    pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
                    procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Porque nós o usamos?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>É um fato conhecido de todos que um leitor se distrairá com o conteúdo
                    de texto legível de uma página quando estiver examinando sua diagramação.</strong>
                    A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras,
                    ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência
                    similar a de um texto legível.
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}

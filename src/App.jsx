import { useState, useEffect } from 'react';
import Cabecalho from './components/Cabecalho.jsx';
import Rodape from './components/Rodape.jsx';
import './components/Style/app.css'
import './components/Style/mobile.css'

import logo2 from '../src/assets/icon/Claud.IA_vermelho.png' 
{/* Icones */}
import Github from '../src/assets/icon/github.png'
import Linkedin from '../src/assets/icon/linkedin.png'
import Instagram from '../src/assets/icon/instagram.png'

import beneficio1 from '../src/assets/icon/analise_dados.png'
import beneficio2 from '../src/assets/icon/insigths.png'
import beneficio3 from '../src/assets/icon/competividade.png'
import beneficio4 from '../src/assets/icon/escalabilidade.png'
import beneficio5 from '../src/assets/icon/tomada_decisao.png'
import beneficio6 from '../src/assets/icon/interface.png'
import beneficio7 from '../src/assets/icon/confiar.png'
import beneficio8 from '../src/assets/icon/linguagem_natural.png'

{/* Background */}
import Grafico from '../src/assets/background/grafico.png'

{/* Integrantes */}
import Nicoly from '../src/assets/squad/nicoly.jpg'
import Ana from '../src/assets/squad/ana.jpeg'
import Rafael from '../src/assets/squad/rafa.png'
import Vitor from '../src/assets/squad/vitor.png'

function App() {
  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(0);

  // Definindo a data do evento
  const eventDate = new Date('2024-10-28T14:00:00'); // Data e hora do evento

  useEffect(() => {
    // Atualiza a contagem regressiva a cada segundo
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = eventDate - now; // tempo restante em milissegundos

      if (timeRemaining < 0) {
        clearInterval(interval);
        setCountdown(0); // O evento já aconteceu
      } else {
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [eventDate]);

  return (
    <>
      <main>
        <Cabecalho />
        <div className='main-texto'>
          <h1>Menos Tempo Analisando, Mais Tempo Criando Insigths Valiosos.</h1>
          <p>Descomplique a análise de dados com inteligência automatizada e soluções 
            preditivas, transformando informações em ações precisas e estratégicas.</p>
        </div>
      </main>

      <section className='beneficios'>
        <div className='beneficios-box'>
          <div className='beneficios-item'>
            <img src={beneficio1} alt="" />
            <p>Análise de Dados Automatizado</p>
          </div>
          <div className='beneficios-item'>
            <img src={beneficio2} alt="" />
            <p>Insigths Preditivos</p>
          </div>
          <div className='beneficios-item'>
            <img src={beneficio3} alt="" />
            <p>Aumento da Competitividade</p>
          </div>
          <div className='beneficios-item'>
            <img src={beneficio4} alt="" />
            <p>Escalabilidade</p>
          </div>
          <div className='beneficios-item'>
            <img src={beneficio5} alt="" />
            <p>Tomada de Decisão Informada</p>
          </div>
          <div className='beneficios-item'>
            <img src={beneficio6} alt="" />
            <p>Interface Intuitiva e Acessível</p>
          </div>
          <div className='beneficios-item'>
            <img src={beneficio7} alt="" />
            <p>Decisões Baseadas em Dados</p>
          </div>
          <div className='beneficios-item'>
            <img src={beneficio8} alt="" />
            <p>Linguagem Natural</p>
          </div>
        </div>
      </section>
      
      <section className='solucao'>
        <div className='solucao-texto'>
          <h2>A Solução para uma Análise Eficiente e Preditiva</h2>
          <p>Muitas empresas lutam para gerenciar e interpretar o vasto
            fluxo de dados gerados diariamente. Processos manuais
            e ferramentas obsoletas levam a análises superficiais e 
            ineficazes, comprometendo decisões críticas e deixando 
            problemas sem solução antecipada. Sem uma abordagem automatizada
            e preditiva, as organizações perdem a oportunidade de otimizar
            operações e impulsionar resultados estratégicos. Com a Claud.IA, 
            transforme essa realidade e faça dos dados o motor do seu sucesso.</p>
        </div>
        <div className='solucao-box-img'>
          <img src={Grafico} alt="" className='solucao-img'/>
        </div>
      </section>
      
      <section className='video'>
        <div>
          <iframe 
            src="https://www.youtube.com/embed/UugwMVWJvKk?si=jUp6HEAWER_RSj_E" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </section>

      <section className='next-evento'>
        <div className='next-container'>
              <div className='evento-details'>
                <h2>ESTAREMOS NO NEXT - FIAP!</h2>
                <p>O Festival de Tecnologia e Inovação da FIAP. Uma experiência única com Final das Challenges,
                  Premiações, Talent Hunting, Banda e Food Trucks.</p>
              </div>
                {/* Exibindo a contagem regressiva */}
              <div>
                <div className='countdown'>
                  <div className='square'>
                    <p>{countdown.days} dias</p>
                  </div>
                  <div className='square'>
                    <p>{countdown.hours} horas</p>
                  </div>
                  <div className='square'>
                    <p>{countdown.minutes} minutos</p>
                  </div>
                  <div className='square'>
                    <p>{countdown.seconds} segundos</p>
                  </div>
                </div>
              </div>
               
        </div>
      </section>

      <section className='mobile'>
        <div className='mobile-texto'>
          <img className='logo2' src={logo2} alt="" />
          <h2>Agora disponível na versão mobile!</h2>
          <button className='btn-mobile'>SABER MAIS</button>
        </div>
      </section>

      <section className='nossa-equipe'>
        <div className='equipe-titulo'>
          <h2>Nossa Equipe</h2>
        </div>
        <div className='nossa-equipe-intro'>
          <p>Nós somos um grupo de estudantes apaixonados por tecnologia e inovação,
            unindo forças no Challenge FIAP para desenvolver a Claud.IA, uma solução 
            que transforma dados complexos em insights valiosos. Cada membro da nossa
            equipe traz uma expertise única, contribuindo para criar uma ferramenta 
            poderosa e intuitiva, capaz de revolucionar a forma como empresas tomam 
            decisões estratégicas.</p>
        </div>
        <div className='equipe-box'>
          <div className='integrante-item'>
            <img className='foto-perfil' src={Ana} alt="" />
            <div>
              <div className='integrante-nome'>
                <p>RM98974</p>
                <p>Ana Julia Almeida</p>
              </div>
              <p className='integrante-item-sobre'>Atua na área de Data Analytics na bolsa de valores,
                onde aplica suas habilidades em análise de dados para tomar decisões estratégicas. 
                No projeto Claud.IA, ela foi fundamental, liderando tanto o
                treinamento da inteligência artificial quanto a implementação do 
                framework que sustenta o funcionamento da plataforma. Sua capacidade de
                transformar dados em insights acionáveis e seu conhecimento técnico
                contribuíram significativamente para o sucesso do projeto.</p>
            </div>
            <div className='social-media'>
              <a href=""><img className='icone-img-social-media' src={Linkedin} alt="Logotipo do Linkedin" /></a>
              <a href=""><img className='icone-img-social-media' src={Github} alt="Logotipo do Github" /></a>
              <a href=""><img className='icone-img-social-media' src={Instagram} alt="Logotipo do instagram" /></a>
            </div>
          </div>

          <div className='integrante-item'>
            <img className='foto-perfil' src={Nicoly} alt="" />
            <div>
              <div className='integrante-nome'>
                <p>RM552410</p>
                <p>Nicoly Oliveira</p>
              </div>
              <p className='integrante-item-sobre'>Atua na área de Tech Strategy, trazendo uma 
                abordagem estratégica ao desenvolvimento de soluções tecnológicas. 
                No projeto Claud.IA, desempenhou um papel central, liderando a criação do 
                database, design da plataforma e o desenvolvimento do site. 
                Sua habilidade garantiu uma base sólida e uma interface moderna para o sucesso do projeto.</p>
            </div>
            <div className='social-media'>
              <a href=""><img className='icone-img-social-media' src={Linkedin} alt="Logotipo do Linkedin" /></a>
              <a href=""><img className='icone-img-social-media' src={Github} alt="Logotipo do Github" /></a>
              <a href=""><img className='icone-img-social-media' src={Instagram} alt="Logotipo do instagram" /></a>
            </div>
          </div>

          <div className='integrante-item'>
            <img className='foto-perfil' src={Rafael} alt="" />
            <div>
              <div className='integrante-nome'>
                <p>RM99812</p>
                <p>Rafael Gomes</p>
              </div>
              <p className='integrante-item-sobre'>Seu foco é na programação e desenvolvimento de 
                soluções, trazendo suas habilidades em codificação para o projeto Claud.IA. 
                Ele é responsável pela integração da plataforma, garantindo que todos os
                sistemas funcionem perfeitamente em conjunto. Rafael possui uma 
                grande experiência em desenvolvimento web e é um ativo valioso para a equipe.</p>
            </div>
            <div className='social-media'>
              <a href=""><img className='icone-img-social-media' src={Linkedin} alt="Logotipo do Linkedin" /></a>
              <a href=""><img className='icone-img-social-media' src={Github} alt="Logotipo do Github" /></a>
              <a href=""><img className='icone-img-social-media' src={Instagram} alt="Logotipo do instagram" /></a>
            </div>
          </div>

          <div className='integrante-item'>
            <img className='foto-perfil' src={Vitor} alt="" />
            <div>
              <div className='integrante-nome'>
                <p>RM11115</p>
                <p>Vitor Andrade</p>
              </div>
              <p className='integrante-item-sobre'>Com um forte background em design de interface 
                e experiência do usuário, ele tem sido fundamental na criação de uma
                interface intuitiva e visualmente atraente para a Claud.IA. 
                Sua experiência garante que a experiência do usuário seja sempre a melhor possível.</p>
            </div>
            <div className='social-media'>
              <a href=""><img className='icone-img-social-media' src={Linkedin} alt="Logotipo do Linkedin" /></a>
              <a href=""><img className='icone-img-social-media' src={Github} alt="Logotipo do Github" /></a>
              <a href=""><img className='icone-img-social-media' src={Instagram} alt="Logotipo do instagram" /></a>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
    </>
  )
}

export default App

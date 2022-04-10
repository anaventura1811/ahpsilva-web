import { HeadlineWrapper, TestimonialsContainer, TextWrapper } from './styles';
import { FaQuoteLeft } from 'react-icons/fa';

type Props = {}

const Testimonials = (props: Props) => {

  return (
    <TestimonialsContainer>
      <TextWrapper>
        <HeadlineWrapper>
          <h2 className='title_underline'>Depoimentos</h2>
        </HeadlineWrapper>
        <div className='container'>
          <div className='row-one'>

            <div className='testimonial'>
              <FaQuoteLeft size={30}/>
              <blockquote>
                <p>
                  <strong>Acompanho a atuação do advogado Dr. Antônio desde quando começou.</strong> A sua história é marcada pela competência, transparência, ética, dedicação, compromisso e realidade com que trata as pessoas e as causas que atua. Indico e recomendo.
                </p>
                <footer>
                  <cite>
                    <strong>Cristiano</strong>
                    <span className="title">Oficina Mastercar</span>
                  </cite>
                </footer>
              </blockquote>
            </div>
            <div className='testimonial'>
              <FaQuoteLeft size={30}/>
              <blockquote>
                <p>
                  <strong>Conheço o trabalho desse profissional, sem dúvidas um dos melhores de Betim.</strong> Não apenas recomendo, vou além: sempre que preciso busco orientação e assessoria preventiva desse conceituado advogado. Assino em baixo.
                </p>
                <footer>
                  <cite>
                    <strong>Célio</strong>
                    <span className="title">Fazenda Vigano</span>
                  </cite>
                </footer>
              </blockquote>
            </div>
            <div className='testimonial'>
              <FaQuoteLeft size={30}/>
              <blockquote>
                <p>
                  <strong>Esse advogado é excelente.</strong> Com ele não tem enrolação: ou é ou não é. Prático, objetivo e sem rodeios. O curioso que ele nunca promete resultados, mas até hoje não vi perder uma causa.
                </p>
                <footer>
                  <cite>
                    <strong>Júnior</strong>
                    <span className="title">Espeteria do Chef - Shopping Monte Carmo</span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='row-two'>

            
            <div className='testimonial'>
              <FaQuoteLeft size={30}/>
              <blockquote>
                <p>
                <strong> Gente eu posso falar de verdade sobre este advogado....Esse advogado é muito diferenciado, autêntico e, principalmente, sincero, honesto e competente.</strong> Depois de ver vários profissionais atuando no caso do meu marido, depois dele ficar preso por anos, condenado até pelo Tribunal de Justiça, procuramos Dr. Antônio e finalmente restou provado que o meu marido tinha sido vítima de uma injustiça. Passamos mais de 10 anos correndo atrás para provar que meu marido nunca esteve no local do crime, mas foi só através de Dr. Antônio que a Justiça foi feita. Obrigado Dr. Antônio, nunca vou esquecer aquele júri que o senhor fez. Jamais vi um advogado debater com juízes e promotores com tanto conhecimento e altivez como presenciei Dr. Antônio fazer. A atuação desse advogado vai ficar em minha memória pra sempre! Tenho muita gratidão pelo seu esforço, e o mais em nunca ter desistido do caso do meu marido.Obrigado por ter devolvido a dignidade do meu marido. Excelente advogado.
                </p>
                <footer>
                  <cite>
                    <strong>Renilda Leoterio</strong>
                    {/* <span className="title"></span> */}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </TextWrapper>
    </TestimonialsContainer>
  );
}

export default Testimonials;
import {IoLogoWhatsapp} from 'react-icons/io';
import { useWindowSize } from '../../talons/useWindowSize';
import { ContactInfoContainer } from './styles';

type Props = {};

const ContactSection = (props: Props) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth <= 980;

  return (
    <ContactInfoContainer>
      <div className='container'>
          <h2>Contato</h2>
          <div className='text-info'>
            <div className='subcontainer media-info'>
              <div className='info'>
                <a href='https://api.whatsapp.com/send?phone=5531996989408&text=Oi,%20tenho%20uma%20dúvida'><IoLogoWhatsapp size={25} /> 31 9 9698-9408</a>
                <p id="contact-email">contato@ahpsilva.com.br</p> 
              </div>
              {/* <div className='social-media'>
                <h3>Siga-nos</h3>
                <div>
                  <FaInstagramSquare size={27}/>
                  <ImFacebook2 size={25}/>
                  <ImLinkedin size={25}/>
                </div>
              </div> */}
            </div>
            <div className='subcontainer'>
              <iframe className='iframe' title='Onde estamos' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.299688328666!2d-44.20292874972582!3d-19.95389508652452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c3bb2ac82173%3A0x12459f8009a828ce!2sR.%20Jos%C3%A9%20Augusto%20Borges%2C%20484%20-%20Angola%2C%20Betim%20-%20MG%2C%2032604-078!5e0!3m2!1spt-BR!2sbr!4v1648856259998!5m2!1spt-BR!2sbr"
              width={isMobile ? '100%': "550"}
              height={isMobile ? 'auto': "412"}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
    </ContactInfoContainer>
  );
}

export default ContactSection;

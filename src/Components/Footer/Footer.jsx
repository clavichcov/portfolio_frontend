import './Footer.css';
import { useState } from 'react';
import { Popup } from '../Main/Popup/Popup.jsx'
import { Contact } from '../Main/Popup/Contact/Contact.jsx'
import { useLanguage } from '../Contexts/LanguageContext';
import {IMAGES, LINKS} from '../../Utils/Constants.js'

export function Footer() {
    const { t } = useLanguage();
    const contact = {children:<Contact />}
    const [popup, setPopup] = useState(null);
    
    function handleOpenPopup(popup) {
        setPopup(popup);
    }
    function handleClosePopup() {
    setPopup(null);
    }
    return(
        <footer className='footer' id='contact'>
            <div className='footer__form'>
                    <h3 className='footer__contact_title'>
                        {t('footer.contact-title')}
                    </h3>
                    <button 
                        className='footer__contact_button'
                        onClick={()=>handleOpenPopup(contact)}
                    >
                        {t('footer.contact-button')}
                    </button>
                </div>
            <div className='footer__content'>
                
                <div className='footer__content_contact'>
                    <h3 className='footer__contact_title'>
                        {t('footer.contact')}
                    </h3>
                    <p className='footer__contact_text'>
                        {t('footer.email')} alexanderma1983@gmail.com
                    </p>
                    <p className='footer__contact_text'>
                        {t('footer.whatsapp')} +57 320 963 7937                        
                    </p>
                    <p className='footer__contact_text'>
                        {t('footer.phone')} +57 322 953 4786
                    </p>
                </div>
                <div className='footer__content_social'>
                    <a className='footer__social_link' href={LINKS.linkedin} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.linkedin} alt="Linkedin" />
                    </a>
                    <a className='footer__social_link' href={LINKS.github} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.github} alt="Github" />
                    </a>
                    <a className='footer__social_link' href={LINKS.discord} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.discord} alt="Discord" />
                    </a>
                    <a className='footer__social_link' href={LINKS.whatsapp} target="_blank">
                        <img className='footer__social_icon' src={IMAGES.whatsapp} alt="WhatsApp" />
                    </a>
                </div>
                
            </div>
            <div className='footer__copyright'>
                <p className="footer__copyright_text">
                    &copy; 2026 Alexander Artemiev
                </p>
            </div>
            {popup && (
               <Popup onClose={handleClosePopup} popupType="contact" >
                    {popup.children}
                </Popup>
            )}
        </footer>
    )

}
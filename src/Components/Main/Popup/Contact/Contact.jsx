import './Contact.css'
import { useState } from 'react';

export function Contact() {
    const handleSubmit = (e) => {
            e.preventDefault();
             
        };
    const [names, setNames] = useState("");
    const [lastnames, setLastnames] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [serviceType, setServiceType] = useState("4");
    const [message, setMessage] = useState("");
    return (
        <>
            <form 
            className='form'
            onSubmit={handleSubmit}
            >
                <div className='form__content'>
                    <h3 className='form__title'>Contactame</h3>
                    <label className="form__wrapper">
                        Nombres
                    </label>
                    <input
                        className="form__input form__input_name"
                        id="name"
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        maxLength="100"
                        minLength="2"
                        name="names"
                        placeholder="Tu Nombre o Nombres"
                        required
                        type="text"
                    />
                    <span className="form__error" id="names-error"></span>

                    <label className="form__wrapper">
                        Apellidos:
                    </label>
                    <input
                        className="form__input form__input_lastnames"
                        id="lastnames"
                        value={lastnames}
                        onChange={(e) => setLastnames(e.target.value)}
                        maxLength="100"
                        minLength="2"
                        name="lastnames"
                        placeholder="Tu apellido o Apellidos"
                        required
                        type="text"
                    />
                    <span className="form__error" id="lastnames-error"></span>

                    <label className="form__wrapper">
                        WhatsApp:
                    </label>
                    <input
                        className="form__input form__input_whatsapp"
                        id="whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        maxLength="30"
                        minLength="6"
                        name="whatsapp"
                        placeholder="Ej: +57 320 963 7937"
                        type="tel"
                    />
                    <span className="form__error" id="whatsapp-error"></span>

                    <label className="form__wrapper">
                        E-mail:
                    </label>
                    <input
                        className="form__input form__input_email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength="60"
                        minLength="5"
                        name="email"
                        placeholder="Ej: tu@email.com"
                        required
                        type="email"
                    />
                    <span className="form__error" id="email-error"></span>

                    <label className="form__wrapper">
                        ¿Qué tipo de servicio necesitas?:
                    </label>
                    <select className="form__select"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                    >
                        <option className='' value="0">Desarrollo web (Frontend/Backend/Full Stack)</option>
                        <option className='' value="1">Soporte TI / Mantenimiento</option>
                        <option className='' value="2">Electricidad (Hogar/Comercial/industrial)</option>
                        <option className='' value="3">Consultoría</option>
                        <option className='' value="4">Otro</option>
                    </select>

                    <label className="form__wrapper">
                        Mensaje:
                    </label>
                    <textarea
                        className="form__textarea form__textarea_message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength="1000"
                        minLength="20"
                        name="message"
                        placeholder="Cuéntame sobre tu proyecto..."
                        required
                    />
                    <span className="form__error" id="message-error"></span>

                    <span className="form__error" id="submit-error"></span>
                    <button className="form__submit" type="submit">
                        📝 Enviar mensaje
                    </button>
                </div>
                

            </form>
        </>
    );
}
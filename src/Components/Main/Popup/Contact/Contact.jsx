import './Contact.css'
import { useState, useCallback, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
    const form = useRef();
    const [names, setNames] = useState("");
    const [lastnames, setLastnames] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [serviceType, setServiceType] = useState("Otro");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors]= useState({
        names:"",
        lastnames:"",
        whatsapp:"",
        email:"",
        message:"",
        submit:""
    });
    
    const validateField = useCallback((fieldName, value) => {
    let error = "";
    
    if (!value.trim() && fieldName!="whatsapp") {
      error = "Este campo es obligatorio";
    } else if (fieldName === "names") {
      if (value.length < 2) {
        error = "Este campo debe tener almenos 2 caracteres";
      } else if (value.length > 100){
            error = "Este campo no puede tener mas de 100 caracteres";
        }
    } else if (fieldName === "lastnames") {
      if (value.length < 2) {
        error = "Este campo debe tener almenos 2 caracteres";
      } else if (value.length > 100){
            error = "Este campo no puede tener mas de 100 caracteres";
        }
    } else if(fieldName === "email"){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            error = "Por favor ingresa un correo electrónico válido";
        }
    } else if(fieldName === "message"){
        if (value.length < 20) {
            error = "Este campo debe tener almenos 20 caracteres";
        } else if (value.length > 1000){
            error = "Este campo no puede tener mas de 1000 caracteres";
        }
    }
    if(fieldName === "whatsapp"){
        const whatsappRegex = /^\+?[0-9]+$/;
        if(!whatsappRegex.test(value)){
            error = "Solo se permiten números y el signo + al inicio";
        } else if (value.length < 6) {
            error = "Este campo debe tener almenos 6 caracteres";
        } else if (value.length > 30){
            error = "Este campo no puede tener mas de 30 caracteres";
        }
    }
    return error;
  },[]);

   
    const handleChange = (e) => {
        const {name, value}= e.target
        if (name === 'names-input'){
            setNames(value);
            setErrors(prev => ({ ...prev, names: validateField("names", value) }));
        } else if(name==='lastnames-input'){
            setLastnames(value);
            setErrors(prev => ({ ...prev, lastnames: validateField("lastnames", value) }));
        } else if(name==='whatsapp-input'){
            setWhatsapp(value);
            setErrors(prev => ({ ...prev, whatsapp: validateField("whatsapp", value) }));
        } else if(name==='email-input'){
            setEmail(value);
            setErrors(prev => ({ ...prev, email: validateField("email", value) }));
        } else if(name=='servicetype-select'){
            setServiceType(value);
        } else if(name=='message-textarea'){
            setMessage(value);
            setErrors(prev => ({ ...prev, message: validateField("message", value) }));
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const namesValid = !validateField("names", names);
        const lastnamesValid = !validateField("lastnames", lastnames);
        const whatsappValid = !validateField("whatsapp", whatsapp);
        const emailValid = !validateField("email", email);
        const messageValid = !validateField("message", message);
        if (!namesValid && !lastnamesValid && !whatsappValid && !emailValid && !messageValid) {
            setErrors(prev => ({ ...prev, 
                submit: "Hubo errores en los campos, verificalos e intenta nuevamente" 
            }));
            return;
        };

        setIsLoading(true);
        setErrors(prev => ({ ...prev, submit: "" }));
        
        try {
            const response = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                
            );
            
            console.log("Email enviado exitosamente!", response);
            
            form.current.reset();
            setNames("");
            setLastnames("");
            setWhatsapp("");
            setEmail("");
            setMessage("");
            setServiceType("4");
            
            alert("¡Mensaje enviado con éxito! Te responderé pronto.");
            
        } catch (error) {
            console.error("Error al enviar el email:", error);
            setErrors(prev => ({
                ...prev,
                submit: "Error al enviar el mensaje. Por favor, intenta de nuevo más tarde."
            }));
        } finally {
            setIsLoading(false);
        }
    };
    const isFormValid = 
    names.trim() !== "" && !errors.names &&
    lastnames.trim() !== "" && !errors.lastnames &&
    email.trim() !== "" && !errors.email &&
    message.trim().length >= 20 && !errors.message &&
    (whatsapp.trim() === "" || !errors.whatsapp);
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);
   
    
    return (
        <>
            <form 
            className='form'
            ref={form}
            onSubmit={handleSubmit}
            >
                <div className='form__content'>
                    <h3 className='form__title'>Contactame</h3>
                    <label className="form__wrapper">
                        Nombres
                    </label>
                    <input
                        className={`form__input form__input_name ${errors.names ?
                            'form__input_error' : ''}`}
                        id="names-input"
                        value={names}
                        onChange={handleChange}
                        maxLength="100"
                        minLength="2"
                        name="names-input"
                        placeholder="Tu Nombre o Nombres"
                        required
                        type="text"
                    />
                    <span className="form__error" id="names-error">{errors.names}</span>

                    <label className="form__wrapper">
                        Apellidos:
                    </label>
                    <input
                        className={`form__input form__input_lastnames ${errors.lastnames ?
                            'form__input_error' : ''}`}
                        id="lastnames-input"
                        value={lastnames}
                        onChange={handleChange}
                        maxLength="100"
                        minLength="2"
                        name="lastnames-input"
                        placeholder="Tu apellido o Apellidos"
                        required
                        type="text"
                    />
                    <span className="form__error" id="lastnames-error">{errors.lastnames}</span>

                    <label className="form__wrapper">
                        WhatsApp:
                    </label>
                    <input
                        className={`form__input form__input_whatsapp ${errors.whatsapp ?
                            'form__input_error' : ''}`}
                        id="whatsapp-input"
                        value={whatsapp}
                        onChange={handleChange}
                        maxLength="30"
                        minLength="6"
                        name="whatsapp-input"
                        placeholder="Ej: +57 320 963 7937"
                        type="tel"
                    />
                    <span className="form__error" id="whatsapp-error">{errors.whatsapp}</span>

                    <label className="form__wrapper">
                        E-mail:
                    </label>
                    <input
                        className={`form__input form__input_email ${errors.email ?
                            'form__input_error' : ''}`}
                        id="email-input"
                        value={email}
                        onChange={handleChange}
                        maxLength="60"
                        minLength="5"
                        name="email-input"
                        placeholder="Ej: tu@email.com"
                        required
                        type="email"
                    />
                    <span className="form__error" id="email-error">{errors.email}</span>

                    <label className="form__wrapper">
                        ¿Qué tipo de servicio necesitas?:
                    </label>
                    <select className="form__select"
                        id="servicetype-select"
                        name="servicetype-select"
                        value={serviceType}
                        onChange={handleChange}
                    >
                        <option className='' value="Desarrollo web">Desarrollo web (Frontend/Backend/Full Stack)</option>
                        <option className='' value="Soporte TI">Soporte TI / Mantenimiento</option>
                        <option className='' value="Electricidad">Electricidad (Hogar/Comercial/industrial)</option>
                        <option className='' value="Consultoría">Consultoría</option>
                        <option className='' value="Otro">Otro</option>
                    </select>

                    <label className="form__wrapper">
                        Mensaje:
                    </label>
                    <textarea
                        className="form__textarea form__textarea_message"
                        className={`form__textarea form__textarea_message ${errors.message ?
                            'form__input_error' : ''}`}
                        id="message-textarea"
                        value={message}
                        onChange={handleChange}
                        maxLength="1000"
                        minLength="20"
                        name="message-textarea"
                        placeholder="Cuéntame sobre tu proyecto..."
                        required
                    />
                    <span className="form__error" id="message-error">{errors.message}</span>

                    <span className="form__error" id="submit-error">{errors.submit}</span>
                    <button 
                    className="form__submit" 
                    type="submit"
                    disabled={!isFormValid}>
                       {isLoading ? 'Enviando...' : '📝 Enviar mensaje'} 
                    </button>
                </div>
                

            </form>
        </>
    );
}
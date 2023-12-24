import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contacts } from "../constants";


const Contact = ({ setSuccess }) => {
    
    const form = useRef();
    const [nameFail, setNameFail] = useState(false);
    const [emailFail, setEmailFail] = useState(false);
    const [messageFail, setMessageFail] = useState(false);

   

    const sendEmail = (e) => {
        e.preventDefault();

        setNameFail(false);
        setEmailFail(false);
        setMessageFail(false);
        
        if(!form.current[0].value) {
            setNameFail(true);
        } 
        if(!form.current[1].value) {
            setEmailFail(true);
        } 
        if(!form.current[2].value) {
            setMessageFail(true);
        }
    
        if(form.current[0].value && form.current[1].value && form.current[2].value) {
    
            emailjs.sendForm(import.meta.env.VITE_SERVICE_ID , import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
                    .then((result) => {
                    
                        if(result.text) {
                            form.current[0].value = "";
                            form.current[1].value = "";
                            form.current[2].value = "";
                            setSuccess(true);
                           
                        }
                    }, (error) => {
                        console.log(error.text);
                    });
        }
    };  

    return (
        <section className="px-28 mt-40" id="contact">
            <h1 className="text-4xl font-bold mb-24 text-center">Contact Me</h1>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    
                    {
                        contacts.map((c, i) => (
                            <div key={i} className="flex items-center mb-6">
                                <c.Icon size={28} className="mr-3" />

                                <div>
                                    <h3 className="capitalize text-xl">{c.title}</h3>
                                    <p>{c.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>

                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col mb-5'>
                            <label className="mb-3">Name</label>
                            <input type="text" name="user_name" 
                                    className='border focus:outline-none p-2' />
                            <small className={`text-red-600 ${nameFail? "block" : "hidden"}`}>The name field must be filled.</small>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label className="mb-3">Email</label>
                            <input type="email" name="user_email" 
                                    className='border focus:outline-none p-2' />
                            <small className={`text-red-600 ${emailFail? "block" : "hidden"}`}>The email field must be filled.</small>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label className="mb-3">Message</label>
                            <textarea name="message" rows="10" cols="50"
                                    className='border focus:outline-none p-2' />
                            <small className={`text-red-600 ${messageFail? "block" : "hidden"}`}>The message field must be filled.</small>
                        </div>

                        <button type="submit"
                                className='bg-black text-white 
                                px-4 py-2 rounded-md mb-4
                                transition-all active:scale-95'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
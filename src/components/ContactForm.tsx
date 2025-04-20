import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    organisation: '',
    message: '',
  });

  const [showContactFormSuccess, setShowContactFormSuccess] = useState(false);
  const [isSubmitingContactForm, setIsSubmitingContactForm] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitingContactForm(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitingContactForm(false);
          setShowContactFormSuccess(true);
          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            organisation: '',
            message: ''
          });
        },
        (error) => {
            console.log('Error sending email:', error);
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
            setShowContactFormSuccess(false);
        }
      );
  };


  return (
    <div>
      {!showContactFormSuccess && <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-6">
        <div className="relative">
            <input type="text" value={formData.first_name} onChange={handleInputChange} id="input-first-name" name="first_name" className="peer p-4 block w-full border-silver-chalice-400 rounded-lg sm:text-sm placeholder:text-transparent focus:border-astronaut-blue-900 focus:ring-astronaut-blue-900 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" />
            <label htmlFor="#input-first-name" className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-500">
                Prénom
            </label>
            </div>

            <div className="relative">
            <input type="text" value={formData.last_name} onChange={handleInputChange} id="input-last-name" name="last_name" className="peer p-4 block w-full border-silver-chalice-400 rounded-lg sm:text-sm placeholder:text-transparent focus:border-astronaut-blue-900 focus:ring-astronaut-blue-900 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" />
            <label htmlFor="#input-last-name" className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-500">
                Nom de famille
            </label>
            </div>

            <div className="relative">
            <input type="email" value={formData.email} onChange={handleInputChange} id="input-email" name="email" className="peer p-4 block w-full border-silver-chalice-400 rounded-lg sm:text-sm placeholder:text-transparent focus:border-astronaut-blue-900 focus:ring-astronaut-blue-900 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" />
            <label htmlFor="#input-email" className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-500">
                Adresse e-mail
            </label>
            </div>

            <div className="relative">
            <input type="text" value={formData.organisation} onChange={handleInputChange} id="input-organisation" name="organisation" className="peer p-4 block w-full border-silver-chalice-400 rounded-lg sm:text-sm placeholder:text-transparent focus:border-astronaut-blue-900 focus:ring-astronaut-blue-900 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" />
            <label htmlFor="#input-organisation" className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-500">
                Organisation
            </label>
            </div>

            <textarea value={formData.message} onChange={handleInputChange} name="message" placeholder="Message" className="col-span-full py-1 sm:py-2 px-3 block w-full border-silver-chalice-400 rounded-lg sm:text-sm focus:border-astronaut-blue-900 focus:ring-astronaut-blue-900 disabled:opacity-50 disabled:pointer-events-none" rows={6}></textarea>
            <div className="col-span-full flex justify-end">
            <button type="submit" className="p-4 bg-anzac-400 text-white uppercase rounded-lg cursor-pointer flex gap-x-2 items-center">
                { isSubmitingContactForm &&
                <svg className="text-white animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" /></svg>
                }
                <span>Envoyer</span>
            </button>
            </div>
        </form>}

        {showContactFormSuccess && <div className="flex flex-col gap-y-4">
            <div className="h-full flex gap-x-4 items-center">
            <div className="p-4 bg-anzac-400 text-white rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
            </div>
            <div className="flex flex-col gap-y-1 text-black-pearl-950">
                <strong className="text-2xl font-bold">Merci !</strong>
                <span className="md:text-lg font-semibold">
                Votre message a bien été envoyé.
                </span>
            </div>
            </div>
        </div>}
    </div>
  );
}
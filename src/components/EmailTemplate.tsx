import * as React from 'react';
import { ContactForm } from '../types/contactForm'; // Import the ContactForm interface

interface EmailTemplateProps {
  contactForm: ContactForm;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ contactForm }) => (
  <div>
    <h1>Nouveau contact de {contactForm.first_name} {contactForm.last_name}!</h1>
    <p>
      Vous avez reçu un nouveau message de {contactForm.first_name} {contactForm.last_name} ({contactForm.email}) de l&apos;organisation {contactForm.organisation}.
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{contactForm.message}</p>
  </div>
);
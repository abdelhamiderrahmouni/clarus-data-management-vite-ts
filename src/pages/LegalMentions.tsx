import { useEffect } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

const structuredSections = [
  {
    title: "Éditeur du site",
    items: [
      { label: "Nom", value: "Meryem Benaich" },
      { label: "Statut", value: "Entrepreneur individuel - non immatriculé à ce jour" },
      { label: "Adresse", value: "Paris, France" },
      { label: "Email", value: "contact@clarusdatamanagement.com" },
      { label: "Téléphone", value: "07 77 73 92 69" },
    ],
  },
  {
    title: "Hébergement",
    items: [
      { label: "Hébergeur", value: "o2switch" },
      { label: "Forme juridique", value: "SAS au capital de 100 000 €" },
      { label: "RCS", value: "Clermont-Ferrand 510 909 807" },
      { label: "Adresse", value: "222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France" },
      { label: "Téléphone", value: "04 44 44 60 40" },
      { label: "Site web", value: "https://www.o2switch.fr" },
    ],
  },
];

const textSections = [
  {
    title: "Responsabilité",
    paragraphs: [
      "L’éditeur du site s’efforce de fournir des informations aussi précises que possible. Toutefois, il ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour.",
      "Tout utilisateur s’engage à utiliser le site de manière responsable, sans porter atteinte aux droits d’autrui ou à la loi en vigueur.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "Sauf mention contraire, les contenus du site (textes, images, graphismes, logo, etc.) sont la propriété exclusive de Meryem Benaich.",
      "Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.",
    ],
  },
];

export default function LegalMentions() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="flex-1 bg-silver-chalice-50">
      <header className="bg-gradient-to-br from-black-pearl-950 to-black-pearl-800 text-white">
        <Section className="py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <SectionHeader className="text-white">
              Mentions légales
            </SectionHeader>
            <p className="text-lg sm:text-xl text-silver-chalice-100">
              Retrouvez ci-dessous toutes les informations officielles relatives à l’éditeur du site Clarus Data Management et à son hébergeur.
            </p>
            <div className="flex justify-center">
              <Link
                to="/"
                className="py-4 px-6 lg:px-12 bg-anzac-400 text-[#F5F5F5] uppercase rounded-lg font-bold text-shadow-sm"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </Section>
      </header>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-10 text-black-pearl-950">
          {structuredSections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h3 className="text-2xl font-semibold text-astronaut-blue-950">
                {section.title}
              </h3>
              <dl className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-silver-chalice-50 p-4">
                    <dt className="text-sm font-semibold uppercase tracking-wide text-black-pearl-700">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-base text-black-pearl-950">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </Section>

      <Section className="bg-silver-chalice-50">
        <div className="max-w-4xl mx-auto space-y-10 text-black-pearl-950">
          {textSections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h3 className="text-2xl font-semibold text-astronaut-blue-950">
                {section.title}
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-black-pearl-900">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </main>
  );
}

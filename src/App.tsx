import './App.css'
import Card from "./components/Card";
import Section from "./components/Section";
import Title from './components/CardTitle';
import CardBody from "./components/CardBody";
import SectionHeader from "./components/SectionHeader";
import AccordionItem from "./components/AccordionItem";
import ContactForm from './components/ContactForm';

function App() {
  
  return (
    <>
      <main className="">
      {/* Hero Section */}
      <header className="max-sm:min-h-screen bg-gradient-to-t from-black-pearl-950 to-black-pearl-800">
        <div className="py-28 md:pt-48 max-w-7xl mx-auto px-4 flex flex-col items-center gap-y-12">
          <img src="/logo.svg" alt="alt" className="w-28" width="24" height="24" />
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-center text-white">
              <span className='block'>
                Libérez la&nbsp;
                <span className="text-transparent bg-gradient-to-r from-anzac-400 to-anzac-200 bg-clip-text">
                  compléxité.
                </span>
              </span>
              <span className='block'>
                &nbsp;Naviguez avec&nbsp;
                <span className="text-anzac-400">clarté</span>.
              </span>
            </h1>
            <p className="max-w-4xl mx-auto text-lg lg:text-xl text-white text-center">
              La plateforme SaaS <strong className="font-bold">hybride</strong> qui <strong className="font-bold">simplifie</strong> et <strong className="font-bold">automatisé</strong> la gouvernance des données,
              pour accompagner les PME, ETI et organisations à <strong className="font-bold">piloter, décider</strong> et <strong className="font-bold">se transformer</strong> avec clarté et confiance.
            </p>
          </div>
          <a href="#contactez-nous" className="py-4 px-6 lg:px-12 bg-anzac-400 text-[#F5F5F5] uppercase rounded-lg font-bold text-shadow-sm">
            REJOIGNEZ NOS CLIENTS PILOTES
          </a>
        </div>
      </header>
      <div className="px-4 bg-black-pearl-950 text-white relative overflow-hidden">
        <svg className="absolute left-0 bottom-0 max-w-xl" width="626" height="224" viewBox="0 0 626 224" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity=".06" x="574.141" y="177.357" width="162.632" height="162.632" rx="22.789" transform="rotate(120 574.141 177.357)" fill="#F7F7F7"/><rect opacity=".06" x="247.57" y="210.745" width="162.632" height="162.632" rx="22.789" transform="rotate(120 247.57 210.745)" fill="#F7F7F7"/><rect opacity=".06" x="407.69" y="81.255" width="162.632" height="162.632" rx="22.789" transform="rotate(120 407.69 81.255)" fill="#F7F7F7"/></svg>
        <div className="relative py-16 max-w-7xl mx-auto">
          <p className="max-w-4xl mx-auto text-2xl lg:text-4xl font-bold text-center">
            Posez, dès le départ, un cadre clair, partagé et actionnable.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader>
            Nos Offres Clés
          </SectionHeader>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col gap-y-6 items-start">
              <div className="flex p-5 justify-center items-center bg-anzac-50 text-anzac-400 rounded-full">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5H6A1.5 1.5 0 0 0 4.5 6v7.5A1.5 1.5 0 0 0 6 15h7.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5m16.5 0h-7.5A1.5 1.5 0 0 0 21 6v7.5a1.5 1.5 0 0 0 1.5 1.5H30a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 30 4.5M30 21h-7.5a1.5 1.5 0 0 0-1.5 1.5V30a1.5 1.5 0 0 0 1.5 1.5H30a1.5 1.5 0 0 0 1.5-1.5v-7.5A1.5 1.5 0 0 0 30 21m-16.5 0H6a1.5 1.5 0 0 0-1.5 1.5V30A1.5 1.5 0 0 0 6 31.5h7.5A1.5 1.5 0 0 0 15 30v-7.5a1.5 1.5 0 0 0-1.5-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="space-y-3">
                <Title>
                  <h3>
                    Solution complète et modulable
                  </h3>
                </Title>
                <CardBody>
                  <p>Optez pour une gouvernance de données clé-en-main ou activez uniquement les modules adaptés à vos priorités.</p>
                  <ul className="list-disc list-inside">
                    <li>Gouvernance complète de vos données</li>
                    <li>Modules spécifiques selon vos priorités</li>
                    <li>Évolutivité selon vos besoins</li>
                    <li>Automatisation intelligente et IA</li>
                  </ul>
                </CardBody>
              </div>
            </Card>

            <Card className="flex flex-col gap-y-6 items-start">
              <div className="flex p-5 justify-center items-center bg-anzac-50 text-anzac-400 rounded-full">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 6.15 18 9M7.65 12 3.3 10.8M9 18l-2.85 3M10.8 3.3 12 7.65m1.556 6.885a.747.747 0 0 1 .979-.98l16.5 6.75a.75.75 0 0 1-.111 1.424l-6.523 1.562a1.5 1.5 0 0 0-1.11 1.108l-1.56 6.525a.75.75 0 0 1-1.426.111z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="space-y-3">
                <Title>
                  <h3>
                  Prise en main intuitive et rapide
                  </h3>
                </Title>
                <CardBody>
                  <p>
                    Pilotez votre gouvernance grâce à une plateforme claire, ergonomique et intégrant un diagnostic de maturité.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Tableaux de bord personnalisables</li>
                    <li>Diagnostic automatisé de maturité</li>
                    <li>Suivi en temps réel</li>
                  </ul>
                </CardBody>
              </div>
            </Card>

            <Card className="flex flex-col gap-y-6 items-start">
              <div className="flex p-5 justify-center items-center bg-anzac-50 text-anzac-400 rounded-full">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 31.5v-3a6 6 0 0 0-6-6H9a6 6 0 0 0-6 6v3m10.5-15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m19.5 15v-3a6 6 0 0 0-4.5-5.805m-4.5-18a6 6 0 0 1 0 11.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="space-y-3">
                <Title>
                  <h3>
                  Support expert et formation
                  </h3>
                </Title>
                <CardBody>
                  <p>
                    Avancez en confiance grâce à un accompagnement stratégique et des formations conçues pour vos équipes.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Experts dédiés à votre projet</li>
                    <li>Formations sur mesure pour vos équipes</li>
                    <li>Support continu et conseil stratégique</li>
                  </ul>
                </CardBody>
              </div>
            </Card>

          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-y-6">
            <SectionHeader className="lg:text-start">
              Notre Méthodologie en 5 Étapes
            </SectionHeader>
            <ul className="flex flex-col gap-y-3">
              <li className="py-4 flex gap-x-3 items-center">
                <div className="bg-anzac-50 rounded-full p-3">
                  <div className="border-2 border-anzac-400 text-anzac-400 w-8 h-8 rounded-full flex justify-center items-center">1</div>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <strong className="text-xl font-medium">Diagnostic de maturité</strong>
                  <p>Identifiez vos axes d&apos;améliorations en quelques clics.</p>
                </div>
              </li>
              <li className="py-4 flex gap-x-3 items-center">
                <div className="bg-anzac-50 rounded-full p-3">
                  <div className="border-2 border-anzac-400 text-anzac-400 w-8 h-8 rounded-full flex justify-center items-center">2</div>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <strong className="text-xl font-medium">Stratégie sur-mesure</strong>
                  <p>Concevez un plan sur mesure, aligné sur vos priorités.</p>
                </div>
              </li>
              <li className="py-4 flex gap-x-3 items-center">
                <div className="bg-anzac-50 rounded-full p-3">
                  <div className="border-2 border-anzac-400 text-anzac-400 w-8 h-8 rounded-full flex justify-center items-center">3</div>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <strong className="text-xl font-medium">Mise en œuvre agile et modulable</strong>
                  <p>Déployez nos modules sans perturber vos opérations.</p>
                </div>
              </li>
              <li className="py-4 flex gap-x-3 items-center">
                <div className="bg-anzac-50 rounded-full p-3">
                  <div className="border-2 border-anzac-400 text-anzac-400 w-8 h-8 rounded-full flex justify-center items-center">4</div>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <strong className="text-xl font-medium">Suivi et ajustement continu</strong>
                  <p>Suivez vos progrès en temps réel tout en ajustant en continu.</p>
                </div>
              </li>
              <li className="py-4 flex gap-x-3 items-center">
                <div className="bg-anzac-50 rounded-full p-3">
                  <div className="border-2 border-anzac-400 text-anzac-400 w-8 h-8 rounded-full flex justify-center items-center">5</div>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <strong className="text-xl font-medium">Accompagnement humain</strong>
                  <p>Accompagnez vos équipes pour une adoption réussie.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img src="/girl-explaining-chart.png" alt="alt" className="w-full h-full object-cover rounded-4xl max-h-[720px]" width="720" height="1280" />
          </div>
        </div>
      </Section>

      <Section className="relative py-0 overflow-hidden">
        <svg className="absolute top-0 left-0 py-0" width="1920" height="403" viewBox="0 0 1920 403" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1920 0H0v403l1920-145.242z" fill="var(--color-astronaut-blue-950)"/></svg>
        <svg className="absolute top-0 left-0" width="487" height="372" viewBox="0 0 487 372" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M349-42C179 121.5 274 202 37 270S-275 130.313-275-42s139.687-312 312-312S519-205.5 349-42" fill="#fff" fillOpacity=".15"/><path d="M37-398c95.337 0 225.069 40.008 310.557 103.331 42.655 31.596 80.651 73.717 91.688 125.824 11.806 55.734-9.566 110.298-59.744 158.558-78.736 75.726-93.044 127.442-122.869 181.389-15.601 28.217-35.11 55.481-68.949 80.055-32.838 23.846-76.738 43.402-138.548 61.137-65.562 18.811-123.672 19.583-173.983 3.876-50.527-15.775-89.456-47.017-118.317-85.773C-299.603 154.609-319 48.589-319-42c0-196.613 159.387-356 356-356Z" stroke="#fff" strokeOpacity=".06" strokeWidth="88"/></svg>
        <div className="relative max-w-7xl mx-auto space-y-12 py-16">
          <SectionHeader className="text-white">
            Qui est concernés ?
          </SectionHeader>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 lg:p-8 flex gap-x-4 lg:gap-x-6 items-start">
              <div className="flex p-4 justify-center items-center bg-anzac-50 text-anzac-400 rounded-xl">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 30a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V12l-10.5 7.5V12L12 19.5V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm22.5-3H27m-9 0h1.5m-9 0H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="space-y-3">
                <Title className="text-xl text-astronaut-blue-950">
                  <h3>
                  Industries
                  </h3>
                </Title>
                <CardBody>
                  <ul className="list-disc list-inside">
                    <li>Industrie manufacturière</li>
                    <li>Industrie de l&apos;énergie</li>
                    <li>Chimie et pharmaceutique</li>
                  </ul>
                </CardBody>
              </div>
            </Card>

            <Card className="p-6 lg:p-8 flex gap-x-4 lg:gap-x-6 items-start">
              <div className="flex p-4 justify-center items-center bg-anzac-50 text-anzac-400 rounded-xl">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 24.75c-2.25 1.89-3 7.5-3 7.5s5.61-.75 7.5-3c1.065-1.26 1.05-3.195-.135-4.365a3.27 3.27 0 0 0-4.365-.135M18 22.5 13.5 18a33 33 0 0 1 3-5.925A19.32 19.32 0 0 1 33 3c0 4.08-1.17 11.25-9 16.5a33.5 33.5 0 0 1-6 3" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.5 18H6s.825-4.545 3-6c2.43-1.62 7.5 0 7.5 0M18 22.5V30s4.545-.825 6-3c1.62-2.43 0-7.5 0-7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="space-y-3">
                <Title className="text-xl text-astronaut-blue-950">
                  <h3>
                  PME et start-ups
                  </h3>
                </Title>
                <CardBody>
                  <p>
                  Extension PME et scale-ups en structuration.
                  </p>
                </CardBody>
              </div>
            </Card>

            <Card className="p-6 lg:p-8 flex gap-x-4 lg:gap-x-6 items-start">
              <div className="flex p-4 justify-center items-center bg-anzac-50 text-anzac-400 rounded-xl">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 33V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v27zm0-15H6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3m18-19.5h3a3 3 0 0 1 3 3V30a3 3 0 0 1-3 3h-3M15 9h6m-6 6h6m-6 6h6m-6 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="space-y-3">
                <Title className="text-xl text-astronaut-blue-950">
                  <h3>
                  Organisations
                  </h3>
                </Title>
                <CardBody>
                  <p>
                    Organisations publiques ou privées.
                  </p>
                </CardBody>
              </div>
            </Card>

          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
            <img src="/man-smiling-using-laptop.png" alt="alt" className="w-full h-full object-cover rounded-4xl max-h-[720px]" width="720" height="1280" />
          </div>
          <div className="flex flex-col gap-y-6">
            <SectionHeader className="lg:text-start">
              Bénéfices Clés
            </SectionHeader>
            <ul className="px-8 py-4 flex flex-col gap-y-3 border border-anzac-400 bg-anzac-100 rounded-2xl divide-white divide-y">
              <li className="py-4 flex gap-x-3 items-center">
                <div className="text-black-pearl-900 w-8 h-8 flex justify-center items-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".2" d="M35 10v22.5H5v-25h27.5A2.5 2.5 0 0 1 35 10" fill="currentColor"/><path d="M36.25 32.5A1.25 1.25 0 0 1 35 33.75H5a1.25 1.25 0 0 1-1.25-1.25v-25a1.25 1.25 0 0 1 2.5 0v14.745l7.927-6.933a1.25 1.25 0 0 1 1.573-.059l9.19 6.892 9.237-8.082a1.248 1.248 0 0 1 2.068.503 1.25 1.25 0 0 1-.422 1.371l-10 8.75a1.25 1.25 0 0 1-1.573.06l-9.19-6.89-8.81 7.71v5.683H35a1.25 1.25 0 0 1 1.25 1.25" fill="currentColor"/></svg>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <p className="text-astronaut-blue-950 text-md font-medium">Structurez votre transformation des données avec intelligence</p>
                </div>
              </li>
              <li className="py-4 flex gap-x-3 items-center">
                <div className="text-black-pearl-900 w-8 h-8 flex justify-center items-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.553 9.618 9.45 16.523c-2.142 2.899-3.213 4.347-2.623 5.485l.03.057c.625 1.122 2.475 1.122 6.173 1.122 2.055 0 3.083 0 3.727.605l.033.033 6.453-7.617-.033-.033c-.632-.618-.632-1.605-.632-3.58v-.517c0-5.475 0-8.211-1.538-8.683s-3.188 1.76-6.487 6.223" fill="currentColor"/><path opacity=".5" d="M17.422 27.405v.517c0 5.473 0 8.211 1.538 8.683s3.188-1.76 6.488-6.223l5.104-6.905c2.14-2.899 3.211-4.347 2.621-5.485l-.03-.057c-.625-1.122-2.475-1.122-6.173-1.122-2.055 0-3.083 0-3.727-.605l-6.453 7.617c.632.618.632 1.605.632 3.58" fill="currentColor"/></svg>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <p className="text-astronaut-blue-950 text-md font-medium">Prenez des décisions éclairées basées sur des données fiables</p>
                </div>
              </li>
              <li className="py-4 flex gap-x-3 items-center">
                <div className="text-black-pearl-900 w-8 h-8 flex justify-center items-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".3" fillRule="evenodd" clipRule="evenodd" d="m30.275 4.608.425.054c1.123.155 2.61.363 3.452 1.206.69.689.955 1.809 1.113 2.809l.093.643c.21 1.517.265 3.503-.093 5.71-.707 4.355-3.025 9.552-8.847 13.575a8 8 0 0 0-.026.947l.016.473c.027.728.054 1.455-.15 2.163-.316 1.1-1.445 1.825-2.5 2.345l-.516.245-.667.294c-1.247.53-2.93 1.073-3.985.016-.633-.631-.893-1.558-1.105-2.48l-.078-.345q-.135-.653-.334-1.29a20 20 0 0 0-.27-.741q-.16.195-.338.375c-.575.575-1.433.976-2.14 1.258-.772.305-1.645.572-2.453.792l-.415.11-.795.198-.72.167-.862.183-.538.105a1.683 1.683 0 0 1-1.962-1.962l.143-.718.257-1.163.207-.85.156-.6c.22-.807.487-1.68.794-2.45.28-.709.681-1.567 1.256-2.142l.134-.128-.107-.044a13 13 0 0 0-.865-.295l-.462-.141c-1.156-.35-2.393-.727-3.161-1.497-.934-.932-.619-2.35-.169-3.53l.184-.457.295-.666.245-.517c.52-1.053 1.245-2.182 2.345-2.498.583-.167 1.19-.177 1.8-.16l.366.011c.477.017.952.035 1.417-.01 4.023-5.823 9.22-8.141 13.575-8.848a19.7 19.7 0 0 1 5.285-.147" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M25.893 14.11c-1.813-1.815-4.913-.985-5.576 1.493a3.33 3.33 0 0 0 .861 3.22c1.814 1.815 4.914.985 5.577-1.493a3.33 3.33 0 0 0-.862-3.22M13.922 25.733a1.67 1.67 0 0 0-1.834-.1l-.183.124-.155.138-.208.263c-.434.627-.68 1.494-.872 2.304l-.18.78-.085.355.318-.077.697-.16c.963-.225 2.032-.517 2.688-1.108a1.67 1.67 0 0 0 .147-2.19l-.137-.157-.04-.038z" fill="currentColor"/></svg>
                </div>
                <div className="flex flex-col gap-y-1.5">
                  <p className="text-astronaut-blue-950 text-md font-medium">Évoluez rapidement selon votre croissance et vos exigences</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader>
            Résultats Concrets
          </SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex gap-x-4 items-center md:items-start">
              <svg width="58" height="61" viewBox="0 0 58 61" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M43.5 25.417H58L50.75 15.25zm0 10.166H58L50.75 45.75z" fill="#A9A9A9"/><path d="M2.417 0h14.5v61h-14.5a2.36 2.36 0 0 1-1.71-.744A2.6 2.6 0 0 1 0 58.458V2.542c0-.674.255-1.32.708-1.798A2.36 2.36 0 0 1 2.417 0" fill="#C59B2D"/><path d="M21.75 0h14.5c.64 0 1.256.268 1.709.744a2.6 2.6 0 0 1 .708 1.798v55.916a2.6 2.6 0 0 1-.708 1.798A2.36 2.36 0 0 1 36.25 61h-14.5z" fill="#034877"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h58v61H0z"/></clipPath></defs></svg>
              <div className="flex flex-col gap-y-1 text-black-pearl-950">
                <strong className="text-5xl font-bold">60%</strong>
                <span className="md:text-lg font-semibold">
                  Qualité de données augmentée
                </span>
              </div>
            </div>

            <div className="flex gap-x-4 items-center md:items-start">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.75 58H29a2.417 2.417 0 0 1-2.417-2.417V50.75A2.417 2.417 0 0 1 29 48.333h21.75a2.417 2.417 0 0 1 2.417 2.417v4.833A2.417 2.417 0 0 1 50.75 58" fill="#A9A9A9"/><path d="M50.75 0H7.25a2.417 2.417 0 0 0-2.417 2.417V7.25A2.417 2.417 0 0 0 7.25 9.667h43.5a2.417 2.417 0 0 0 2.417-2.417V2.417A2.417 2.417 0 0 0 50.75 0" fill="#C59B2D"/><path d="M50.75 14.5H7.25a2.417 2.417 0 0 0-2.417 2.417v24.166A2.417 2.417 0 0 0 7.25 43.5h43.5a2.417 2.417 0 0 0 2.417-2.417V16.917A2.417 2.417 0 0 0 50.75 14.5" fill="#034877"/></svg>
              <div className="flex flex-col gap-y-1 text-black-pearl-950">
                <strong className="text-5xl font-bold">↓</strong>
                <span className="md:text-lg font-semibold">
                  Minimisation des coûts de conformité
                </span>
              </div>
            </div>

            <div className="flex gap-x-4 items-center md:items-start">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.083 2.417h-7.25a2.417 2.417 0 0 0-2.416 2.416v48.334a2.417 2.417 0 0 0 2.416 2.416h7.25z" fill="#A9A9A9"/><path d="M16.917 55.583h24.166V2.417H16.917zM29 45.917a2.417 2.417 0 1 1 0-4.834 2.417 2.417 0 0 1 0 4.834m0-33.834a2.417 2.417 0 1 1 0 4.834 2.417 2.417 0 0 1 0-4.834m0 14.5a2.417 2.417 0 1 1 0 4.834 2.417 2.417 0 0 1 0-4.834" fill="#034877"/><path d="M53.167 2.417h-7.25v53.166h7.25a2.417 2.417 0 0 0 2.416-2.416V4.833a2.417 2.417 0 0 0-2.416-2.416" fill="#C59B2D"/></svg>
              <div className="flex flex-col gap-y-1 text-black-pearl-950">
                <strong className="text-5xl font-bold">98%</strong>
                <span className="md:text-lg font-semibold">
                  Processus métier plus rapide
                </span>
              </div>
            </div>

            <div className="flex gap-x-4 items-center md:items-start">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.75 24.167H4.833a2.417 2.417 0 0 1-2.416-2.417V4.833a2.417 2.417 0 0 1 2.416-2.416H21.75a2.417 2.417 0 0 1 2.417 2.416V21.75a2.417 2.417 0 0 1-2.417 2.417m0 31.417H4.833a2.417 2.417 0 0 1-2.416-2.417V36.25a2.417 2.417 0 0 1 2.416-2.416H21.75a2.417 2.417 0 0 1 2.417 2.416v16.917a2.417 2.417 0 0 1-2.417 2.416" fill="#034877"/><path d="M31.417 4.834h24.166v4.833H31.417zM55.583 36.25H31.417v4.833h24.166z" fill="#C59B2D"/><path d="M55.583 48.334H31.417v4.833h24.166zm0-31.417H31.417v4.833h24.166z" fill="#A9A9A9"/></svg>
              <div className="flex flex-col gap-y-1 text-black-pearl-950">
                <strong className="text-5xl font-bold">40%</strong>
                <span className="md:text-lg font-semibold">
                  Réduction de tâches répétitives
                </span>
              </div>
            </div>

          </div>
        </div>
      </Section>

      <div className="overflow-hidden">

        <Section className="relative z-10">
          <div className="max-w-7xl mx-auto space-y-12">
            <SectionHeader>
              Vos Questions
            </SectionHeader>
            <ul className="px-4 md:px-8 md:py-4 flex flex-col gap-y-3 bg-anzac-100 rounded-4xl divide-white divide-y">
              <AccordionItem title="Qu'est-ce qu'un diagnostic de maturité de données ?">
                <div>
                  <p>Un Diagnostic de maturité de données est une évaluation structurée qui mesure le niveau d&apos;organisation, de qualité et de gouvernance des données dans votre entreprise.</p>
                  <p>Il vous permet de <strong>faire le point sur vos pratiques actuelles</strong>, d&apos;<strong>identifier les failles critiques</strong> (qualité, conformité…) et de <strong>prioriser les actions à mettre en place</strong> pour mieux exploiter vos données au service de vos objectifs.</p>
                  <p>Notre diagnostic est établi par expert <strong>certifié en gestion de données CDMP par l&apos;organisation DAMA</strong>.</p>
                </div>
              </AccordionItem>

              <AccordionItem title="Comment se déroule l&apos;accompagnement ?">
                <ol className="list-decimal list-inside">
                  <li><strong>Diagnostic initial automatisé (en ligne) :</strong> Cartographier votre situation.</li>
                  <li><strong>Analyse des résultats :</strong> Remise d&apos;un rapport personnalisé avec un niveau de maturité, des risques, et des leviers d&apos;optimisation.</li>
                  <li><strong>Plan de progression :</strong> Construction d&apos;une roadmap priorisée et réaliste (court, moyen, long terme).</li>
                  <li><strong>Suivi continu :</strong> Accès à la plateforme avec modules activables selon vos objectifs (qualité, traçabilité, automatisation).</li>
                  <li><strong>Coaching ou support ponctuel :</strong> Selon l&apos;abonnement ou les besoins (data steward virtuel, formations, ateliers).</li>
                </ol>
              </AccordionItem>

              <AccordionItem title="Combien de temps faut-il pour déployer votre solution ?">
                <p>
                  Notre approche modulaire permet un <strong>déploiement initial en 2 à 4 semaines</strong>, avec une montée en puissance progressive selon vos priorités.
                </p>
              </AccordionItem>

              <AccordionItem title="Votre solution s'intègre-t-elle avec nos outils existants ?">
                <p>
                  Absolument. Nous disposons de connecteurs standards pour <strong>plus de 200 solutions data</strong> (Snowflake, Databricks, AWS, Azure, etc.) et pouvons <strong>développer des intégrations spécifiques selon vos besoins</strong>.
                </p>
              </AccordionItem>

            </ul>
          </div>
        </Section>

        <Section className="relative">
        <svg className="absolute -left-16 -top-1/2 z-0" width="530" height="814" viewBox="0 0 530 814" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M392 400C222 563.5 317 644 80 712s-312-139.687-312-312S-92.313 88 80 88s482 148.5 312 312" fill="#545454" fillOpacity=".15"/><path d="M80 44c95.337 0 225.069 40.008 310.557 103.331 42.655 31.596 80.651 73.717 91.688 125.824 11.806 55.734-9.566 110.298-59.744 158.558-78.736 75.725-93.044 127.442-122.869 181.389-15.601 28.217-35.11 55.481-68.949 80.055-32.838 23.846-76.738 43.402-138.548 61.137-65.562 18.811-123.672 19.583-173.983 3.876-50.527-15.775-89.456-47.017-118.317-85.773C-256.603 596.609-276 490.589-276 400c0-196.613 159.387-356 356-356Z" stroke="#545454" strokeOpacity=".1" strokeWidth="88"/></svg>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-y-6">
              <div className="space-y-6">
                <SectionHeader className="text-start">
                  Envie de transformer vos données en levier de performance ?
                </SectionHeader>
                <p className="text-lg text-silver-chalice-900">
                  Rejoignez notre cercle de clients pilotes et coconstruisons l&apos;avenir de la gouvernance.
                </p>
              </div>
            </div>
            <div>
              <Card className="space-y-6 scroll-m-12" id="contactez-nous">
                <h3 className="text-astronaut-blue-950 text-xl font-bold">
                  Contactez-nous
                </h3>
                
                <ContactForm />
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </main>
    </>
  )
}

export default App

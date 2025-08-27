/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const trackLead = (label: string) => {
    if (window.gtag) {
        window.gtag('event', 'generate_lead', {
            'send_to': 'G-GD2TPPZWNH',
            'event_label': label,
        });
    }
};

const WHATSAPP_LINK = "https://wa.me/5511943849988?text=Tenho%20d%C3%BAvidas%20sobre%20Aux%C3%ADlio-Acidente";

// 👉 Função de máscara para o campo WhatsApp
const maskPhone = (v: string) =>
  v
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
    .slice(0, 15);

const WhatsAppIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: size, height: size }}>
        <path d="M20.52 3.48A11.85 11.85 0 0 0 12.01 0 11.89 11.89 0 0 0 2.5 18.5L0 24l5.69-2.48A11.9 11.9 0 0 0 12 24h.01A11.98 11.98 0 0 0 24 12c0-3.19-1.24-6.19-3.48-8.52ZM12 21.75h-.01c-1.86 0-3.67-.5-5.27-1.45l-.38-.22-3.37 1.47 1.44-3.28-.25-.4A9.75 9.75 0 1 1 21.75 12 9.77 9.77 0 0 1 12 21.75Zm5.63-7.35c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.21.33-.81 1-.99 1.2-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.4-.03-.56-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.52h-.6c-.2 0-.52.08-.79.4-.27.33-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.16.21 2.08 3.17 5.02 4.45.7.3 1.25.47 1.68.6.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.49.26-.74.26-1.38.18-1.49-.08-.11-.28-.18-.59-.34Z" />
    </svg>
);
const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

const Header = () => (
  <header className="hero" role="banner">
    <div className="halo" aria-hidden="true"></div>
    <div className="container hero-wrap">
      <div>
        <span className="eyebrow">⚖️ Benefício Previdenciário</span>
        <h1>Sofreu Acidente ou Doença de Trabalho? <span>Você pode ter direito ao Auxílio-Acidente.</span></h1>
        <p className="lead">Requeira uma indenização mensal paga pelo INSS até sua aposentadoria, mesmo que você continue trabalhando.</p>
        <p className="lead">Analisamos seu caso gratuitamente.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackLead('whatsapp_cta_hero')}>
            <WhatsAppIcon />
            Quero verificar meu direito
          </a>
          <a className="btn btn-outline" href="#como-funciona">Entenda como funciona</a>
        </div>
      </div>
      <div className="hero-card" aria-label="Resumo do atendimento">
        <div className="label">Nosso Compromisso</div>
        <div className="row">✅ Análise 100% gratuita e online</div>
        <div className="row">👩‍⚖️ Advogados especialistas em INSS</div>
        <div className="row">🕒 Atendimento rápido e dedicado</div>
      </div>
    </div>
  </header>
);

// ... (demais componentes continuam iguais)

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!consent) {
      alert('Por favor, confirme que você leu e concorda com os termos de privacidade.');
      return;
    }
    
    setStatus('submitting');
    
    try {
        const response = await fetch('https://formspree.io/f/mzzazerw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, message, _subject: 'Novo Contato - Auxílio-Acidente' }),
        });

        if (response.ok) {
            trackLead('form_submit');
            setStatus('success');
            setName('');
            setPhone('');
            setMessage('');
            setConsent(false);
        } else {
            setStatus('error');
        }
    } catch (error) {
        console.error("Form submission error:", error);
        setStatus('error');
    }
  };

  return (
    <section id="contato" className="form-section" aria-labelledby="form-h2">
      <div className="container" style={{maxWidth: '700px'}}>
        <h2 id="form-h2">Análise Preliminar Gratuita</h2>
        <p className="lead" style={{textAlign: 'center', marginBottom: '32px'}}>Prefere ser contatado? Preencha o formulário abaixo que um de nossos especialistas retornará o mais breve possível.</p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" disabled={status === 'submitting'} />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp (com DDD)</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              autoComplete="tel"
              disabled={status === 'submitting'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Descreva brevemente o seu caso (opcional)</label>
            <textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} disabled={status === 'submitting'}></textarea>
          </div>
          <div className="form-consent">
            <input type="checkbox" id="lgpd" name="lgpd" required checked={consent} onChange={(e) => setConsent(e.target.checked)} disabled={status === 'submitting'} />
            <label htmlFor="lgpd">Li e concordo que meus dados serão usados para fins de contato, conforme a Lei Geral de Proteção de Dados (LGPD).</label>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Enviando...' : 'Enviar para análise'}
          </button>
          {status === 'success' && <p className="form-status success">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
          {status === 'error' && <p className="form-status error">Ocorreu um erro ao enviar. Por favor, tente novamente ou nos chame no WhatsApp.</p>}
        </form>
      </div>
    </section>
  );
};

// ... (FAQ, About, Footer, FloatingWhatsAppButton continuam iguais)

function App() {
  return (
    <>
      <Header />
      <main>
        <TrustBelt />
        <WhatIsIt />
        <WhoQualifies />
        <HowItWorks />
        <ContactForm />
        <FAQ />
        <About />
      </main>
      <PageFooter />
      <FloatingWhatsAppButton />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

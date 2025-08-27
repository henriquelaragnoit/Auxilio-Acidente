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

const TrustBelt = () => (
  <div className="belt" role="region" aria-label="Pontos de confiança">
    <div className="container belt-list">
      <div className="belt-item"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Análise gratuita do seu direito</div>
      <div className="belt-item"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 1v22M1 12h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> Atuação no INSS e na Justiça</div>
      <div className="belt-item"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm6 0 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Honorários Acessíveis</div>
    </div>
  </div>
);

const WhatIsIt = () => (
  <section aria-labelledby="o-que-e">
    <div className="container">
      <h2 id="o-que-e">O que é o Auxílio-Acidente?</h2>
      <p className="lead">É um benefício do INSS pago ao trabalhador que sofre um acidente (de trabalho ou não) e fica com sequelas permanentes que diminuem sua capacidade para o trabalho. Funciona como uma <strong>indenização mensal</strong> que você recebe <strong>até se aposentar</strong>, e pode ser acumulada com o seu salário se continuar trabalhando.</p>
    </div>
  </section>
);

const WhoQualifies = () => (
  <section className="section-dark" aria-labelledby="quem-tem-direito">
    <div className="container">
      <h2 id="quem-tem-direito">Quem pode ter direito ao benefício?</h2>
      <div className="grid grid-2">
        <div className="card">
          <h3>Requisitos Principais:</h3>
          <div className="check-item"><CheckIcon /> Ser segurado do INSS (ex: trabalhador com carteira assinada).</div>
          <div className="check-item"><CheckIcon /> Ter sofrido um acidente de qualquer natureza ou doença ocupacional.</div>
          <div className="check-item"><CheckIcon /> Ficar com sequelas que reduzem permanentemente a capacidade de trabalho.</div>
        </div>
        <div className="card">
          <h3>Exemplos Comuns de Sequelas:</h3>
          <p>Qualquer limitação, por menor que seja, pode dar direito ao benefício.</p>
          <ul>
            <li>Lesões na coluna com limitação de esforço.</li>
            <li>Redução de força ou movimento em braços, mãos ou pernas.</li>
            <li>Limitações e dores crônicas após fraturas ou cirurgias.</li>
            <li>Perda parcial da audição ou visão.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="como-funciona" aria-labelledby="como-funciona-h2">
    <div className="container">
      <h2 id="como-funciona-h2">Nosso processo é simples e transparente</h2>
      <div className="grid grid-3">
        <div className="card">
          <h3>1. Análise Gratuita</h3>
          <p>Você nos conta seu caso pelo WhatsApp. Analisamos seus documentos e avaliamos a viabilidade do seu direito, sem nenhum custo inicial.</p>
        </div>
        <div className="card">
          <h3>2. Processo e Acompanhamento</h3>
          <p>Cuidamos de toda a burocracia, seja no pedido administrativo ao INSS ou, se necessário, na ação judicial, mantendo você sempre informado.</p>
        </div>
        <div className="card">
          <h3>3. Transparência nos Honorários</h3>
          <p>Cobramos apenas uma taxa inicial para iniciar o processo. O restante dos honorários só é pago no final, se o benefício for concedido. Dessa forma, trabalhamos sempre alinhados ao seu interesse: conquistar o direito que você merece.</p>
        </div>
      </div>
    </div>
  </section>
);

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
        // Replace 'mvoeploe' with your actual Formspree form ID
        const response = await fetch('https://formspree.io/f/mvoeploe', {
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
            <input type="tel" id="whatsapp" name="whatsapp" required placeholder="(11) 99999-9999" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" disabled={status === 'submitting'} />
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

const About = () => (
    <section aria-labelledby="quem-somos">
        <div className="container about-section">
            <span className="tag">Quem Somos</span>
            <h2 id="quem-somos">Laragnoit Advogados</h2>
            <p>Com mais de 8 anos de atuação, o escritório LARAGNOIT Advogados se consolidou como um escritório que alia experiência, visão estratégica e atualização constante para oferecer soluções jurídicas eficazes e personalizadas.</p>
            <p>O escritório se destaca pela dedicação em compreender as necessidades de cada cliente e conduzir seus casos com excelência técnica, ética e comprometimento.</p>
            <p>Nosso propósito é construir resultados sólidos, sempre pautados na confiança, inovação e proximidade no atendimento, atuando de forma abrangente para atender demandas jurídicas em diferentes áreas do Direito.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
                <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackLead('whatsapp_cta_about')}>Falar com especialista</a>
            </div>
        </div>
    </section>
);

const FAQ = () => (
  <section id="faq" className="section-dark" aria-labelledby="faq-h2">
    <div className="container" style={{maxWidth: '800px'}}>
      <h2 id="faq-h2" style={{textAlign: 'center'}}>Perguntas Frequentes</h2>
      <div className="faq-list">
        <details className="faq-item">
          <summary>Posso receber mesmo continuando a trabalhar?</summary>
          <div className="answer"><p>Sim! O Auxílio-Acidente é uma indenização, não um benefício por incapacidade.</p></div>
        </details>
        <details className="faq-item">
          <summary>Qual o valor e por quanto tempo recebo?</summary>
          <div className="answer"><p>O valor corresponde a 50% do seu salário de benefício e é pago mensalmente até a sua aposentadoria.</p></div>
        </details>
        <details className="faq-item">
          <summary>Preciso ter a CAT (Comunicação de Acidente de Trabalho)?</summary>
          <div className="answer"><p>Não necessariamente. O benefício é devido para acidentes de qualquer natureza, mesmo os que ocorrem fora do ambiente de trabalho. A CAT é importante, mas não é obrigatória.</p></div>
        </details>
        <details className="faq-item">
          <summary>Quanto tempo tenho para pedir o benefício?</summary>
          <div className="answer"><p>Embora não haja um prazo final (prescrição) para pedir a concessão do benefício, você só pode cobrar os valores retroativos dos últimos 5 anos. Por isso, não perca tempo e dinheiro, busque seu direito o quanto antes.</p></div>
        </details>
      </div>
      <div className="cta-center">
        <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackLead('whatsapp_cta_faq')}>Agendar minha análise gratuita</a>
      </div>
    </div>
  </section>
);

const PageFooter = () => (
    <footer role="contentinfo">
        <div className="container">
            <p><strong>Laragnoit Advogados © TODOS OS DIREITOS RESERVADOS</strong></p>
            <p className="muted" style={{ fontSize: '12px', marginTop: '16px' }}>
                Este site possui caráter informativo, sem promessa de resultado, em conformidade com o Provimento 205/2021 da OAB.
            </p>
            <p className="muted" style={{ fontSize: '12px', marginTop: '8px' }}>
                Esse site não faz parte do Google LLC nem do Facebook Inc. e não oferecemos nenhum tipo de serviço oficial do governo. Trabalhamos exclusivamente com serviços jurídicos.
            </p>
        </div>
    </footer>
);

const FloatingWhatsAppButton = () => (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="floating-whatsapp-btn" aria-label="Fale no WhatsApp" onClick={() => trackLead('whatsapp_cta_floating')}>
        <WhatsAppIcon size={32} />
    </a>
);


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

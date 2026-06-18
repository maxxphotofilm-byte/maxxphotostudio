// ═════════════════════════════════════════════════════════════════
// CONFIGURAÇÃO DO SITE - Edite os valores abaixo para customizar
// ═════════════════════════════════════════════════════════════════

const CONFIG = {
  // ─── INFORMAÇÕES BÁSICAS ─────────────────────────────────────
  site: {
    title: 'Maxx Photo Studio — Fotografia de Retrato e Família em São Paulo',
    brandName: 'Maxx',
    tagline: 'Momentos que ficam para sempre',
    location: 'São Paulo, SP',
    year: new Date().getFullYear()
  },

  // ─── CORES (CSS Variables) ───────────────────────────────────
  colors: {
    white: '#FFFFFF',
    off: '#F8F7F5',
    stone: '#E8E4DE',
    mid: '#B0A89E',
    ink: '#1C1917',
    accent: '#8A7260'
  },

  // ─── CONTATO ─────────────────────────────────────────────────
  contact: {
    whatsapp: '5511900000000',        // Apenas números (55 + DDD + número)
    whatsappDisplay: '(11) 9 0000-0000',
    email: 'contato@maxxphotostudio.com.br',
    instagram: '@maxxphotostudio',
    location: 'São Paulo e Grande SP'
  },

  // ─── HERO SECTION ────────────────────────────────────────────
  hero: {
    eyebrow: 'São Paulo · Fotografia de Retrato e Família',
    title: 'Momentos que<br><em>ficam para</em><br>sempre.',
    subtitle: 'Cada família carrega histórias únicas. Eu registro essas histórias com luz natural, emoção genuína e um olhar atento ao detalhe.'
  },

  // ─── ESTATÍSTICAS ────────────────────────────────────────────
  stats: [
    { value: '+500', label: 'Famílias fotografadas' },
    { value: '8+', label: 'Anos de experiência' },
    { value: '98%', label: 'Clientes satisfeitos' },
    { value: 'SP', label: 'São Paulo e região' }
  ],

  // ─── SEÇÃO SOBRE ─────────────────────────────────────────────
  about: {
    title: 'Fotógrafo com<br><em>alma de contador</em><br>de histórias',
    p1: 'Sou fotógrafo especializado em retratos e fotografia de família em São Paulo. Acredito que as melhores fotos não são as mais produzidas, mas as que capturam a essência de quem você realmente é.',
    p2: 'Com mais de 8 anos de experiência, desenvolvi um método que coloca as pessoas à vontade, criando um ambiente leve e natural para que as emoções reais apareçam em cada clique.',
    signature: 'Maxx'
  },

  // ─── SERVIÇOS ────────────────────────────────────────────────
  services: [
    {
      tag: 'Essencial',
      name: 'Retrato Individual',
      description: 'Perfeito para perfis profissionais, redes sociais ou um presente especial.',
      price: '590',
      priceUnit: 'por sessão',
      includes: [
        '1h de sessão fotográfica',
        '1 locação de sua escolha',
        '20 fotos editadas em alta resolução',
        'Entrega em até 10 dias úteis'
      ]
    },
    {
      tag: 'Mais Escolhido',
      name: 'Ensaio de Família',
      description: 'Para famílias de até 5 pessoas. Registro natural de momentos que importam.',
      price: '990',
      priceUnit: 'por sessão',
      includes: [
        '2h de sessão fotográfica',
        'Até 5 pessoas',
        '40 fotos editadas em alta resolução',
        'Galeria online privada',
        'Entrega em até 15 dias úteis'
      ]
    },
    {
      tag: 'Completo',
      name: 'Ensaio Gestante',
      description: 'Celebre esse momento mágico com imagens que você vai guardar para sempre.',
      price: '890',
      priceUnit: 'por sessão',
      includes: [
        '2h de sessão fotográfica',
        'Acompanhante incluso',
        '35 fotos editadas em alta resolução',
        'Opção externa ou estúdio',
        'Entrega em até 12 dias úteis'
      ]
    }
  ],

  // ─── DEPOIMENTOS ─────────────────────────────────────────────
  testimonials: [
    {
      text: 'O Maxx conseguiu capturar exatamente o jeito dos nossos filhos. As fotos ficaram incríveis e o ambiente foi super leve. Com certeza voltaremos!',
      author: 'Família Oliveira',
      service: 'Ensaio de Família',
      location: 'Parque Ibirapuera'
    },
    {
      text: 'Estava com vergonha de tirar fotos sozinha, mas ele me deixou totalmente à vontade. O resultado superou todas as minhas expectativas!',
      author: 'Ana Carolina M.',
      service: 'Retrato Individual',
      location: 'Vila Madalena'
    },
    {
      text: 'As fotos da minha gestação ficaram lindíssimas. Cada detalhe foi pensado com muito cuidado e carinho. Recomendo de olhos fechados!',
      author: 'Juliana & Rafael',
      service: 'Ensaio Gestante',
      location: 'Jardins'
    }
  ]
};

// ═════════════════════════════════════════════════════════════════
// RENDERIZAÇÃO DINÂMICA (NÃO EDITE DAQUI PARA BAIXO)
// ═════════════════════════════════════════════════════════════════

// Atualizar título da página
document.title = CONFIG.site.title;
document.getElementById('pageTitle').textContent = CONFIG.site.title;

// SERVIÇOS
const servicesGrid = document.getElementById('servicesGrid');
if (servicesGrid) {
  CONFIG.services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.innerHTML = `
      <span class="service-tag">${service.tag}</span>
      <h3 class="service-name">${service.name}</h3>
      <p class="service-desc">${service.description}</p>
      <div class="service-price"><sup>R$</sup>${service.price} <small>${service.priceUnit}</small></div>
      <ul class="service-includes">
        ${service.includes.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <a href="#contato" class="service-cta">Agendar →</a>
    `;
    servicesGrid.appendChild(card);
  });
}

// DEPOIMENTOS
const testimonialsGrid = document.getElementById('testimonialsGrid');
if (testimonialsGrid) {
  CONFIG.testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial reveal';
    card.innerHTML = `
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${testimonial.text}</p>
      <div class="testimonial-author">
        <strong>${testimonial.author}</strong>
        ${testimonial.service} · ${testimonial.location}
      </div>
    `;
    testimonialsGrid.appendChild(card);
  });
}

// CONTATO
const contactDetails = document.getElementById('contactDetails');
if (contactDetails) {
  const details = [
    { label: 'WhatsApp', value: CONFIG.contact.whatsappDisplay },
    { label: 'E-mail', value: CONFIG.contact.email },
    { label: 'Cidade', value: CONFIG.contact.location },
    { label: 'Instagram', value: CONFIG.contact.instagram }
  ];
  
  contactDetails.innerHTML = details.map(detail => `
    <div class="contact-detail">
      <span class="cd-label">${detail.label}</span>
      <span class="cd-value">${detail.value}</span>
    </div>
  `).join('');
}

// WHATSAPP LINK
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
  whatsappBtn.href = `https://wa.me/${CONFIG.contact.whatsapp}?text=Olá! Gostaria de agendar um ensaio com o ${CONFIG.site.brandName} Photo Studio.`;
  whatsappBtn.textContent = 'Chamar no WhatsApp';
}

// SELECT DE SERVIÇOS NO FORM
const serviceSelect = document.getElementById('servico');
if (serviceSelect) {
  CONFIG.services.forEach(service => {
    const option = document.createElement('option');
    option.value = service.name;
    option.textContent = service.name;
    serviceSelect.appendChild(option);
  });
}

// FOOTER
const footerCopy = document.getElementById('footerCopy');
if (footerCopy) {
  footerCopy.textContent = `© ${CONFIG.site.year} ${CONFIG.site.brandName} Photo Studio · ${CONFIG.site.location} · Todos os direitos reservados`;
}
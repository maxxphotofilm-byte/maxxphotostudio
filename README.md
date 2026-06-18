# Maxx Photo Studio - Website

Website profissional para Maxx Photo Studio - Fotografia de Retrato e Família em São Paulo.

## 📁 Estrutura do Projeto

```
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript (funcionalidades)
├── config.js       # CONFIGURAÇÃO DO SITE (EDITE AQUI!)
└── README.md       # Este arquivo
```

## 🎨 Como Customizar

### 1. **Informações Básicas**
Edite `config.js` - Seção `site`:
```javascript
site: {
  title: 'Seu Título',
  brandName: 'Seu Nome',
  tagline: 'Seu Slogan',
  location: 'Sua Cidade',
  year: new Date().getFullYear()
}
```

### 2. **Contato (WhatsApp e Email)**
Edite em `config.js` - Seção `contact`:
```javascript
contact: {
  whatsapp: '5511900000000',        // Número com código do país (55)
  whatsappDisplay: '(11) 9 0000-0000', // Formato exibido
  email: 'seu@email.com',
  instagram: '@seuinsta',
  location: 'Sua Cidade'
}
```

### 3. **Serviços e Preços**
Edite `config.js` - Array `services`:
```javascript
services: [
  {
    tag: 'Tag do Serviço',
    name: 'Nome do Serviço',
    description: 'Descrição curta',
    price: '590',
    priceUnit: 'por sessão',
    includes: [
      'Item 1',
      'Item 2',
      'Item 3'
    ]
  }
]
```

### 4. **Depoimentos**
Edite `config.js` - Array `testimonials`:
```javascript
testimonials: [
  {
    text: 'Texto do depoimento...',
    author: 'Nome do Cliente',
    service: 'Tipo de Serviço',
    location: 'Localização'
  }
]
```

### 5. **Cores**
Para mudar as cores do site, edite `config.js` - Seção `colors`:
```javascript
colors: {
  white: '#FFFFFF',
  off: '#F8F7F5',
  stone: '#E8E4DE',
  mid: '#B0A89E',
  ink: '#1C1917',
  accent: '#8A7260'  // Cor de destaque
}
```

## 🚀 Deployment no GitHub Pages

1. Vá para **Settings** do seu repositório
2. Procure por **Pages** na barra lateral
3. Em **Source**, selecione **main** (ou sua branch principal)
4. Clique em **Save**
5. Seu site estará disponível em: `https://seu-usuario.github.io/maxxphotostudio/`

## 🌐 Apontar Domínio Próprio

Se você tem um domínio personalizado (maxxphotostudio.com.br):

1. No **DNS** do seu registrador, crie um registro **CNAME**:
   - Nome: `www`
   - Valor: `seu-usuario.github.io`

2. Ou use **A Records** (mais moderno):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

3. Volte ao GitHub Pages e adicione seu domínio em **Custom domain**

## 📸 Adicionar Fotos

Para adicionar suas fotos reais, substitua os placeholders:

1. No **hero** (mosaic-cell): Adicione tags `<img>` dentro das células
2. Na **portfolio**: Substitua os divs `ph ph-1`, `ph ph-2`, etc. por `<img>`
3. Na **seção Sobre**: Substitua `ph-about` por `<img>`

Exemplo:
```html
<div class="mosaic-cell">
  <img src="/images/foto1.jpg" alt="Descrição" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## 🔧 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo com Flexbox/Grid
- **JavaScript Vanilla** - Sem dependências
- **Google Fonts** - Tipografia (Cormorant Garamond + DM Sans)

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 📝 Licença

Criado para Maxx Photo Studio © 2024

---

**Dúvidas ou sugestões?** Entre em contato! 📧

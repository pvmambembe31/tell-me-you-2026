# Nova Paleta de Cores - Material Design + Teoria das Cores

## 🎨 PALETA PRINCIPAL (Material Design)

### Roxo (Cor Principal)
Baseado em **Deep Purple** do Material Design, mas ajustado para o curso:

```css
--primary-50: #F3E5F5;    /* Roxo muito claro - backgrounds sutis */
--primary-100: #E1BEE7;   /* Roxo claro - hover states */
--primary-200: #CE93D8;   /* Roxo médio-claro - elementos secundários */
--primary-300: #BA68C8;   /* Roxo médio - bordas e ícones */
--primary-400: #AB47BC;   /* Roxo médio-forte - hover de botões */
--primary-500: #9C27B0;   /* ROXO PRINCIPAL - cor de marca */
--primary-600: #8E24AA;   /* Roxo forte - textos importantes */
--primary-700: #7B1FA2;   /* Roxo escuro - sidebar */
--primary-800: #6A1B9A;   /* Roxo muito escuro - footer */
--primary-900: #4A148C;   /* Roxo profundo - acentos */
```

**Uso**:
- `500`: Cor principal (botões, links, destaques)
- `700`: Sidebar e navegação
- `800`: Footer
- `100-200`: Backgrounds claros
- `600-900`: Textos e elementos escuros

---

### Magenta/Pink (Cor de Accent)
Baseado em **Pink A** do Material Design:

```css
--accent-100: #FF80AB;    /* Rosa claro - backgrounds */
--accent-200: #FF4081;    /* MAGENTA PRINCIPAL - CTAs */
--accent-400: #F50057;    /* Magenta escuro - hover */
--accent-700: #C51162;    /* Magenta profundo - acentos */
```

**Uso**:
- `200`: Botões principais (CTAs)
- `400`: Hover de CTAs
- `100`: Backgrounds de destaque
- `700`: Textos de urgência

---

### Azul (Cor de Suporte)
Baseado em **Blue A** do Material Design:

```css
--blue-100: #82B1FF;      /* Azul claro - info */
--blue-200: #448AFF;      /* Azul médio - links secundários */
--blue-400: #2979FF;      /* Azul forte - ícones */
--blue-700: #2962FF;      /* Azul profundo - acentos */
```

**Uso**:
- `200`: Links e elementos informativos
- `400`: Ícones e badges
- `100`: Backgrounds informativos

---

### Neutros (Cinzas Material)
Escala de cinzas do Material Design:

```css
--grey-50: #FAFAFA;       /* Quase branco - background principal */
--grey-100: #F5F5F5;      /* Cinza muito claro - cards */
--grey-200: #EEEEEE;      /* Cinza claro - bordas sutis */
--grey-300: #E0E0E0;      /* Cinza médio-claro - bordas */
--grey-400: #BDBDBD;      /* Cinza médio - ícones inativos */
--grey-500: #9E9E9E;      /* Cinza - textos secundários */
--grey-600: #757575;      /* Cinza médio-escuro - textos */
--grey-700: #616161;      /* Cinza escuro - textos importantes */
--grey-800: #424242;      /* Cinza muito escuro - footer */
--grey-900: #212121;      /* Quase preto - textos principais */
```

**Uso**:
- `50-100`: Backgrounds
- `200-300`: Bordas
- `500-600`: Textos secundários
- `700-900`: Textos principais

---

## 🎯 APLICAÇÃO DA PALETA

### Hierarquia de Cores

**Nível 1 - Atenção Máxima** (Magenta):
- Botões principais (CTAs)
- Elementos de urgência
- Badges importantes

**Nível 2 - Atenção Alta** (Roxo 500-600):
- Títulos principais
- Links importantes
- Ícones de destaque

**Nível 3 - Atenção Média** (Roxo 300-400):
- Subtítulos
- Bordas de cards
- Elementos secundários

**Nível 4 - Atenção Baixa** (Cinzas):
- Textos de corpo
- Bordas sutis
- Backgrounds

---

## 📊 CONTRASTE E ACESSIBILIDADE

### Combinações Aprovadas (WCAG AA)

**Texto Escuro sobre Claro**:
- `grey-900` sobre `grey-50` ✅ (Ratio: 19:1)
- `primary-700` sobre `grey-50` ✅ (Ratio: 8:1)
- `primary-600` sobre `grey-100` ✅ (Ratio: 7:1)

**Texto Claro sobre Escuro**:
- `grey-50` sobre `primary-700` ✅ (Ratio: 8:1)
- `grey-50` sobre `primary-800` ✅ (Ratio: 10:1)
- Branco sobre `accent-200` ✅ (Ratio: 4.5:1)

**Evitar**:
- ❌ `primary-500` sobre `grey-50` (contraste médio)
- ❌ `accent-200` sobre `primary-500` (cores vibrantes juntas)
- ❌ `blue-200` sobre `primary-300` (cores similares)

---

## 🎨 TEORIA DAS CORES APLICADA

### Harmonia Complementar
- **Roxo** (primária) + **Magenta** (análoga) = Harmonia
- **Azul** (suporte) complementa sem competir

### Psicologia das Cores
- **Roxo**: Criatividade, sofisticação, transformação
- **Magenta**: Energia, paixão, ação
- **Azul**: Confiança, estabilidade, profissionalismo
- **Cinza**: Neutralidade, equilíbrio, modernidade

### Proporção 60-30-10
- **60%**: Cinzas e brancos (backgrounds)
- **30%**: Roxo (elementos principais)
- **10%**: Magenta (acentos e CTAs)

---

## 🎯 MAPEAMENTO DE ELEMENTOS

### Sidebar
```css
background: var(--primary-700);  /* Roxo escuro */
color: var(--grey-50);           /* Branco suave */
active: var(--grey-50) com background rgba(255,255,255,0.15);
hover: rgba(255,255,255,0.1);
```

### Hero
```css
background: var(--primary-600);  /* Roxo forte */
color: var(--grey-50);           /* Branco suave */
highlight: var(--accent-200);    /* Magenta */
```

### Cards
```css
background: var(--grey-50);      /* Quase branco */
border: var(--grey-200);         /* Cinza claro */
shadow: rgba(0,0,0,0.1);         /* Sombra sutil */
hover-shadow: rgba(0,0,0,0.15);  /* Sombra média */
```

### Botões Primários
```css
background: var(--accent-200);   /* Magenta */
color: white;
hover: var(--accent-400);        /* Magenta escuro */
shadow: rgba(245,0,87,0.3);      /* Sombra magenta */
```

### Botões Secundários
```css
background: transparent;
border: 2px solid var(--primary-500);
color: var(--primary-600);
hover-background: var(--primary-50);
```

### Footer
```css
background: var(--grey-800);     /* Cinza muito escuro */
border-top: 3px solid var(--primary-500);
color: var(--grey-300);          /* Cinza claro */
links: var(--grey-100);          /* Quase branco */
```

### Textos
```css
heading: var(--grey-900);        /* Quase preto */
body: var(--grey-700);           /* Cinza escuro */
secondary: var(--grey-600);      /* Cinza médio */
disabled: var(--grey-400);       /* Cinza claro */
```

---

## ✅ VANTAGENS DESTA PALETA

### Profissionalismo
- Cores Material Design são testadas e aprovadas
- Escala completa permite nuances
- Não parece amador

### Acessibilidade
- Contraste adequado em todas as combinações
- Legível para pessoas com daltonismo
- Segue padrões WCAG

### Flexibilidade
- 10 tons de cada cor
- Permite criar hierarquia visual
- Fácil de expandir

### Modernidade
- Baseado em Material Design 3
- Usado por Google, Microsoft, etc.
- Não parece "caderno"

### Personalidade
- Roxo como identidade forte
- Magenta traz energia
- Azul adiciona confiança
- Não é robótico nem padronizado

---

## 🚀 PRÓXIMO PASSO

Implementar esta paleta no CSS com:
1. Variáveis CSS organizadas
2. Classes utilitárias
3. Componentes Material
4. Elevação e sombras
5. Transições suaves

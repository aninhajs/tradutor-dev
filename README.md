# 🌍 Tradutor-dev

Um tradutor web moderno e responsivo com interface intuitiva e ícones SVG personalizados.

## 📋 Sobre o Projeto

Este é um tradutor web que permite aos usuários:

- Traduzir texto entre diferentes idiomas
- Utilizar entrada de voz (microfone)
- Interface responsiva e moderna
- Ícones SVG escaláveis e customizáveis

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Flexbox
- **SVG**: Ícones vetoriais escaláveis
- **JavaScript**: Funcionalidade de tradução (em desenvolvimento)

## 🐛 Problema Identificado e Solução

### ❌ Problema

Durante o desenvolvimento, foi identificado um problema crítico de layout:

**Sintoma**: Quando o usuário redimensionava o textarea (aumentando sua altura), o conteúdo da aplicação transbordava para fora do container principal.

**Causa Raiz**:

- Container com altura fixa (`height: 400px`)
- Textarea sem limite de redimensionamento
- Ausência de controle de overflow
- Layout não responsivo às mudanças dinâmicas de tamanho

### ✅ Solução Implementada

Foi aplicada uma solução baseada em **Flexbox** e **controle de dimensões**:

#### 🔧 Mudanças no Container Principal

```css
.container {
  width: 450px;
  min-height: 400px; /* ← Altura mínima em vez de fixa */
  max-height: 80vh; /* ← Limite máximo baseado na viewport */
  display: flex; /* ← Layout flexível */
  flex-direction: column; /* ← Direção vertical */
  overflow: hidden; /* ← Previne transbordamento */
  /* ... outros estilos ... */
}
```

#### 🔧 Controle do Textarea

```css
.caixa-texto {
  min-height: 80px; /* ← Altura mínima */
  max-height: 200px; /* ← Limite máximo de crescimento */
  resize: vertical; /* ← Apenas redimensionamento vertical */
  overflow-y: auto; /* ← Scroll interno quando necessário */
  /* ... outros estilos ... */
}
```

#### 🔧 Área de Resultado Responsiva

```css
.resultado {
  flex: 1; /* ← Ocupa espaço restante disponível */
  overflow-y: auto; /* ← Scroll quando necessário */
  background-color: #ffffff0d;
  border-radius: 10px;
  padding: 15px;
}
```

### 🎯 Resultados

- ✅ Textarea redimensionável com limites seguros
- ✅ Todo conteúdo permanece dentro do container
- ✅ Layout responsivo e adaptável
- ✅ Melhor experiência do usuário
- ✅ Compatibilidade com diferentes tamanhos de tela

## 🎨 Características Visuais

### Ícones SVG Personalizados

- **Ícone de Tradução**: Representa transformação de texto entre idiomas
- **Ícone de Microfone**: Interface para entrada de voz
- **Vantagens dos SVG**:
  - Escalabilidade infinita
  - Customização via CSS
  - Performance otimizada
  - Acessibilidade integrada

### Design Responsivo

- Background com mapa-múndi
- Interface dark com transparências
- Bordas arredondadas e sombras suaves
- Layout flexível que se adapta ao conteúdo

## 📁 Estrutura do Projeto

```
Tradutor-dev/
├── index.html          # Estrutura principal da aplicação
├── style.css           # Estilos e layout responsivo
├── img/               # Pasta para recursos de imagem (opcional)
└── README.md          # Documentação do projeto
```

## 🔧 Como Usar

1. **Clone ou baixe o projeto**
2. **Abra o `index.html` em seu navegador**
3. **Digite o texto** que deseja traduzir no textarea
4. **Selecione os idiomas** no menu dropdown
5. **Clique em "Traduzir"** ou use o **ícone do microfone** para entrada de voz

## 🚀 Funcionalidades Futuras

- [ ] Integração com API de tradução
- [ ] Funcionalidade de reconhecimento de voz
- [ ] Histórico de traduções
- [ ] Suporte para mais idiomas
- [ ] Modo claro/escuro
- [ ] Detecção automática de idioma

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Melhorar a documentação

## 📱 Compatibilidade

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Dispositivos móveis
- ✅ Tablets e desktops

---

**Desenvolvido com 💻 e ☕**

_Problema de layout identificado e solucionado em 14 de janeiro de 2026_

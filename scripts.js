// Javascrip para conversar com o HTML chama-o de document, querySelector é um método que seleciona elementos do HTML
// padrão = https://api.mymemory.translated.net/get?q=
// O que eu quero traduzir = Hello World!
// Idioma = &langpair=pt-br|en
// Montando a URL completa = https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=pt-br|en
// fetch("URL COMPLETA") ferramenta javascrip para se comunicar com sevidores

let caixaTexto = document.querySelector(".caixa-texto");
let traducaoTexto = document.querySelector(".titulo-traducao");
let idioma = document.querySelector(".selecione-idioma");

async function traduzirTexto() {
  let endereco =
    " https://api.mymemory.translated.net/get?q=" +
    caixaTexto.value +
    "&langpair=pt-BR|" +
    idioma.value;
  // resposta do servidor
  let resposta = await fetch(endereco);

  //   covertendo a resposata para um formato mais amigavél (json)
  let dados = await resposta.json();

  traducao = dados.responseData.translatedText;

  traducaoTexto.textContent = traducao;
}

// Função para ouvir voz (agora global)
function ouvirVoz() {
  // Ferramenta de transcrição de voz
  let voz = window.webkitSpeechRecognition;

  //  Deixando pronta para uso (ouvir)
  let reconhecimento = new voz();

  // configunda a ferramenta para ouvir
  reconhecimento.lang = "pt-BR";

  // Avisando qunado terminar de trancrever a voz
  reconhecimento.onresult = (evento) => {
    let fala = evento.results[0][0].transcript;

    caixaTexto.value = fala;
    traduzirTexto();
  };

  // Iniciando a ferramenta
  reconhecimento.start();
}

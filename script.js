//############################ MATCH WORDS AND INTENTS ########################
const intents = {
  saudar: ["olá", "ola", "oi", "hello", "boa tarde", "boa noite"],
  pedir: ["pedir", "realizar um pedido", "realizar pedido"]
};
//############################################################################
var usuario = "gostaria de pedir uma pizza";
const arrayusuario = [];

var match = usuario.split(/\s+/);
var result = "";

match.forEach(element => {
  if (intents.saudar.indexOf(element) != -1) {
    console.log("achou em saudar");
  } else if (intents.pedir.indexOf(element) != -1) {
    console.log("achou em pedir");
  } else {
    console.log("não achou");
  }
});

console.log("######################################################");
//função para pausar o sistema em determinados segundos
//aqui estou chamando essa função e passando 10 segundos como tempo para a pausa
sleep(10);

async function sleep(seconds) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Sleep in loop
  for (let i = 1; i <= seconds; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

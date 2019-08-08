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

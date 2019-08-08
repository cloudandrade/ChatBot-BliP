//######################## PEDIDO DE PIZZA BOT ############################

let MessagingHub = require("messaginghub-client");
let WebSocketTransport = require("lime-transport-websocket");
let Lime = require("lime-js");

let client = new MessagingHub.ClientBuilder()
  .withIdentifier("nodesamplesdk6")
  .withAccessKey("SGtKNWFJQ3pFdGhqN2ZheHNablE=")
  .withTransportFactory(() => new WebSocketTransport())
  .build();

client
  .connect()
  .then(function() {
    console.log("Bot Connectado");

    const intents = {
      saudar: ["olá", "ola", "oi", "hello", "boa tarde", "boa noite"],
      pedir: ["pedir", "realizar um pedido", "realizar pedido"]
    };
    /*  const teste = intents["saudar"].indexOf("hello")
         console.log(console) */

    client.addMessageReceiver(
      function(message) {
        if (message.content == "oi") {
          return true;
        } else if (message.content == "olá") {
          return true;
        } else {
          return false;
        }
      },
      function(message) {
        //send a message to some user
        var msg = {
          type: "text/plain",
          content: "Olá, Bem Vindo, sou o CloudBot!",
          to: message.from,
          id: Lime.Guid()
        };
        client.sendMessage(msg);
      }
    );
  })
  .catch(function(err) {
    console.log(err);
  });

//#############################################################################################

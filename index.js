//################### PESQUISA DE SATISFAÇÃO #####################

let MessagingHub = require("messaginghub-client");
let WebSocketTransport = require("lime-transport-websocket");
let Lime = require("lime-js");

//######################
//--Saudações
//######################

const saudar = ["oi", "olá", "ola", "hello", "tudo bom", "iai", "eai"];

let client = new MessagingHub.ClientBuilder()
  .withIdentifier("nodesamplesdk6")
  .withAccessKey("SGtKNWFJQ3pFdGhqN2ZheHNablE=")
  .withTransportFactory(() => new WebSocketTransport())
  .build();

client.connect().then(function() {
  console.log("Bot Connectado - pesquisa satisfação");

  client.addMessageReceiver(
    function(message) {
      if (saudar.indexOf(message.content) != -1) {
        return true;
      } else {
        return false;
      }
    },
    function(message) {
      //send a message to some user
      var msg = {
        type: "text/plain",
        content:
          "Bem Vindo, gostaria de realizar a nossa pesquisa? responda com sim ou não",
        to: message.from,
        id: Lime.Guid()
      };
      client.sendMessage(msg);
      //######################## Primeira Chave da pesquisa
      client.addMessageReceiver(
        function(message) {
          switch (message.content) {
            case "sim":
              console.log("Usuário quer responder a pesquisa");
              return true;
              break;
            case "não":
              console.log("Usuário não quer responder a pesquisa");
              var msg = {
                type: "text/plain",
                content:
                  "Tudo Bem! nos encontramos numa próxima vez então! obrigado! até mais!",
                to: message.from,
                id: Lime.Guid()
              };
              client.sendMessage(msg);
              return false;
              break;
            default:
              return false;
              break;
          }
        },
        function(message) {
          //send a message to some user
          var msg = {
            type: "text/plain",
            content:
              "Okay, qual tipo de jogo você mais joga? responda com o número da sua opção:   " +
              "1-RPG, 2-FPS/TPS, 3-Estratégia, 4-Indie, 5-Esportes 6-Nenhum",
            to: message.from,
            id: Lime.Guid()
          };

          client.sendMessage(msg);
        }
      );
      //########################################1
    }
  );
  //### Connection
});

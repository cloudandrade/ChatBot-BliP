//################### PESQUISA DE SATISFAÇÃO #####################

let MessagingHub = require("messaginghub-client");
let WebSocketTransport = require("lime-transport-websocket");
let Lime = require("lime-js");

//######################
//--Saudações
//######################

const saudar = [
  "Oi",
  "Olá",
  "oi",
  "olá",
  "ola",
  "hello",
  "tudo bom",
  "iai",
  "eai"
];

let client = new MessagingHub.ClientBuilder()
  .withIdentifier("nodesamplesdk6")
  .withAccessKey("SGtKNWFJQ3pFdGhqN2ZheHNablE=")
  .withTransportFactory(() => new WebSocketTransport())
  .build();

client
  .connect()
  .then(async function() {
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
                return true;
                break;
              case "não":
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
                "Okay, qual tipo de jogo você mais joga? responda com o número da sua opção: " +
                "1-RPG, 2-FPS/TPS, 3-Estratégia, 4-Indie, 5-Esportes 6-Nenhum",
              to: message.from,
              id: Lime.Guid()
            };

            client.sendMessage(msg);

            client.addMessageReceiver(
              function(message) {
                if (message.content == 1) {
                  client.addMessageReceiver(true, async function(message) {
                    //send a message to some user
                    var msg = {
                      type: "text/plain",
                      content:
                        "Então você é um aventureiro! obrigado por participar de nossa pesquisa!",
                      to: message.from,
                      id: Lime.Guid()
                    };

                    client.sendMessage(msg);
                    message.content = "";
                    sleep(2);
                  });
                } else if (message.content == 2) {
                  client.addMessageReceiver(true, function(message) {
                    //send a message to some user
                    var msg = {
                      type: "text/plain",
                      content:
                        "Soldado! vê se não sai atirando em civis por aí! obrigado por participar de nossa pesquisa!",
                      to: message.from,
                      id: Lime.Guid()
                    };
                    client.sendMessage(msg);
                    sleep(2);
                  });
                } else if (message.content == 3) {
                  client.addMessageReceiver(true, function(message) {
                    //send a message to some user
                    var msg = {
                      type: "text/plain",
                      content:
                        "um intelectual e calculista! obrigado por participar de nossa pesquisa!",
                      to: message.from,
                      id: Lime.Guid()
                    };
                    client.sendMessage(msg);
                    sleep(2);
                  });
                } else if (message.content == 4) {
                  client.addMessageReceiver(true, function(message) {
                    //send a message to some user
                    var msg = {
                      type: "text/plain",
                      content:
                        "Haha um Indiano! se divirta sem compromisso! obrigado por participar de nossa pesquisa!",
                      to: message.from,
                      id: Lime.Guid()
                    };
                    client.sendMessage(msg);
                    sleep(2);
                  });
                } else if (message.content == 5) {
                  client.addMessageReceiver(true, function(message) {
                    //send a message to some user
                    var msg = {
                      type: "text/plain",
                      content:
                        "Se treinar vai ser o melhor jogador! obrigado por participar da nossa pesquisa!",
                      to: message.from,
                      id: Lime.Guid()
                    };
                    client.sendMessage(msg);
                    sleep(2);
                  });
                } else if (message.content == 6) {
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
                    "Bom! nem todos se encaixam nesse contexto! mas obrigado por participar da pesquisa",
                  to: message.from,
                  id: Lime.Guid()
                };
                client.sendMessage(msg);
                sleep(2);
              }
            );
          }
        );
        //########################################1
      }
    );

    //### Connection
  })
  .catch(function(err) {
    console.log(err);
  });

async function sleep(seconds) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Sleep in loop
  for (let i = 1; i <= seconds; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  process.exit(0);
}

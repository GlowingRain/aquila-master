const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');

// Dotenv
require('dotenv').config();

// Constants
const token = process.env.CLIENT_TOKEN;
const ownerID = process.env.OWNER_ID;
const prefix = process.env.PREFIX;

class AquilaMaster extends AkairoClient {
    constructor() {
        super({ ownerID: ownerID }, { disableEveryone: true });

        this.commandHandler = new CommandHandler(this, {
            // Main configuration
            directory: "./src/commands",
            prefix: prefix,
            automateCategories: true,

            // Prompts
            argumentDefaults: {
                prompt: {
                    modifyStart: str => `${str}\n\nEscribe \`cancelar\` para cancelar el comando.`,
                    modifyRetry: str => `${str}\n\nEscribe\`cancelar\` para cancelar el comando.`,
                    timeout: 'El tiempo se agotó. El comando ha sido cancelado.',
                    ended: 'Se han detectado muchos intentos. El comando ha sido cancelado.',
                    cancel: 'Se ha cancelado el comando',
                    retries: 2,
                    time: 30000 
                }
            }
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners',
        });

        // Load cmdHandler and tell it to use a listenerHandler
        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        
        // Load listenerHanlder
        this.listenerHandler.loadAll();
    }
}

const client = new AquilaMaster();
client.login(token);
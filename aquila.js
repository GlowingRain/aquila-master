const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
require('dotenv').config();

class AquilaMaster extends AkairoClient {
    constructor() {
        super({ ownerID: process.env.OWNER_ID }, { disableEveryone: true });

        this.commandHandler = new CommandHandler(this, {
            // Main configuration
            directory: "./src/commands",
            prefix: process.env.PREFIX,
            automateCategories: true,

            // Emiters
            emitters: {
                process
            },

            // Prompt defaults
            defaultPrompt: {
                timeout: message => 'El tiempo se agotó, se ha cancelado el comando.',
                ended: message => 'Se ha cancelado el comando debido a multiples intentos.',
                cancel: message => 'El comando ha sido cancelado.',
                cancelWord: 'cancelar',
                retries: 2,
                time: 30000
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
client.login(process.env.CLIENT_TOKEN);
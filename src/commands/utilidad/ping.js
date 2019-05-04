const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const colors = require('../../utils/colors');

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'pong'],
        });
    }

    async exec(message) {
        const msg = await message.channel.send('¿Ping...?')

        let ping = msg.createdTimestamp - message.createdTimestamp;
        const pingEmbed = new Discord.MessageEmbed()
            .setTitle('¡Pong! ⏱️')
            .setColor(colors['dodgerblue'])
            .addField('Latencia', `${ping}ms`)
            .addField('API', `${Math.round(this.client.ws.ping)}ms`);

        if (ping <= 100) pingEmbed.setDescription('En teoría yo debería estar bien.');
        if (ping > 100) pingEmbed.setDescription('Algo... alto, pero funciona.');
        if (ping > 200) pingEmbed.setDescription('Wow... ¡estoy volando irónicamente!');

        msg.edit(pingEmbed);
    }
}

module.exports = PingCommand;
const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const { cyan } = require('../../utils/colors');

class RebootCommand extends Command {
    constructor() {
        super('reboot', {
            aliases: ['reboot'],
            ownerOnly: true,
            prefix: '^#'
        })
    }

    exec(message) {

        const rebootEmote = this.client.emojis.get('550866071964352524');

        function reboot() {
            process.exit(0)
        };

        const embed = new MessageEmbed()
            .setColor(cyan)
            .setDescription(`${rebootEmote} **__Aquila Master__ se va a reiniciar en 5 segundos...**`);

        message.channel.send(embed)
        return setTimeout(reboot, 5000);
    }
}

module.exports = RebootCommand;
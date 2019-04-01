const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const colors = require('../../utils/colors');

class InfoCommand extends Command {
    constructor() {
        super('info', {
            aliases: ['info']
        })
    }

    exec(message) {
        const embed = new Discord.MessageEmbed()
            .setColor(colors['dodgerblue'])
            .setTitle('¡Esta es la versión master de Aquila!')
            .setThumbnail(this.client.user.avatarURL)
            .setDescription('Lo que se testea en este bot puede ser o no el producto final de Aquila, teniendo como proyecto principal aprender las bases de Discord.js \`master\`'
                + '\n\n**`Las nuevas actualizaciones serán testeadas en este bot`**')
            .setTimestamp(new Date())
            .setFooter(`Aquila Master v${process.env.VERSION}`);

        message.channel.send({ embed });
    }
}

module.exports = InfoCommand;
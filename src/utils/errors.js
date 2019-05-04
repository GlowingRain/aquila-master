const { MessageEmbed } = require('discord.js');
const colors = require('./colors');

module.exports.errorMessage = (error, message) => {
    const errorMsg = new MessageEmbed()
        .setColor(colors['red'])
        .setDescription(`**\`[ERROR]\`** - ${error}`);

    return message.channel.send(errorMsg);
};

module.exports.warnMessage = (warning, message) => {
    const warnMsg = new MessageEmbed()
        .setColor(colors['orange'])
        .setDescription(`**\`[AVISO]\`** - ${warning}`);

    return message.channel.send(warnMsg);
};

module.exports.successMessage = (content, message) => {
    const succMsg = new MessageEmbed()
        .setColor(colors['green'])
        .setDescription(`**\`[ÉXITO]\`** - ${content}`);

    return message.channel.send(succMsg);
};
const { Listener } = require('discord-akairo');
const chalk = require('chalk');
const moment = require('moment');

class ReadyEvent extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        let timestamp = `${moment(new Date()).format("DD-MM-YY HH:mm:ss")}`;

        console.log(
            `${timestamp} | ${chalk.bgBlue('AQUILA')} | `
            + `Está lista para su uso en ${this.client.guilds.size} servidor/es`
        );
    }
};

module.exports = ReadyEvent;
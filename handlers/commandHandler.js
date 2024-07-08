const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');
module.exports = (client) => {
// Cria uma coleção (mapa) para armazenar os comandos
client.commands = new Collection();

// Lê os arquivos de comando da pasta commands
const commandFiles = fs
.readdirSync(path.join(__dirname, '../commands'))
.filter(file => file.endsWith('.js'));

// Carrega cada arquivo de comando na coleção
for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
}
}
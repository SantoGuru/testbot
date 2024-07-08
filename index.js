const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

require("./.env")
// Importa o handler de comandos e executa-o
const commandHandler = require('./handlers/commandHandler');
commandHandler(client);

client.once('ready', () => {
    console.log(`Logado como ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    const prefix = "!"
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Houve um erro ao tentar executar esse comando!');
    }
});

client.login(DISCORD_TOKEN);

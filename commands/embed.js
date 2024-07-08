const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Envia uma mensagem embed.',
    execute(message, args) {
        const exampleEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Título do Embed')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Nome do Autor', iconURL: 'https://i.imgur.com/wSTFkRM.png', url: 'https://discord.js.org' })
            .setDescription('Descrição do Embed')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
                { name: 'Campo 1', value: 'Algum valor aqui' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Campo 2', value: 'Algum valor aqui', inline: true },
                { name: 'Campo 3', value: 'Algum valor aqui', inline: true },
            )
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter({ text: 'Rodapé do Embed', iconURL: 'https://i.imgur.com/wSTFkRM.png' });

        message.channel.send({ embeds: [exampleEmbed] });
    },
};

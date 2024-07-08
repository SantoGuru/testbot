const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'button',
    description: 'Envia uma mensagem com botões.',
    execute(message, args) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Botão Primário')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('secondary')
                    .setLabel('Botão Secundário')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setLabel('Link')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.js.org/')
            );

        message.channel.send({ content: 'Aqui estão alguns botões:', components: [row] });
    },
};
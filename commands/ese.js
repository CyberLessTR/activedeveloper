const { EmbedBuilder } = require('discord.js')
const ayarlar = ('ayarlar.json')

module.exports = {
name: "ese",
description: "Shows the bot's ping.",
permissions: "0x0000000000000800",
options: [],
run: async (client, interaction) => {

const start = Date.now();
const embed = new EmbedBuilder()
.setColor('#c4302b')
.setTitle(client.user.username + " - Pong!")
.setThumbnail(client.user.displayAvatarURL())
.addFields([
{ name: `${client.emojis.cache.get(ayarlar.ping)} Message Ping`, value: `\`${Date.now() - start}ms\`` },
{ name: `${client.emojis.cache.get(ayarlar.ping)} Message Latency`, value: `\`${Date.now() - start}ms\`` },
{ name: `${client.emojis.cache.get(ayarlar.ping)}  API Latency`, value: `\`${Math.round(client.ws.ping)}ms\`` }
])
.setTimestamp()
.setFooter({text: `Music Bot Commands - Edited by itscyber ❤️` })
interaction.reply({ embeds: [embed] }).catch(e => { });

},
};

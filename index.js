// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`); // zeigt: 1k hours bot von Melven
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'join') {
    const channel = interaction.member.voice.channel;
    if (!channel) return interaction.reply('Du musst im VC sein!');

    joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator
    });

    interaction.reply(`Ich bin jetzt drin, ${client.user.username} 🎧`);
  }
});

// Token aus Environment Variable (sicher!)
client.login(process.env.DISCORD_TOKEN);

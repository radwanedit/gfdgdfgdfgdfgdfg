const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('-----------');
    console.log('By Radwan LRG')
  });






client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail('http://www.dallasfirstumc.org/wp-content/uploads/2017/06/Welcome-White_on_Blue-welcome.jpg')//member.user.avatarURL
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***اهلا وسهلا بك في السيرفر يرجى قراءة القوانين لتجنب العقاب***')
    .setColor('RANDOM')
    .setImage(member.user.avatarURL)
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});











client.login(process.env.BOT_TOKEN);
const Discord = require("discord.js");
const bot = new Discord.Client();
const commandsUp = ("```Voici la liste des commandes Bot disponible:  \n!o : \n!o Achat Bionic-Soldiers 10.54 \n!o Vente Universal-Export 9.32 +5.56% ```");


const PREFIX = "!";

bot.on("ready", async () => {
    bot.user.setActivity("le marché", { type: "WATCHING"});
})
bot.login(process.env.TOKEN);

// quand un message est entré le bot vérifie si c'est une commande et agit en conséquence
bot.on('message', message => {
    if(message.content[0] === PREFIX && message.channel.id === '798988214911500351'){
        let splitMessage = message.content.split(" ");
        if(splitMessage[0].toLocaleLowerCase() === "!o"){
            if(splitMessage.length === 4 && splitMessage[1].toLowerCase() == 'achat'){
                bot.channels.cache.get("798892396346736700").send(new Discord.MessageEmbed() // token du channel avec clic droit get id dans discord
                .setTitle(message.member.user.tag) // permet de choper le username
                .setDescription('**' + splitMessage[1] + '**' + ' de l\'action ' + '**' + splitMessage[2] + '**'  + ' à ' + '**' + splitMessage[3] + '**')
                .setColor('#001783')
                .setThumbnail('https://media.discordapp.net/attachments/798988214911500351/799040073756180490/achat.png'));
            }
            else if(splitMessage.length === 5 && splitMessage[1].toLowerCase() === 'vente' && splitMessage[4].charAt(0) === '+'){
                bot.channels.cache.get("798892396346736700").send(new Discord.MessageEmbed() // token du channel avec clic droit get id dans discord
                .setTitle(message.member.user.tag) // permet de choper le username
                .setDescription('**' + splitMessage[1] + '**' + ' de l\'action ' + '**' + splitMessage[2] + '**'  + ' à ' + '**' + splitMessage[3] + '**' + ' avec un profit de ' + '**' + splitMessage[4] + '**')
                .setThumbnail('https://cdn.discordapp.com/attachments/798988214911500351/799040102843809802/vente_p.png')
                .setColor('#009A00'));
            }
            else if(splitMessage.length === 5 && splitMessage[1].toLowerCase() === 'vente'  && splitMessage[4].charAt(0) === '-'){
                bot.channels.cache.get("798892396346736700").send(new Discord.MessageEmbed() // token du channel avec clic droit get id dans discord
                .setTitle(message.member.user.tag) // permet de choper le username
                .setDescription('**' + splitMessage[1] + '**' + ' de l\'action ' + '**' + splitMessage[2] + '**'  + ' à ' + '**' +splitMessage[3] +'**' + ' avec un profit de ' + '**' + splitMessage[4] + '**')
                .setThumbnail('https://cdn.discordapp.com/attachments/798988214911500351/799040089685491742/vente_n.png')
                .setColor('#C10000'));
            }
            else {
                message.channel.send("```Erreur de syntaxe, exemple : \n!o Achat Bionic-Soldiers 10.54 \n!o Vente Universal-Export 9.32 +5.56%\n!o Vente Brest-Metropole-Océane 0.02 -55%```")
            }
        } else {
            message.channel.send(commandsUp);
        }
    }
});

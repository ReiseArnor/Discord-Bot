const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.RichEmbed()

const http = require("http");
const search = require('youtube-search');
const BotID = process.env.BOTID;

//// iniciar el servidor
http.createServer((req, res) => {
res.writeHead(200, {
    'Content-type': 'text/plain'
});
    res.write('Hey');
    res.end();
}).listen(process.env.PORT || 4000);

//// se inicia el bot
client.on('ready', ()=>{
    console.log('El Bot está listo');
    
});

//// si se introduce un mensaje
client.on ('message', message => {
    const contenido = message.content;
    const canal = message.channel;
    const autor = message.author;

    console.log(contenido);

    if(contenido === '!XP-BOT' || contenido === '!xp-bot' || contenido === '!XP-Bot'){
        embed.setTitle('XP-Bot') 
            .setColor('#02AAB0')
            .setDescription('Hello, here some commands for you!')
            .addField('!youtube [search]','get a video from youtube')
            .addField('!Tsnap [@Somedude]','Daddy thanos comes to help')
            .addField('!snapchat','isnt the snapchat that you think')
            .addField('!channelname [new name]','change the current channel name')
            .addField('!BT [@SomeUser]','do it and see what happens!')
            .addField('!destroy [reason]','turn off the bot(the bot can get on just manually after that)')
            .addField('the bot also interacts with you','sometimes')
            .addField('Version','1.5.0')
            .setFooter('Have fun!')
        canal.send(embed);
    }
    /////////
        if(message == 'hello' || message == 'hi' || message == 'hola'){
            if(autor.id != BotID){
                const hello = client.emojis.get("592722305830879242");
                canal.send(`hello ${hello} ${autor}!`).catch(err => console.log(err));
            }
        }
    /////////592727721952411648
    if(contenido.includes('anime')){
        if(autor.id != BotID){
            const anime = client.emojis.get("592729470742560778");
            canal.send(anime+' ').catch(err => console.log(err));
        }
    }
    /////////
    if(contenido == 'nitro'){
        if(autor.id != BotID){
            const anime = client.emojis.get("592763499617320982");
            canal.send(anime+' ').catch(err => console.log(err));
        }
    }
    /////////
    if(contenido == 'o' || contenido == ':o' || contenido == 'oh'){
        if(autor.id != BotID){
            const anime = client.emojis.get("592764111369142325");
            canal.send(anime+' ').catch(err => console.log(err));
        }
    }
    /////////
    if(contenido.includes('sex') || contenido.includes('SEX') || contenido.includes('Sex')){
        if(autor.id != BotID){
            const anime = client.emojis.get("592762909134684187");
            canal.send(anime+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('butt') || contenido.includes('ass') || contenido.includes('BUTT') || contenido.includes('ASS')){
        if(autor.id != BotID){
            const anime = client.emojis.get("592765576011841549");
            canal.send('Someone said').catch(err => console.log(err));
            canal.send(anime+" ");
        }
    }
    //
    if(contenido.includes('discord') || contenido.includes('DISCORD')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592739375951904788");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('yeah') || contenido.includes('oh yeah')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592740187839397901");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('nani') || contenido.includes('NANI') || contenido.includes('Nani')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592741453936197652");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('kappa')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592724637364912128");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('4head')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592747366600409108");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido == 'lick' || contenido == 'licking' || contenido == 'LICK' || contenido == 'LICKING' || contenido.includes(" lick") || contenido.includes(" LICK")){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592750639600107560");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('love') || contenido.includes('luv it') || contenido.includes('♥')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592745025381728329");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('mmm') || contenido.includes('MMM') || contenido.includes('Mmm') || contenido.includes('hmm') || contenido.includes('Hmm')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592743740926590977");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('jizz')){
        if(autor.id != BotID){
            const kappa = client.emojis.get("592738173310861325");
            canal.send(kappa+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido == 'no' || contenido == 'No' || contenido == 'NO'){
        if(autor.id != BotID){
            const no = client.emojis.get("592727721952411648");
            canal.send(no+' ').catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('pepehands')){
        if(autor.id != BotID){
            const cry = client.emojis.get("541134482707709952");
            canal.send('anlacky dude '+cry).catch(err => console.log(err));
        }
    }
    //
    if(contenido.includes('ow') && contenido.includes('fun') || contenido.includes('overwatch') && contenido.includes('fun') ){
        if(autor.id != BotID){
            canal.send('overwatch and fun in the same sentence? ya sure pal XDDD');
        }
    }
    //
    if (contenido == 'rip' || contenido == 'RIP') {
        const attachment = new Discord.Attachment('https://i.imgur.com/w3duR07.png');
        canal.send(attachment);
    }
    //
    if (contenido.includes('jesus')) {
        const attachment = new Discord.Attachment('./uploads/jesus.jpg');
        canal.send(attachment);
    }
    //
    if (contenido == 'F' || contenido == 'f') {
        const attachment = new Discord.Attachment('./uploads/f.jpg');
        canal.send(attachment);
    }
    //
    if (contenido.startsWith('!BT')) {
        let contSplit = contenido.trim().split('!BT');
        let user = contSplit[1];
        
        if(contSplit.length == 2){
            canal.send(`${user}`);
            const attachment = new Discord.Attachment('./uploads/keanu.jpg');
            canal.send(attachment);
        }
    }
    //
    if (contenido.startsWith('!snapchat')) {
        const attachment = new Discord.Attachment('./uploads/chat.gif');
        canal.send(attachment);
    }
    //
    if (contenido.includes('thanos')) {
        const attachment = new Discord.Attachment('./uploads/inevitable.gif');
        canal.send(attachment);
    }
    //
    if (contenido.startsWith('!Tsnap')) {
        let contSplit = contenido.trim().split('!Tsnap');
        let user = contSplit[1];
        
        if(contSplit.length == 2){
            const attachment = new Discord.Attachment('./uploads/thanos.gif');
            canal.send(attachment);
            canal.send(`Bye ${user}...`);
        }
    }
    //
    if(contenido.startsWith('!youtube')){
        let contSplit = contenido.trim().split('!youtube');
        let newName = contSplit[1];
    
        if(contSplit.length == 2){
            var opts = {
                maxResults: 1,
                type: 'video',
                key: process.env.YT_Api_Key // NUNCA MANTENER TU LLAVE EN EL CODIGO
            };
            
            search(newName, opts, function(err, results) {
                if(err) return canal.send(`${autor} Ups... a error happened!`);
                var url = results[0];
                canal.send(`${url.link}`);
            });
        }else{canal.send(`error setting ${newName}`);}
    }
    //        
    if(contenido.startsWith('!channelname')){
        let contSplit = contenido.trim().split('!channelname');
        let newName = contSplit[1];
    
        if(contSplit.length == 2){
            canal.setName(newName)
                .then(newChannel => canal.send(`Channel's new name is ${newChannel.name}!`))
                .catch(console.error);
        }else{canal.send(`error setting ${newName}`);}
    }
    //
    if(contenido.startsWith('!destroy')){
        let contSplit = contenido.trim().split('!destroy');
    
        if(contSplit.length == 2){
            canal.send(`${autor} it doesnt matter what you think BITCH!`)
            client.destroy(()=>{console.log('Bot offline'); });
            
        }else{canal.send(`error`);}
    }
});

// se borra un mensaje
client.on('messageDelete', message => {
    message.channel.send(`${message.author}... so you take it back bitch!`)
});

/*
// se actualiza un mensaje
/client.on('messageUpdate', message => {
    if(autor.id != BotID){
        message.channel.send(`Mmmm... something has changed.`)
    }
});

// un usuario cambiar algo

client.on('guildMemberUpdate', (Old, New) => {
    if(Old.id != BotID){
        let tag = New.user.tag;
        New.c.send(`${tag} Your power level is over 9000 now!`)
        ///message.channel.send(`Mmmm... something has changed.`)
    }
}); 
*/

client.login(process.env.BOT_TOKEN); // NUNCA MANTENER EL TOKEN EN EL CODIGO






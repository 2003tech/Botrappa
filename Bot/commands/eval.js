const Discord = require('discord.js')

exports.run = function(bot, message, config, args){
    if (message.author.id !== "289028991069978624") return message.reply("You do not have permission to use this.")
    var str = args.join(" ");
    var patt = new RegExp("token");
    var res = patt.test(str);

    if(res === true) return message.reply(config.token)

    //if(!isAdmin(message.author.id)) return message.reply("You do not have permission to use this command.")

    try {

        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
        //message.channel.sendMessage(":inbox_tray: **INPUT**\n")
        message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval:", "Success!").addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```").addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```").setColor(message.guild.me.displayHexColor))
        //message.channel.sendCode("xl", args.join(" "));
        //message.channel.sendMessage(":outbox_tray: **OUTPUT**\n")

        //message.channel.sendCode("xl", clean(evaled));

    } catch (err){

        message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval ERROR:", "There was a problem with the code your trying to run!").addField("Error", "```" + clean(err) + "```").setColor(message.guild.me.displayHexColor))
        //message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    
    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
}
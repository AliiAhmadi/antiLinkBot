function StartHandler(ctx) {
  ctx.reply(`
Hello ✋
I am an anti-link robot 🚫
You can add me to the groups 🙃`);
}

function HelpHandler(ctx) {
  ctx.reply(`Add me to your group to start my work  👊`);
}

function SettingHandler(ctx) {
  ctx.reply(`sory, I dont have any setting  😢`);
}

async function MessageHasLink(ctx) {
  if (ctx.message.chat.type === "supergroup") {
    let Sender = ctx.message.from.first_name;
    await ctx.deleteMessage(ctx.message.message_id);
    let botMessage = await ctx.reply(`
user ${Sender} ❗️
Sending links in this group is prohibited ⛔️
Do not repeat please  🙏
        `);
    DeleteBotMessage(ctx, botMessage);
  }
}

function DeleteBotMessage(ctx, Message) {
  setTimeout(() => {
    ctx.deleteMessage(Message.message_id);
  }, 5000);
}
module.exports = {
  StartHandler,
  HelpHandler,
  SettingHandler,
  MessageHasLink,
};

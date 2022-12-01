const fs = require('fs')
const chalk = require('chalk')

global.wlcm = []
global.region = 'India'
//=================================================//
//—————「 Configure aqui  」—————//

global.dono = ['917012984396']
global.premium = ['917012984396']
global.prefixo = ['Sparky']
global.reagir1 = '🔥'
global.reagir2 = '🤬'
global.reagir3 = '🤣'
global.reagir4 = '📌'
global.packname = '🔥𝐒 𝐏 𝐀 𝐑 𝐊 𝐘'
global.footer = '𝐒 𝐏 𝐀 𝐑 𝐊 𝐘' 
global.author = 'sparky'
global.QrNome = './𝙎𝙋𝘼𝙍𝙆𝙔'

global.resposta = {
  espere: '*Loading... have patience *_', 
  privado: 'Feature only used for a private chat!',
  dono: '*This command can only be used by my owner*',  
  grupo: '*This command works only in groups*',
  myadm: '*I need to get a grupp admin to run this command*',
  adm: '*This command is only for group admin*',
  sucesso: '*Feitinho*', 
  banido: '*❗You can no longer use bot commands please contact the owner*',
  sempix: `❗Acesso negado❗\neste comando so fuciona se você pagar via pix\ncaso queira chame o desenvolvedor venom neste link\n\nhttps://wa.me/559784388524`, 
  bot: 'Recurso so para usuários o bot',

}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.thumb = fs.readFileSync("./dados/imagem/Sparky.jpg")
global.videovenom = fs.readFileSync("./dados/video/Sparkyprivat.mp4")
global.log0 = fs.readFileSync("./dados/imagem/Sparky.jpg")

global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`${__filename} foi atualizado`))
	delete require.cache[file]
	require(file)
})
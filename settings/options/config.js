// CREATED BY LEXXY
const fs = require('fs')
const chalk = require('chalk')

// OTHERS
global.owner = ['6281322577123', '6281322577123']
global.premium = ['6281322577123']
global.number = '6281322577123'
global.botname = 'BOT LINTANGD'
global.packname = 'By BOT LINTANG'
global.author = 'By BOT LINTANG!'
global.emailowner = 'Jjoceylintang12345@@gmail.com'
global.websiteowner = 'https://tiktok.com/@joceylintangg'
global.region = 'Indonesia'
global.sessionName = "session"
global.prefa = ['']
global.sp = '⭔'
global.simbol = "➭"
global.rkyt = []

// BIARIN:v
global.creator = '© Created By BOT LINTANG'

// MESSAGE
global.mess = {
error: 'Error',
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// LIMIT
global.limitawal = {
premium: "Infinity",
free: 20
}

// MEDIA
global.image = fs.readFileSync("./settings/media/image.jpg")
global.thumbnail = fs.readFileSync("./settings/media/thumb.jpg")
global.qris = fs.readFileSync("./settings/media/qris.jpg")
global.scimg = fs.readFileSync("./settings/media/script.jpg")
global.mnuimg = fs.readFileSync("./settings/media/menu.jpg")
global.sewimg = fs.readFileSync("./settings/media/sewa.jpg")
global.rulsimg = fs.readFileSync("./settings/media/rules.jpg")
global.fitimg = fs.readFileSync("./settings/media/list.jpg")

//BATAS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})

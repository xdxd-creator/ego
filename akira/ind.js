exports.wait = () => {
	return`*「 ESPERA 」 _EN PROCESO :3_*`
}

exports.succes = () => {
	return`*「 LISTO 」*`
}

exports.lvlon = () => {
	return`*「 ACTIVO」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESACTIVO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*TU NIVEL CORRESPONDE A 0*`
}

exports.baned = () => {
	return`*MI CREADOR TE DIO BAN*`
}

exports.lvlnoon = () => {
	return`*LEVEL NO ACTIVO EN ESTE GRUPO*`
}

exports.noregis = () => {
	return`*「 NO ESTAS REGISTRADO」*\n\n*daftar para registrarte daftar ${prefix}daftar nombre|edad*\n* ejemplo= ${prefix}daftar ${pushname}|14*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「SOLO EN GRUPOS」*`
}

exports.ownerb = () => {
	return`*「SOLO EN DUEÑO DEL BOT」*`
}

exports.ownerg = () => {
	return`*「SOLO EN DUEÑO DEL GRUPO」*`
}

exports.admin = () => {
	return`*「SOLO ADMIN DEL GRUPO」*`
}

exports.badmin = () => {
	return`*「EL BOT DEBE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW ACTIVO*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nkamu sudah terdaftar dengan data \n\n┏━➤nama\n┗➤${namaUser}\n┏━➤nomer\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤umur\n┗➤${umurUser}\n┏━➤waktu pendaftaran\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : jangan sampai lupa save nomor admin Akira Bot Dan Jangan Lupa Untuk Ketik ${prefix}rules sebelum memulai botnya ya😁`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SIBISTE DE NIVEL 」*
┏𖥻ꦼꦽ➳ *Nombre* : ${pushname}
┣𖥻ꦼꦽ➳ *Numero* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Lo siento gei ${pushname} tu limite se agota*\n*el límite se reestablece cada 24 horas*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DE USUARIOS 」*
sisa limit anda : ${limitCounts}

NOTE : Daiski`
}

exports.satukos = () => {
	return`Agregar parametro 1 para habilitar, 0 desactivar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nombre* : ${pushname}\n┣𖥻ꦼꦽ➳ *Numero* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

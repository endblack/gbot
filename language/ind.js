exports.wait = () => {
	return`*「 WAIT 」 AGUARDE, ESTOU PROCESSANDO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O LEVEL NÃO ESTÁ ATIVO NO GRUPO*`
}

exports.noregis = () => {
	return`*「 NÃO ESTÁ REGISTRADO 」*\n\n*como se registra ${prefix}daftar nome|idade* \n*exemplo: ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*yah! falhou, tente depois de um tempo*`
}

exports.linkga = () => {
	return`*link inválido*`
}

exports.groupo = () => {
	return`*「SOMENTE EM GRUPOS」*`
}

exports.ownerb = () => {
	return`*「SOMENTE O DONO DO BOT」*`
}

exports.ownerg = () => {
	return`*「SOMENTE GRUPO DE PROPRIETÁRIOS」*`
}

exports.admin = () => {
	return`*「SAI FORA MEMBRO COMUM」*`
}

exports.badmin = () => {
	return`*「BOT PRECISA SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*BUG RELATADOS AO ADM DO BOT, relatórios falsos/main2 não serão respondidos*`
}

exports.wrongf = () => {
	return`*formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*tudo limpo*`
}

exports.pc = () => {
	return`*「 REGISTRADO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não recebeu a mensagem. significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
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

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *INFO DO USER* ❱ ⊰─══
╠☞ *Nome* : ${pushname}
╠☞ *Número* : wa.me/${sender.split("@")[0]}
╠☞ *Pontos* : Rp${uangku}
╠☞ *XP* : ${getLevelingXp(sender)}/${reqXp}
╠☞ *Nível* : ${getLevelingLevel(sender)}
╠☞ *User registrado* : ${_registered.length}
╰════─⊱  ⸨ *AFFIS* ⸩  ⊰─════╯

            𝐑𝐮𝐥𝐞𝐬 - 𝐒𝐢𝐦𝐩𝐥𝐞
▬▭▬▭▬▭▬▭▬▭▬▭▬
●⧐ *Spam : Auto Block!*
●⧐ *Dê uma pausa de 5 segundos para usar!!*
●⧐ *Bug/Error, por favor reporte ao dono!*
●⧐ *Para garantir que o bot está ativo*
●⧐ *Digite ${prefix}bot*
●⧐ *seja paciênte ao usar o bot!*
●⧐ *Faça bom uso do bot!*
▬▭▬▭▬▭▬▭▬▭▬▭▬

╭══─⊱ ❰ *MAKER MENU* ❱ ⊰─══➤
╠☞ *${prefix}sticker*
╠☞ *${prefix}vinta*
╠☞ *${prefix}avengers*
╠☞ *${prefix}summer*
╠☞ *${prefix}sandwrite*
╠☞ *${prefix}metaldark*
╠☞ *${prefix}dropwater*
╠☞ *${prefix}greenneon*
╠☞ *${prefix}neontext*
╠☞ *${prefix}sumery*
╠☞ *${prefix}blood*
╠☞ *${prefix}firework*
╠☞ *${prefix}lava*
║
╠══─⊱ ❰ *FUN MENU* ❱ ⊰─════➤
╠☞ *${prefix}mining*
╠☞ *${prefix}bisakah*
╠☞ *${prefix}kapankah*
╠☞ *${prefix}apakah*
╠☞ *${prefix}rate*
╠☞ *${prefix}slap*
╠☞ *${prefix}tampar*
╠☞ *${prefix}speed*
║
╠══─⊱ ❰ *MEDIA MENU* ❱ ⊰─═══➤
╠☞ *${prefix}toxic*
╠☞ *${prefix}quotes*
╠☞ *${prefix}beritahoax*
╠☞ *${prefix}brainly*
╠☞ *${prefix}pinterest*
╠☞ *${prefix}resepmasakan*
╠☞ *${prefix}igstalk*
║
╠══─⊱ ❰ *LIMIT MENU* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
╠☞ *${prefix}buylimit*
╠☞ *${prefix}dompet*
║
╠══─⊱ ❰ *NSFW MENU* ❱ ⊰─═══➤
╠☞ *${prefix}pokemon*
╠☞ *${prefix}anjing*
╠☞ *${prefix}1cak*
║
╠══─⊱ ❰ *GRUPOS* ❱ ⊰─══➤
╠☞ *${prefix}hidetag*
╠☞ *${prefix}grouplist*
╠☞ *${prefix}limit*
╠☞ *${prefix}level*
╠☞ *${prefix}linkgc*
╠☞ *${prefix}tagall*
╠☞ *${prefix}setpp*
╠☞ *${prefix}add*
╠☞ *${prefix}kick*
╠☞ *${prefix}setname*
╠☞ *${prefix}setdesc*
╠☞ *${prefix}demote*
╠☞ *${prefix}promote*
╠☞ *${prefix}listadmin*
╠☞ *${prefix}group* [buka/tutup]
╠☞ *${prefix}leveling* [enable/disable]
╠☞ *${prefix}nsfw* [1/0]
╠☞ *${prefix}simih* [1/0]
╠☞ *${prefix}welcome* [1/0]
║
╠══─⊱ ❰ *OWNER MENU* ❱ ⊰─══➤
╠☞ *${prefix}bc*
╠☞ *${prefix}bcgc*
╠☞ *${prefix}kickall*
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}block*
╠☞ *${prefix}unblock*
╠☞ *${prefix}leave*
╠☞ *${prefix}event* [1/0]
╠☞ *${prefix}clone*
╠☞ *${prefix}setppbot*
║
╠══─⊱ ❰ *THANGKS TO* ❱ ⊰─══➤
║
╰════─⊱  ⸨ *MEGAH* ⸩  ⊰─════╯
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 FELIZ? 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DA CONTA 」*
O resto do seu limite : ${limitCounts}

NOTA : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/ativa atau 0/desativa`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Pontos* : ${uangkau}\n┗━━━━━━━━━━`
}

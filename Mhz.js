const { default: makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');

const express = require('express');
const { exec } = require('child_process');
const app = express();
__path = process.cwd()
const path = require('path')
const gradient = require('gradient-string')
const bodyParser = require("body-parser");
const fs = require('fs')

const PORT = process.env.PORT || 1234;
let code = require('./PairingCode');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/Pairing', code);
app.use('/PairingCode',async (req, res, next) => {
res.sendFile(__path + '/PairingCode.html')
})
let code2 = require('./tempban');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/codex', code2);
app.use('/tempban',async (req, res, next) => {
res.sendFile(__path + '/tempban.html')
})
app.use('/ModificarFonte',async (req, res, next) => {
res.sendFile(__path + '/ModificarFonte.html')
})
app.use('/GerarEmails',async (req, res, next) => {
res.sendFile(__path + '/GerarEmails.html')
})
app.use('/GerarPessoa',async (req, res, next) => {
res.sendFile(__path + '/GerarPessoa.html')
})
app.get('/jajaj', (req, res) => {
res.sendFile('/tela-login/login.html', { root: path.join(__dirname, '') });
});

app.get('/cadastrar', (req, res) => {
res.sendFile('/new-login/cadastrar.html', { root: path.join(__dirname, '') });
});
app.get('/login', async (req, res) => {
const apiKey = req.query.apikey;
let usuario = req.query.usuario;
let senha = req.query.senha;
console.log(gradient('green','white')(`NEW LOGiN: ${req.route.path}, usuario: ${usuario}, senha: ${senha}`));

try {

async function lerArquivoJSON(caminho) {
try {
const conteudo = await fs.promises.readFile(caminho, 'utf-8');
return JSON.parse(conteudo);
} catch (erro) {
console.error('Erro ao ler o arquivo JSON:', erro);
throw erro;
}
}

const listaOriginal = await lerArquivoJSON(__path + '/tela-login/aaaaaaaaaaaaaaaaaa.json') || [];
const numeroExistente = listaOriginal.some(item => item.usuario === usuario && item.senha === senha);

if (numeroExistente) {
return res.json({ 'resultado': 'Login já cadastrado! ' });
}

if (!Array.isArray(listaOriginal)) {
}
listaOriginal.push({ usuario, senha });
await fs.promises.writeFile(__path + '/tela-login/aaaaaaaaaaaaaaaaaa.json', JSON.stringify(listaOriginal, null, 2), 'utf-8');

res.json({ 'resultado': 'null' });
} catch (error) {
console.error('Erro no processamento:', error);
res.status(500).json({ 'resultado': 'Erro interno no servidor', 'erro': error.message });
}
});
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/HomeSite.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Servidor online na porta http://localhost:` + PORT)
})

module.exports = app

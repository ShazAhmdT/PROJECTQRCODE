const fs = require("fs");

var token = "5483343662:AAG0RfMQW33-iDV_O08IFeAIoXMdaUO_2zg";

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  //bot.sendMessage(chatId, msg.text);
  var satd = msg.text;

  switch (satd) {
    case "/start sa01":
      fileId =
        "BQACAgQAAxkBAAEBMM9i3X4POIDjMPFp9QAB0NGQpSFCmugAAvMPAAL4OvlTjtRrfkUn0x4pBA";
      break;

    case "/start sa02":
      fileId =
        "BQACAgQAAxkBAAEBMNBi3X4Pq31wNZV5HQLmS14MBDZlaAACdQoAAhMGSFJR-BUg7XT_HikE";
      break;

    case "/start sa03":
      fileId =
        "BQACAgEAAxkBAAEBMNFi3X4P43uNpavtGBYcA2iXKKbAhQACnQADvcGhRQU5mhukYI7AKQQ";
      break;

    case "/start sa04":
      fileId =
        "BQACAgUAAxkBAAEBMNJi3X4P3mKJqh4SfqHVc5XPGjIN9wACPAADMHthVHAf5ryjL_UzKQQ";
      break;

    case "/start sa05":
      fileId =
        "BQACAgEAAxkBAAEBMNNi3X4Pz5rGv65TKKyTkfu_TJzwpAACvwEAAiNNYUQ6cg7gmb4wICkE";
      break;

    case "/start sa06":
      fileId =
        "BQACAgQAAxkBAAEBMONi3X7IN3P2zMPRqmJ3-4tkLUAPqwACiwUAA9xQU8ZMzlDBh39lKQQ";
      break;

    case "/start sa07":
      fileId =
        "BQACAgIAAxkBAAEBMiVi4NsHz2eUysfrKRCrkcFkiL2tuAACUAQAAlu6WEt0GZC2RdxbvykE";
      break;

    case "/start sa08":
      fileId =
        "BQACAgIAAxkBAAEBMiZi4NsHWcOu8sWceetUd97eSl_e2gACCAQAAnOVmEhyIl7kG2CMCykE";
      break;

    case "/start sa09":
      fileId =
        "BQACAgQAAxkBAAEBMpli4X0IRPymrA3RYF8u8T_HxSnqVQACkhkAAgmQcFB3KT4WBdTbrCkE";
      break;

    case "/start sa10":
      fileId =
        "BQACAgQAAxkBAAEBMihi4NsHgCqU6jaSzxxUX64jJDCdkAACbQsAAmOCoVLuVoLxDjjA3ikE";
      break;

    case "/start sa11":
      fileId =
        "BQACAgEAAxkBAAEBMp1i4YAVurW8PTswK2U1lH37UQq40QACnwEAAt08-UQlE1bJVFJg3ikE";
      break;

    case "/start sa12":
      fileId =
        "BQACAgQAAxkBAAEBMp5i4YAVwjNHaaAPAQF3v4q46xbI3AAC3AwAAso4kFDk4quh4vRssykE";
      break;

    case "/start sa13":
      fileId =
        "BQACAgIAAxkBAAEBMiZi4NsHWcOu8sWceetUd97eSl_e2gACCAQAAnOVmEhyIl7kG2CMCykE";
      break;

    case "/start sa14":
      fileId =
        "BQACAgQAAxkBAAEBMq1i4YEIze9TOkd4cJZ1CnhSDBqqUAAChg0AAiO-UVHEwm6KYIHWqikE";
      break;

    case "/start sa15":
      fileId =
        "BQACAgQAAxkBAAEBMp9i4YAVHuRx3qrwHszbqvv24wF_KAACDgsAArgXIFP1GWyvBb4mMikE";
      break;

    case "/start sa16":
      fileId =
        "BQACAgIAAxkBAAEBMiZi4NsHWcOu8sWceetUd97eSl_e2gACCAQAAnOVmEhyIl7kG2CMCykE";
      break;

    case "/start sa17":
      fileId =
        "BQACAgIAAxkBAAEBMrFi4YV7BjA3JNf9zbgc3qOcJa7ZvwACVQQAAmoBAUiWRa2IfEcBPykE";
      break;

    case "/start sa18":
      fileId =
        "BQACAgQAAxkBAAEBMrVi4YWH8A19gpgmSzFvXQmE6_hOdgACzQgAAnbVsVI5AZAuj-c4sykE";
      break;

    case "/start sa19":
      fileId =
        "BQACAgQAAxkBAAEBMwhi4qnfXL11JKhP8BqnQgpoAa_dqgACSwoAAnFToVMHIv5Uy27EpikE";
      break;
    case "/start sa20":
      fileId =
        "BQACAgUAAxkBAAEBMuli4qOALXPxlIMQnnRzi_sqN3quXwACJwADa4BwVa7b80aYR4AzKQQ";
      break;

    case "/start sa22":
      fileId =
        "BQACAgQAAxkBAAEBMupi4qOAaxt8KEKlvCb-76la-MIxMwACKg0AAtkYKVB-qAABpXw-fcYpBA";
      break;
    case "/start sa21":
      fileId =
        "BQACAgIAAxkBAAEBMuti4qOAQ_ZFtm9qiie2sEz5DvpUtQACEgQAAoll0EkYt04ZVAX1GykE";
      break;

    case "/start sa23":
      fileId =
        "BQACAgQAAxkBAAEBMwxi4qtLu23HfPSzKgP2xcwSQ4ou_AACHwwAAmDm2VCRaKUFS_PU0CkE";
      break;

    case "/start sa24":
      fileId =
        "BQACAgQAAxkBAAEBMuxi4qOA4zyWMerr3AG41SahM2ADoAACmg0AApdF6FKibj_8HsyeSSkE";
      break;

    case "/start sa25":
      fileId = "";
      break;

    case "/start sa26":
      fileId =
        "BQACAgEAAxkBAAEBMxBi4quCTG054yoLhBm8amuwsw_YBAACyQADxRKZR82-JMW7g9VcKQQ";
      break;

    case "/start sa27":
      fileId = "";
      break;

    case "/start sa28":
      fileId =
        "BQACAgEAAxkBAAEBM0hi40gpMcfxyoapSzGA0bhMYNa40wACGQEAAsh94EfwT3jZM-PUyykE";
      break;

    case "/start sa29":
      fileId =
        "BQACAgUAAxkBAAEBM0xi40g7N_NTqxEzvteMaOmbn1f6wwACfAEAAmXjWFdh5bO6kIhj9CkE";
      break;

    case "/start sa30":
      fileId =
        "BQACAgEAAxkBAAEBM1Bi40hHBqG5nAAB-oXgtde6bFWR_UgAArIBAAJiZrhF9n_3ng5tCxgpBA";
      break;

    case "/start sa31":
      fileId =
        "BQACAgQAAxkBAAEBM1Ri40hRXfl2nXcKI8EOrkN52sUetAACSgoAAlspEVFYDebmoMXLvikE";
      break;

    case "/start sa32":
      fileId =
        "BQACAgQAAxkBAAEBM3xi49jKCIpOYsQwZbGuZxSeZ6W-rgACpAwAAu2LyVHDv81AsWXInikE";
      break;

    case "/start sa33":
      fileId =
        "BQACAgQAAxkBAAEBM4Bi49jRHNEovFtTfqON1vzmczQ6vgAC5wkAAjqkYFHQm777-mKx1ikE";
      break;

    case "/start sa34":
      fileId =
        "BQACAgIAAxkBAAEBM4Ri49jfRvR9zHVXMt5IBhStHOKTmgAClQYAAmWw-Eo0L8Ya9ffI4ykE";
      break;

    case "/start sa35":
      fileId =
        "BQACAgQAAxkBAAEBM4hi49jonqM8O1TXg1vQtg5udb9wXgACUAwAAkxEyVAdJp1BQPo2fykE";
      break;

    case "/start sa36":
      fileId =
        "BQACAgEAAxkBAAEBM4xi49jw4j6W55tqftSaYf_R4f0HNwACgQEAAmJmuEX7X_o-8qxC_SkE";
      break;

    case "/start sa37":
      fileId =
        "BQACAgEAAxkBAAEBM5Bi49kJwh6qdTINuIczFqpWukqzbgACsQIAAggkuUZ7BAedFOD1dikE";
      break;

    case "/start sa38":
      fileId =
        "BQACAgIAAxkBAAEBMiVi4NsHz2eUysfrKRCrkcFkiL2tuAACUAQAAlu6WEt0GZC2RdxbvykE";
      break;

    case "/start sa39":
      fileId =
        "BQACAgEAAxkBAAEBM5Ri49kScsZfS60kJiBChR5I8X57cAACJQEAAswjyUTwfvSiue1FAykE";
      break;

    case "/start sa40":
      fileId =
        "BQACAgQAAxkBAAEBM5hi49kawEpmeWFqVhuFwTPsWTdYdQAC8wwAAqnUyFMIfsrQ2ip_NSkE";
      break;

    case "/start sa41":
      fileId =
        "BQACAgQAAxkBAAEBM5xi49kipJ1GNZxQaCd1Y9xvTkBswwACkgEAAuuiUQABS4Kn5L17HeYpBA";
      break;

    case "/start sa42":
      fileId =
        "BQACAgEAAxkBAAEBM6Bi49kpXWTjnoG7B8GEK5gtmhz5cAACsQEAArm0UEaL9Ls99bJRZSkE";
      break;

    case "/start sa43":
      fileId =
        "BQACAgUAAxkBAAEBM6Ri49kv9eKtqzrL2fP6EAXCfFCO_wACHQEAAklcEVcJEKGpjbi6HCkE";
      break;

    case "/start sa44":
      fileId =
        "BQACAgQAAxkBAAEBM6hi49k5_waBSFgXpxOEEoz0rNT9sQAC2wgAAhvJ8FPGBYYl03hQlykE";
      break;

    case "/start sa45":
      fileId =
        "BQACAgUAAxkBAAEBM6xi49lEggYIneeXx0qnW0azlbB_JgACDgADVgABiFZFJ4PqGI_JJikE";
      break;

    case "/start sa46":
      fileId =
        "BQACAgQAAxkBAAEBM7Bi49lKxVrSvxVJWQKWh2PCs9ym-gAC6gkAAnUxwVKuGOnJmQABxCMpBA";
      break;

    case "/start sa47":
      fileId =
        "BQACAgQAAxkBAAEBM7Ri49lTWvAFDIRKc0O-w1cR-WIfZwAC6xAAAjLomFAYU8R0mXFMcSkE";
      break;

    case "/start sa48":
      fileId =
        "BQACAgEAAxkBAAEBM6Bi49kpXWTjnoG7B8GEK5gtmhz5cAACsQEAArm0UEaL9Ls99bJRZSkE";
      break;

    case "/start sa49":
      fileId =
        "BQACAgQAAxkBAAEBM7hi49lmxlSfC-7WVBmOpSgvDni-GQAC_Q0AApdLYVDoUhK3AyVc4ikE";
      break;

    case "/start sa50":
      fileId =
        "BQACAgEAAxkBAAEBM7xi49luxmYD-AGb-tfYH-nkoO0eqgAC_QADjEfwRpTYCRwI9jy0KQQ";
      break;
    case "/start sa51":
      fileId =
        "BQACAgIAAxkBAAEBM8Bi49l1V0gkF4tRgaWygl37843QAgACjggAAjwAASBK5ivnqis6rdcpBA";
      break;

    case "/start sa52":
      fileId =
        "BQACAgEAAxkBAAEBM8Ri49l8LtSG1yMDQbl8vjft22ycUgACBAEAAi-HiUWN3LaB-3soKCkE";
      break;

    case "/start sa53":
      fileId =
        "BQACAgQAAxkBAAEBM9Ni5AGuhKL4sHKEJFSaymo3HffhYQACXQsAAhfzyVCyFV5nIYFk2CkE";
      break;
    case "/start sa54":
      fileId =
        "BQACAgEAAxkBAAEBM9di5AG68yq08TciL5MZMBhyyGr32QACSgEAAp0ykEbgZfkHXqRygCkE";
      break;

    case "/start sa55":
      fileId =
        "BQACAgQAAxkBAAEBM9ti5AHDTVDW7hoj2gSihiPRYj66_AACJQgAAt-OcFLRLHYRgKaJ7SkE";
      break;

    case "/start sa56":
      fileId =
        "BQACAgEAAxkBAAEBM_ti5U0Dr9mk9CUSOymykLsAASlHdkcAAh0BAALXBBBFHKt0xlKBzBwpBA";
      break;
    case "/start sa57":
      fileId =
        "BQACAgIAAxkBAAEBM_9i5U0VwVME4attkzgVZKH7A43n0wACsBIAAmCjOEhLItD2BNVa2SkE";
      break;

    case "/start sa58":
      fileId =
        "BQACAgQAAxkBAAEBNANi5U0coQdr39RrWgZ1uBWN3iqSPAAC8wkAAkHoYVF1BYKmv_PxqCkE";
      break;

    default:
      fileId = "";
      break;
  }

  if (fileId != "") {
    fs.readFile("logdat.txt", "utf8", function (err, data) {
      let logdat =
        "" +
        data +
        " file " +
        msg.text +
        " recieved by " +
        chatId +
        " " +
        msg.from.username +
        msg.from.first_name +
        msg.from.last_name +
        "\n";

      fs.writeFile("logdat.txt", logdat, (err) => {});
    });

    bot.sendDocument(chatId, fileId);
    bot.sendMessage(chatId, "YOU ARE WELCOME!");
  } else {
    fs.readFile("logdat.txt", "utf8", function (err, data) {
      let logdat =
        data +
        msg.text +
        " file not recieved by " +
        chatId +
        " " +
        msg.from.username +
        " " +
        msg.from.first_name +
        msg.from.last_name +
        "\n";
      fs.writeFile("logdat.txt", logdat, (err) => {});
    });

    bot.sendMessage(
      chatId,
      "File not found inside my database. Kindly try after sometime or contact my friend ANNA. https://t.me/FC_MovieBot"
    );
  }
});

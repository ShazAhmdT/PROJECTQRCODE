const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname / public, "index.html"));
});

app.get("/abbu?", function (req, res) {
  const dat = req.query.dat;
  const token = req.query.token;
  const pgid = req.query.pgid;

  switch (pgid) {
    case "sapg01":
      res.sendFile(path.join(__dirname, "/public/toxicParenting.html"));
      break;

    case "sapg02":
      res.sendFile(path.join(__dirname, "/public/bodyShaming.html"));

      break;

    case "sapg03":
      res.sendFile(path.join(__dirname, "/public/onlineAttack.html"));

      break;

    case "sapg04":
      res.sendFile(path.join(__dirname, "/public/dowry.html"));

      break;
    case "sapg05":
      res.sendFile(path.join(__dirname, "/public/aarthavamAcharangal.html"));

      break;

    case "sapg06":
      res.sendFile(path.join(__dirname, "/public/racism.html"));

      break;
    case "sapg07":
      res.sendFile(path.join(__dirname, "/public/childMarriage.html"));

      break;

    case "sapg08":
      res.sendFile(path.join(__dirname, "/public/childLabour.html"));

      break;

    case "sapg09":
      res.sendFile(path.join(__dirname, "/public/LGBTQ.html"));

      break;

    case "sapg10":
      res.sendFile(path.join(__dirname, "/public/forcedProstitution.html"));
      break;

    case "sapg11":
      res.sendFile(path.join(__dirname, "/public/victimBlaming.html"));

      break;

    case "sapg12":
      res.sendFile(path.join(__dirname, "/public/postMaritalRape.html"));

      break;

    case "sapg13":
      res.sendFile(path.join(__dirname, "/public/acidAttack.html"));

      break;
    case "sapg14":
      res.sendFile(path.join(__dirname, "/public/toxicRelationship.html"));

      break;

    case "sapg15":
      res.sendFile(path.join(__dirname, "/public/widow.html"));

      break;
    case "sapg16":
      res.sendFile(path.join(__dirname, "/public/matrimonialSite.html"));

      break;

    case "sapg17":
      res.sendFile(path.join(__dirname, "/public/forcedCareerChoosing.html"));

      break;

    case "sapg18":
      res.sendFile(path.join(__dirname, "/public/peerPressure.html"));

      break;

    default:
      console.log(pgid + "not found!");
      break;
  }
  const link = "localhost:3000/abbu?dat=dd4sWs&token=sa32&pgid=sapg01";
});

app.listen(3000, function () {});

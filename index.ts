import Mustache = require("mustache");
import fs = require("fs");
const MUSTACHE_MAIN_DIR = "./main.mustache";

async function isToday(dateParameter: any): Promise<boolean> {
  const today = new Date();
  return (
    dateParameter.getDate() === today.getDate() &&
    dateParameter.getMonth() === today.getMonth()
  );
}

let special = "";

switch (special) {
  case isToday(new Date("01-01-2000")) as any:
    special = "Happy New Year to me !!!";
    break;
  case isToday(new Date("02-21-2000")) as any:
    special = "Happy Birthday to my mother !!!";
    break;
  case isToday(new Date("03-01-2000")) as any:
    special = "Happy Birthday to my father !!!";
    break;
  case isToday(new Date("06-03-2000")) as any:
    special = "Happy Birthday to my brother !!!";
    break;
  case isToday(new Date("11-07-2000")) as any:
    special = "Happy Birthday to Tam-sensei !!!";
    break;
  case isToday(new Date("08-02-2000")) as any:
    special = "Happy Birthday to Trs !!!";
    break;
  case isToday(new Date("01-12-2000")) as any:
    special = "Happy Birthday to Buu !!!";
    break;
  case isToday(new Date("11-24-2000")) as any:
    special = "Happy Birthday to Cat !!!";
    break;
  case isToday(new Date("02-19-2000")) as any:
    special = "Happy Birthday to you !!!";
    break;
  default:
    special = "";
}

let DATA = {
  special: special,
  name: "Ho Xuan Vinh",
  date: new Date().toLocaleDateString("en-FR", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: "Europe/Stockholm",
  }),
};
function action() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err: any, data: any) => {
    if (err) throw err;
    const output = Mustache?.render(data.toString(), DATA);
    fs?.writeFileSync("README.md", output as string);
  });
}
action();

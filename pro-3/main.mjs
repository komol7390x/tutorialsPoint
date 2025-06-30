// main.mjs
import { fork } from "child_process";

const startYear = 2024;
const startMonth = 7;

const today = new Date();
const endYear = today.getFullYear();
const endMonth = today.getMonth() + 1;

const monthsList = [];

let y = startYear;
let m = startMonth;

while (y < endYear || (y === endYear && m <= endMonth)) {
  const mm = String(m).padStart(2, "0");
  monthsList.push({ year: String(y), month: mm });
  m++;
  if (m > 12) {
    m = 1;
    y++;
  }
}

console.log("Ishga tushadigan oylar:", monthsList);

function runNext(index) {
  if (index >= monthsList.length) {
    console.log("Barcha oylar tugadi.");
    return;
  }

  const { year, month } = monthsList[index];
  console.log(`Ishga tushyapti: ${year}-${month}`);

  const child = fork("./worker.mjs", [year, month]);

  child.on("close", (code) => {
    console.log(`Oy ${year}-${month} tugadi, exit code ${code}`);
    runNext(index + 1);
  });
}

runNext(0);

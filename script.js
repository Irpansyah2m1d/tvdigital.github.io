window.onload = function () {
  jam();
  inter();
  //   wSholat();
};
const tJam = document.querySelector("span.jam");
const date = document.querySelector("span.date");
const alarmSholat = document.querySelectorAll("table tr:nth-child(2) td");
function jam() {
  let d = new Date(),
    h,
    m,
    s;
  h = set(d.getHours());
  m = set(d.getMinutes());
  s = set(d.getSeconds());

  // Hari dan Tanggal
  const nHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
  const tanggal = d.getUTCDate();
  const hari = d.getUTCDay();
  const bulan = d.getMonth();
  const tahun = d.getUTCFullYear();

  date.innerHTML = nHari[hari - 1] + ", " + tanggal + "/" + ("0" + (1 + bulan)) + "/" + tahun;

  // Akhir Hari dan Tanggal

  if (h == 04 && m == 38) {
    // console.log("ganteng");
    // lagu();
    // const sound = new Audio("back.mp3").;
    // sound.played;
    add_line();
    alarmSholat[0].style.backgroundColor = w[i++];
  } else if (h == 23 && m == 05) {
    alarmSholat[1].style.backgroundColor = w[i++];
  } else if (h == 06 && m == 10) {
    alarmSholat[2].style.backgroundColor = w[i++];
  } else if (h == 12 && m == 08) {
    alarmSholat[3].style.backgroundColor = w[i++];
  } else if (h == 15 && m == 29) {
    alarmSholat[4].style.backgroundColor = w[i++];
  } else if (h == 18 && m == 08) {
    alarmSholat[5].style.backgroundColor = w[i++];
    //   inter();
  } else if (h == 19 && m == 22) {
    alarmSholat[6].style.backgroundColor = w[i++];
    //   inter();
  } else {
    alarmSholat.forEach(function (alarm) {
      alarm.style.backgroundColor = "rgb(53, 50, 50)";
    });
  }
  tJam.innerHTML = h + ":" + m + ":" + s;
  // Akhir Waktu sholat

  setTimeout("jam()", 1000);
  setTimeout("inter()", 1000);
}

function set(a) {
  a = a < 10 ? "0" + a : a;
  return a;
}

const w = ["red", "rgb(53, 50, 50)"];
let i = 0;
function inter() {
  if (i == w.length) {
    i = 0;
  }
}

const gambar = ["gambar1", "gambar2", "gambar3", "gambar4", "gambar5", "gambar6"];
let g = 0;
function slide() {
  // Slide Gambar
  const getGambar = document.querySelector(".slide-gambar img");
  // getGambar.getAttribute("src");
  // console.log(getGambar);

  getGambar.setAttribute("src", "img/" + gambar[g++] + ".png");
  if (g == gambar.length) {
    g = 0;
  }
  setTimeout("slide()", 2500);
}

function add_line() {
  var line = document.createElement("audio");
  var head = document.getElementsByTagName("body")[0];
  line.type = "audio/mp3";
  line.src = "back.mp3";
  line.id = "bgSong";
  line.autoplay = true;
  line.loop = true;
  head.appendChild(line);
}

// function lagu() {
//   const sound = new Audio("back.mp3");
//   sound.played;
//   // audio.play();
// }
// lagu();
slide();

// let d = new Date(),
//   h,
//   m,
//   s;
// h = set(d.getHours());
// m = set(d.getMinutes());
// s = set(d.getSeconds());

// console.log(inter());

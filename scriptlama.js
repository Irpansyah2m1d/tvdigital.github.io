// const warna = [
//   "red",
//   "green",
//   "lightgreen",
//   "lightblue",
//   "yellow",
//   "grey",
//   "aqua",
//   "blueviolet",
//   "brown",
//   "salmon",
//   "skyblue",
//   "snow",
// ];
// let i = 0;
// const body = document.body;

// const wBody = setInterval(function () {
//   body.style.backgroundColor = warna[i++];
//   body.style.transition = "1s";

//   if (i === warna.length) {
//     i = 0;
//   }
// }, 500);

// const textH1 = [
//   "Tidak ada yang pasti terjadi",
//   "di Dunia ini",
//   "KECUALI",
//   "KEMATIAN",
//   "Dan",
//   "Tidak Ada yang lebih dekat",
//   "Dari Kita",
//   "KECUALI",
//   "KEMATIAN",
// ];
// let j = 0;
// const h1 = document.querySelector("h1");
// const tH1 = setInterval(function () {
//   h1.innerHTML = textH1[j++];
//   h1.style.transition = "1s";

//   if (j === textH1.length) {
//     j = 0;
//   }
// }, 3000);

// Latihan 2

// 1 detik = 1000
window.setTimeout("waktu()", 1000);
const jamTampil = document.querySelector("span");

// const waktu = new Date().getTime();

// const getJam = (waktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);

// const wImsak =
// console.log(typeof);
// let i = 0;
// function cek() {
//   const warn = ["red", "white"];
//   wSholat[1].style.backgroundColor = warn[i++];
//   if (i === warn.length) {
//     i = 0;
//   }
//   setTimeout("cek()", 1000);
// }
// const wSholat = document.querySelectorAll("table tr:nth-child(2) td");
// function waktu() {
//   var tanggal = new Date();
//   setTimeout("waktu()", 1000);
//   let detik = set(tanggal.getSeconds());
//   let menit = set(tanggal.getMinutes());
//   let jam = set(tanggal.getHours());
//   //   console.log(menit);

//   function set(a) {
//     a = a < 10 ? "0" + a : a;
//     return a;
//   }
//   if (jam === 20 && menit === 24) {
//     cek();
//     // setInterval(function () {
//     //   const warn = ["red", "white"];
//     //   wSholat[1].style.backgroundColor = warn[i++];
//     //   if (i === warn.length) {
//     //     i = 0;
//     //   }
//     // }, 1000);
//     // function per() {
//     //   const warn = ["red", "white"];
//     //   wSholat[1].style.backgroundColor = warn[i++];
//     //   if (i === warn.length) {
//     //     i = 0;
//     //   }
//     //   setTimeout("per()", 1000);
//     // }
//   }
//   //   const ajam = tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds();
//   //   if (tanggal.getHours() === 19 && tanggal.getMinutes() === 58 && tanggal.getSeconds === 40) {
//   //     alert("Waktunya Solat");
//   //   }
//   //   if () {

//   //   }
//   jamTampil.innerHTML =
//     tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds();
// }

// waktu();
// const waktu = new Date(hours, minutes, seconds);
// const jam = waktu / (1000 * 60 * 60 * 60 * 24);

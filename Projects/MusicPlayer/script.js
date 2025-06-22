let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl = document.getElementById("ctrl");
let playPause = document.getElementById("playPause");


// time fomate

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) seconds = "0" + seconds;
  return `${minutes}:${seconds}`;
}


// Timespan

let crTime = document.getElementById("crTime");
let duration = document.getElementById("duration");

song.onloadeddata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  duration.innerText = formatTime(song.duration);
  crTime.innerText = formatTime(song.currentTime);
};

ctrl.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
  } else {
    song.pause();
    playPause.classList.add("fa-play");
    playPause.classList.remove("fa-pause");
  }
});

// Updation of time and progress bar

song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
  crTime.innerText = formatTime(song.currentTime);
});



progress.onchange = function () {
  song.currentTime = progress.value;
  song.play();
  playPause.classList.remove("fa-play");
  playPause.classList.add("fa-pause");
};

// all songs
let songs = [
  { song: "Chand Si Mehbooba Ho Meri.mp3", src: "chand.jpg" },
  { song: "Humsafar.mp3", src: "hamasafar.jpg" },
  { song: "MAAN MERI JAAN.mp3", src: "Maan.jpg" },
  { song: "O Mahi.mp3", src: "Mahi.jpg" },
  { song: "Satisfaya.mp3", src: "Satisfaya.jpg" },
  { song: "Titilian.mp3", src: "titlian.jpg" },
  { song: "Tohre me base raja.mp3", src: "Tohre.jpg" }
];
let songNumber = 0;

let songName = document.getElementById("sname");
let image = document.getElementById("img");

// Next Song play Function

function nextSong(){
  songNumber = (songNumber + 1) % songs.length;
  song.src = songs[songNumber].song;
  image.src = songs[songNumber].src;
  // changing name of song
  songName.innerText = songs[songNumber].song.replace(".mp3", "");

  playPause.classList.remove("fa-play");
  playPause.classList.add("fa-pause");
  song.play();
}

// adding function to addEventListener
let next = document.getElementById("next");

next.addEventListener("click", nextSong);

//previous song function
function prevSong(){
  songNumber = (songNumber - 1 + songs.length) % songs.length;
  song.src = songs[songNumber].song;
  image.src = songs[songNumber].src;
  // changing name of song
  songName.innerText = songs[songNumber].song.replace(".mp3", "");

  playPause.classList.remove("fa-play");
  playPause.classList.add("fa-pause");
  song.play();
}

// adding function to addEventListener
let prev = document.getElementById("prev");

prev.addEventListener("click",prevSong);


// automatically play nex song when one song ends

song.addEventListener("ended", nextSong);






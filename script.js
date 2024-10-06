let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let play = document.getElementById("play");
let playIcon = document.getElementById("playIcon"); // Corrected the function here
let gif = document.getElementById("gif"); // Assuming you have a gif element
let songName = document.getElementsByClassName("songName");
let progressBar = document.getElementById("myProgressBar");
let songItem = Array.from(document.querySelectorAll(".songitem"));
let master = document.getElementsByClassName("MastersongName");

console.log(play);

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItem.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

console.log(play);

// Play button event listener to toggle play/pause
// play.addEventListener("click", () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     playIcon.src = "items/pause.svg"; // Change to pause icon

//     gif.style.opacity = 1; // Show gif when playing
//   } else {
//     audioElement.pause();
//     playIcon.src = "items/play.svg"; // Change back to play icon
//     gif.style.opacity = 0; // Hide gif when paused
//   }
// });

// audioElement.addEventListener("timeupdate", () => {
//   let progress = parseInt(
//     (audioElement.currentTime / audioElement.duration) * 100
//   );
//   progressBar.value = progress;
// });
// progressBar.addEventListener("change", () => {
//   audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
// });

// let makeallplays = Array.from(document.getElementsByClassName("play1")).forEach(
//   (element, index) => {
//     element.addEventListener("click", () => {
//       // First, reset all play buttons to the play icon
//       Array.from(document.getElementsByClassName("play1")).forEach((el) => {
//         el.src = "items/play.svg";
//       });

//       // Check if the current song is the same or different
//       if (
//         audioElement.paused ||
//         !audioElement.src.includes(songs[index].filePath)
//       ) {
//         // Set the source to the clicked song if different
//         audioElement.src = songs[index].filePath;

//         // Play the audio
//         audioElement.play();
//         element.src = "items/pause.svg"; // Change icon for the current song to pause
//         playIcon.src = "items/pause.svg"; // Global play/pause icon
//         songName.innerText = songs[index].songName; // Update song name display
//         gif.style.opacity = 1; // Show the gif when playing
//       } else {
//         // If it's the same song, pause it
//         audioElement.pause();
//         element.src = "items/play.svg"; // Change icon for the current song to play
//         playIcon.src = "items/play.svg"; // Global play/pause icon
//         gif.style.opacity = 0; // Hide gif when paused
//       }
//     });
//   }
// );

// function playSong(index) {
//   audioElement.src = songs[index].filePath;
//   audioElement.play();
//   playIcon.src = "items/pause.svg"; // Update play/pause icon
//   gif.style.opacity = 1; // Show gif when playing
//   songName[0].innerText = songs[index].songName; // Update song name in UI
// }

// // Previous button functionality
// let prev = document.getElementById("previous");
// prev.addEventListener("click", () => {
//   songIndex--;
//   if (songIndex < 0) {
//     songIndex = songs.length - 1;
//   }
//   playSong(songIndex);
// });

// // Next button functionality
// let next = document.getElementById("next");
// next.addEventListener("click", () => {
//   songIndex++;
//   if (songIndex >= songs.length) {
//     songIndex = 0;
//   }
//   playSong(songIndex);
// });

let song = document.getElementById("SongName");

play.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playIcon.src = "items/pause.svg"; // Change to pause icon
    gif.style.opacity = 1; // Show gif when playing
    songName.innerText = songs[songIndex].songName; // Update song name display
  } else {
    audioElement.pause();
    playIcon.src = "items/play.svg"; // Change back to play icon
    gif.style.opacity = 0; // Hide gif when paused
  }
});

function playSong(index) {
  audioElement.src = songs[index].filePath;
  audioElement.play();
  playIcon.src = "items/pause.svg"; // Update play/pause icon
  gif.style.opacity = 1; // Show gif when playing
  songName[0].innerText = songs[index].songName; // Update song name in UI
  master[0].innerText = songs[index].songName;
}

let makeallplays = Array.from(document.getElementsByClassName("play1")).forEach(
  (element, index) => {
    element.addEventListener("click", () => {
      Array.from(document.getElementsByClassName("play1")).forEach((el) => {
        el.src = "items/play.svg";
      });

      if (
        audioElement.paused ||
        !audioElement.src.includes(songs[index].filePath)
      ) {
        audioElement.src = songs[index].filePath;
        audioElement.play();
        element.src = "items/pause.svg"; // Change icon for the current song to pause
        playIcon.src = "items/pause.svg"; // Global play/pause icon
        songName.innerText = songs[index].songName; // Update song name display
        gif.style.opacity = 1; // Show the gif when playing
      } else {
        audioElement.pause();
        element.src = "items/play.svg"; // Change icon for the current song to play
        playIcon.src = "items/play.svg"; // Global play/pause icon
        gif.style.opacity = 0; // Hide gif when paused
      }
    });
  }
);

let prev = document.getElementById("previous");
prev.addEventListener("click", () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  master.innerText = songs[songIndex].songName;
  playSong(songIndex);
});

let next = document.getElementById("next");
next.addEventListener("click", () => {
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
    master.innerText = songs[songIndex].songName;
  }

  playSong(songIndex);
});

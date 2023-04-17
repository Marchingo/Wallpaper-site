let gtnEl = document.getElementById("gtn-el");
let renderPhotoEl = document.getElementById("renderPhoto");
let listEl = document.getElementById("list")

function getPhoto() {
  let randomValue = Math.floor(Math.random() * 20) + 21;
  console.log(randomValue);
  for (let i = 21; i <= randomValue; i++) {
    if (randomValue === i) {
      let randomcomparision = Math.floor(Math.random() * 20) + 21;
      if (randomValue === randomcomparision) {
        renderPhotoEl.innerHTML = `<img class='legendry-img' src='img${i}.jpg'>`;
        renderPhotoEl.innerHTML += `<embed src='winningsound.wav' type='audio/midi' autostart='true' hidden='true' loop='false'></embed>`;
        listEl.innerHTML += `<p><a href='img${i}.jpg' target='_blank'>l-WallPaper-${i}</a><p>`
        console.log("legendry");
      } else {
        renderPhotoEl.innerHTML = `<img class='img-dec' src='img${i}.jpg'>`;
      }
    } else {
      renderPhotoEl.textContent = "Sorry there is some technical error";
    }
  }
}

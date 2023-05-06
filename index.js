let gtnEl = document.getElementById("gtn-el");
let renderPhotoEl = document.getElementById("renderPhoto");
let listEl = document.getElementById("list");
let numberEL = document.getElementById("number-el");
let con = [];
let j
if (localStorage.getItem("listS")) {
  for( j=0; j<con.length; j++){

    
    listEl.innerHTML += `<p><a href='img${localStorage.getItem(con[j])}.jpg' target='_blank' download>l-WallPaper-${localStorage.getItem(con[j])}</a><p>`
  }
}
function getPhoto() {
  let randomValue = Math.floor(Math.random() * 3) + 21;
  console.log(randomValue);
  for (let i = 21; i <= randomValue; i++) {
    if (randomValue === i) {
      let randomcomparision = Math.floor(Math.random() * 3) + 21;
      if (randomValue === randomcomparision) {
        renderPhotoEl.innerHTML = `<img class='legendry-imgs' src='img${i}.jpg'>`;
        // renderPhotoEl.innerHTML += `<embed src='winningsound.wav' type='audio/midi' autostart='true' hidden='true' loop='false'></embed>`;
        listEl.innerHTML += `<p><a href='img${i}.jpg' target='_blank' download>l-WallPaper-${i}</a><p>`;
        con.push(i) ;
        localStorage.setItem("listS", con);
        console.log(localStorage.getItem(listS[2]))
        console.log("legendry");
      } else {
        renderPhotoEl.innerHTML = `<img class='img-doc' src='img${i}.jpg'>`;
      }
    } else {
      renderPhotoEl.textContent = "Sorry there is some technical error";
    }
  }
}

let count = 0;
function list_of_tap() {
  count++;
  numberEL.innerHTML = `${count}`
}

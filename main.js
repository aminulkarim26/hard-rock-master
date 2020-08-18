

let searchButton = document.getElementById("search");
searchButton.addEventListener('click', function () {
    let inputText = document.getElementById("inputText");
    fetch('https://api.lyrics.ovh/suggest/' + inputText.value)
        .then(res => res.json())
        .then(data => displaySongs(data))

})

function getLyrics(artistName, titleOfSong) {
    fetch(`https://api.lyrics.ovh/v1/${artistName}/${titleOfSong}`)
        .then(res => res.json())
        .then(song => {

            const currentLyric = document.getElementById('current-lyrics');

            currentLyric.innerText = song.lyrics;


        })



}

function displaySongs(data) {

    const parent = document.getElementById('lyrist');

    parent.innerHTML = "";


    for (let i = 0; i < 10; i++) {
        const element = data.data[i];


        parent.innerHTML += `<class="author lead" ><strong>${element.title}</strong> Album by <span>${element.artist.name}</span> <button class="btn btn-success" id ="lastBtn" onclick="getLyrics('${element.artist.name}','${element.title}')"> Get Lyrics</button> </p>`


    }



}

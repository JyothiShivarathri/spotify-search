var a=[
    {
        artistName:'Lana Del Rey',
        uri:'spotify:artist:00FQb4jTyendYWaN8pK0wa',
        song:"Norman Fucking Rockwell!",
        Album:"spotify:album:5XpEKORZ4y6OrCZSKsi46A",
        image:"https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9"
    },
    {
        artistName:'Arjith Singh',
        uri:'https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw',
        song:"Apna Bana Le",
        Album:"https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw",
        image:"https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg"
           
    }
    

]


function search() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    for (let i = 0; i < a.length; i++) {
        // Convert all properties to lowercase for case-insensitive search
        const artistName = a[i].artistName.toLowerCase();
        const song = a[i].song.toLowerCase();
        const album = a[i].Album.toLowerCase();

        // Check if any property contains the search input
        if (artistName.includes(searchInput) || song.includes(searchInput) || album.includes(searchInput)) {
            const artistNameElement = document.createElement("p");
            artistNameElement.textContent = "Artist: " + a[i].artistName;

            const uri = document.createElement("a");
            uri.textContent = "Playlist";
            uri.href = a[i].uri;
            uri.target = "_blank";

            const songElement = document.createElement("p");
            songElement.textContent = "Song: " + a[i].song;

            const albumElement = document.createElement("a");
            albumElement.textContent = "Album ";
            albumElement.href = a[i].Album;
            albumElement.target = "_blank";

            const albumImage = document.createElement("img");
            albumImage.src = a[i].image;
            albumImage.style.maxWidth = "150px";

            resultsDiv.appendChild(artistNameElement);
            resultsDiv.appendChild(uri);
            resultsDiv.appendChild(songElement);
            resultsDiv.appendChild(albumElement);
            resultsDiv.appendChild(albumImage);
        }
    }
}
let btn=document.querySelector("#btn")
btn.addEventListener("click",search)


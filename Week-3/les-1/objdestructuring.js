const song = {
    name: "Flowers",
    artist: "Miley"
}

const edit = {
    name: "7 Things"
}

function editSong(s, {name}) {
    s.name = name
}

editSong(song, edit);
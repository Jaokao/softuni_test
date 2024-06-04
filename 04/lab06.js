function solve(band, album, song) {

    let arrBand = Array.from(band);

    let arrAlbum = Array.from(album);

    let arrSong = Array.from(song);

    let timePlay = (arrAlbum.length * arrBand.length * arrSong.length) / 2

    console.log(`The plate was rotated ${Math.ceil(timePlay / 2.5)} times.`)
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')
solve('Rammstein', 'Sehnsucht', 'Engel')
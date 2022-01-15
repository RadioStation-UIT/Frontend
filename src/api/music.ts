const musics: {
    idSong: string,
    nameSong: string,
    url: string,
    mainImg: string,
    time: number
    numberListen: number,
    singer:{
        idSinger: string,
        nameSinger: string,
    },
    playing: boolean
}[] = [
    {
        idSong: 'dsfjsdfj',
        nameSong: 'Love story',
        url: 'https://res.cloudinary.com/khoild11/video/upload/v1640681080/song/lovestory_gqaj6v.mp3',
        mainImg: 'https://i.ytimg.com/vi/6RssL81oWOI/maxresdefault.jpg',
        time: 275,
        numberListen: 0,
        singer:{
            idSinger: 'sdfsd11',
            nameSinger: 'Taylor Swift'
        },
        playing: false
    },
    {
        idSong: 'SWAFXZV',
        nameSong: 'You belong with me',
        url: 'https://res.cloudinary.com/khoild11/video/upload/v1642061858/song/taylor-swift-lyrics_iqoolw.mp3',
        mainImg: 'https://i.ytimg.com/vi/Xgf9XDT846M/maxresdefault.jpg',
        time: 232,
        numberListen: 0,
        singer:{
            idSinger: 'sdfsd11',
            nameSinger: 'Taylor Swift'
        },
        playing: false
    }
]

export {musics};
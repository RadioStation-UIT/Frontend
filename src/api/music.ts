const musics: {
    idSong: string,
    nameSong: string,
    url: string,
    mainImg: string,
    time: number
    numberListen: number,
    artists:{
        idArtists: string,
        nameArtists: string,
    }[]
}[] = [
    {
        idSong: 'SWAFXZK',
        nameSong: 'Love story',
        url: 'https://res.cloudinary.com/khoild11/video/upload/v1640681080/Music/Song/lovestory_gqaj6v.mp3',
        mainImg: 'https://i.ytimg.com/vi/6RssL81oWOI/maxresdefault.jpg',
        time: 275,
        numberListen: 0,
        artists:[
            {
                idArtists: 'AR-ASKFAZN',
                nameArtists: 'Taylor Swift'
            }
        ]
    },
    {
        idSong: 'SWAFXZV',
        nameSong: 'You belong with me',
        url: 'https://res.cloudinary.com/khoild11/video/upload/v1642061858/Music/Song/taylor-swift-lyrics_iqoolw.mp3',
        mainImg: 'https://i.ytimg.com/vi/Xgf9XDT846M/maxresdefault.jpg',
        time: 232,
        numberListen: 0,
        artists:[
            {
                idArtists: 'AR-ASKFAZN',
                nameArtists: 'Taylor Swift'
            }
        ]
    },
    {
        idSong: 'SWAFXKV',
        nameSong: 'Blank Space',
        url: 'https://res.cloudinary.com/khoild11/video/upload/v1644395901/Music/Song/BlankSpace_nvdaag.mp3',
        mainImg: 'https://i.ytimg.com/vi/Pwo8TtotyXA/maxresdefault.jpg',
        time: 235,
        numberListen: 0,
        artists:[
            {
                idArtists: 'AR-ASKFAZN',
                nameArtists: 'Taylor Swift'
            }
        ]
    },
    {
        idSong: 'SWBFXKV',
        nameSong: 'Girls like you',
        url: 'https://res.cloudinary.com/khoild11/video/upload/v1644396152/Music/Song/GirlLikeYou_ymandv.mp3',
        mainImg: 'http://theharmonica.vn/wp-content/uploads/2019/02/girlslikeyou.jpg',
        time: 279,
        numberListen: 0,
        artists:[
            {
                idArtists: 'AR-ASKFAZL',
                nameArtists: 'Maroon 5'
            },
            {
                idArtists: 'AR-CBAKSJF',
                nameArtists: 'Cardi B'
            }
        ]
    }
]

export {musics};
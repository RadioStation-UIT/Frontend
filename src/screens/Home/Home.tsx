import React, { useState, useEffect } from 'react';
import HomeLayout from '../../layout/HomeLayout/HomeLayout';
import axios from 'axios'

function Home() {
    let [index, setIndex] = useState(0);
    console.log(index);

    const [allTrack, setAllTrack] = useState<
        {
            idTrack: string,
            nameSong: string,
            url: string,
            mainImg: string,
            duration: number,
            numberListen: number,
            like: number,
            artists: {
                idArtists: string,
                nameArtists: string,
            }[],
            country: string,
            type: string[],
            weeklyViews: number,
            likeOfWeek: number,
        }[]
    >([]);
    const [allNotification, setAllNotification] = useState<
        {
            idNotification: string;
            title: string;
            type: string;
            idSNEA: string;
            image: string;
            content: string;
        }[]
    >([]);

    const [allAlbum, setAllAlbum] = useState<
        {
            idAlbum: string,
            idTrack: string[],
            artists: {
                idArtists: string,
                nameArtists: string,
            }[],
            like: number,
            name: string,
            image: string
        }[]
    >([])

    const [allArtists, setAllArtists] = useState<
        {
            idArtists: string,
            name: string,
            stageName: string,
            birthday: string,
            nation: string,
            prize: string[],
            description: string,
            image: string,
            like: number,
        }[]
    >([])

    const [allNews, setAllNews] = useState<
        {
            idNews: string,
            nameNews: string,
            timeUp: Date,
            like: number,
            content: string,
            comments: {
                idUser: string,
                content: string,
                like: number
            }[],
            image: string,
        }[]
    >([])

    const fetchAllTrack = async () => {
        return axios.get("http://localhost:5000/api/track")
            .then((res) => { setAllTrack(res.data); setIndex(index++) })
            .catch((err) => { console.log(err) })

    }

    const fetchAllNotification = async () => {
        return axios.get("http://localhost:5000/api/notification")
            .then((res) => { setAllNotification(res.data); setIndex(index++) })
            .catch((err) => { console.log(err) })

    }

    const fecthAllAlbum = async () => {
        return axios.get("http://localhost:5000/api/album")
            .then((res) => { setAllAlbum(res.data); setIndex(index++) })
            .catch((err) => { console.log(err) })
    }

    const fecthAllArtist = async () => {
        return axios.get("http://localhost:5000/api/artist")
            .then((res) => { setAllArtists(res.data); setIndex(index++) })
            .catch((err) => { console.log(err) })
    }

    const fecthNews = async () => {
        return axios.get("http://localhost:5000/api/news")
            .then((res) => { setAllNews(res.data); setIndex(index++) })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        fetchAllTrack()
    }, [])

    useEffect(() => {
        fetchAllNotification()
    }, [])

    useEffect(() => {
        fecthAllAlbum()
    }, [])

    useEffect(() => {
        fecthAllArtist()
    }, [])

    useEffect(() => {
        fecthNews()
    }, [])
    return (
        <>
            {
                index >= 4 ?
                    <HomeLayout
                        allTrack={allTrack}
                        allNotification={allNotification}
                        allAlbum={allAlbum}
                        allArtists={allArtists}
                        allNews={allNews}
                    /> : <h1>Loadding</h1>
            }
        </>
    )
}

export default Home;
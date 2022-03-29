import react, { useState, useEffect, useRef } from 'react';
import '../../asset/css/Artists.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WrapArtistComponent from '../../components/ArtistComponent/WrapArtistComponent';
import ArtistComponent from '../../components/ArtistComponent/ArtistComponent';
import { Endpoints } from '../../api/Endpoints';
import axios from 'axios';

function ArtistsLayout() {
    const [loading, setLoading] = useState<boolean>(false);
    const [nation, setNational] = useState<string>('');
    const [allArtists, setAllArtists] = useState<{
        idArtists: string,
        name: string,
        stageName: string,
        birthday: string,
        nation: string,
        prize: string[],
        description: string,
        image: string,
        like: number,
        type: string[]
    }[]>([]);

    const fetchAllArtists = async () => {
        axios.get(`${Endpoints}/api/artist`)
            .then((res) => {
                setLoading(true);
                setAllArtists(res.data);
            })
            .catch((err) => { console.log(err) })
    }

    const fetchArtistsCountry = async (_nation: string) => {
        setLoading(false)
        setNational(_nation);
        if (_nation === 'All Artists') {
            fetchAllArtists()
        } else {
            await axios.get(`${Endpoints}/api/artist/search-by-country`, {
                params: {
                    nation: _nation
                }
            })
                .then((res) => {
                    setLoading(true);
                    setAllArtists(res.data.artists);
                })
                .catch((err) => { console.log(err) })
        }
    }
    console.log(123)
    useEffect(() => {
        fetchAllArtists()
    }, [])

    useEffect(() => {
    }, [allArtists])

    return (
        <div className="artists container">
            <div className="artists__title">
                <h1>Artists</h1>
            </div>
            <WrapArtistComponent
                fetchArtistsCountry={fetchArtistsCountry}
            />
            {
                loading && allArtists.length !== 0?
                    <ArtistComponent
                        allArtists={allArtists}
                    />
                    :
                    <div>Loading...</div>
            }
        </div>
    )
}

export default ArtistsLayout;
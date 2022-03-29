import react, { useState, useEffect, useRef } from 'react';
import '../../asset/css/Artists.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';

interface TypeWrapArtistComponent{
    fetchArtistsCountry: (nation:string) => void;
}

const artistsCountry: string[] = [
    'All Artists', 'Việt Nam', 'USUK', 'Korean'
]
const artistsGenres: string[] = [
    'All Genres', 'Rock', 'EDM', 'Sad Song', '....'
]

function WrapArtistComponent({
    fetchArtistsCountry
}:TypeWrapArtistComponent) {
    const [textFind, setTextFind] = useState('');
    const [filterCountry, setFilterCountry] = useState<boolean>(false);
    const [filterGenres, setFilterGenres] = useState<boolean>(false);
    const [country, setCountry] = useState<string>('All Artists');
    const [genres, setGenres] = useState<string>('All Genres');
    const artistCountry = useRef<any>(null);
    const artistGenres = useRef<any>(null);

    const selectCountry = (item:string) =>{
        setCountry(item);
        fetchArtistsCountry(item);
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(e: any) {
            if (artistGenres.current && !artistGenres.current.contains(e.target)) {
                setFilterGenres(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [artistGenres]);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(e: any) {
            if (artistCountry.current && !artistCountry.current.contains(e.target)) {
                setFilterCountry(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [artistCountry]);

    return (
        <div className="artists__content">
            <div className="artists__filter">
                <div className="input__search">
                    <input type="search"
                        className="form-control rounded"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => { setTextFind(e.target.value) }}
                    />
                    <SearchIcon className="hd__icon__search" />
                </div>
                <div className="artists__filter_wrap">
                    <div
                        className="artist__select_country artist__select_margin_right_32"
                        ref={artistCountry}
                    >
                        <div className="select__current"
                            onClick={() => { setFilterCountry(!filterCountry) }}
                        >
                            <span>{country}</span>
                        </div>
                        <div
                            className={filterCountry ? 'list__filter visibility_visible' : 'list__filter visibility_hidden'}
                        >
                            <ul>
                                {artistsCountry.map((item) => {
                                    return (
                                        <li onClick={()=>{selectCountry(item)}}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div
                        className="artist__select_genres"
                        ref={artistGenres}
                    >
                        <div className="select__current"
                            onClick={() => { setFilterGenres(!filterGenres) }}
                        >
                            <span>{genres}</span>
                        </div>
                        <div
                            className={filterGenres ? 'list__filter visibility_visible' : 'list__filter visibility_hidden'}
                        >
                            <ul>
                                {artistsGenres.map((genres) => {
                                    return (
                                        <li onClick={() => { setGenres(genres) }}>{genres}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WrapArtistComponent;
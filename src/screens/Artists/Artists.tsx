import react, { useState, useEffect } from 'react';
import ArtistsLayout from '../../layout/ArtistsLayout/ArtistsLayout';
import axios from 'axios';
import { Endpoints } from '../../api/Endpoints';

function Artists() {

    return (
        <ArtistsLayout/>
    )
}

export default Artists;
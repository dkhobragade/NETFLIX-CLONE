import React, { useState, useEffect } from 'react'
import { movies } from '../../Routes/Api';
import NavBarStaring from './NavBarStaring';
import Page1 from './Page1';

const Bg = () => {

    const [bgImage, setBackgroundImage] = useState('');
    useEffect(() => {
        backgroundetails();
    }, [])

    const backgroundetails = async () => {
        let resp = await movies();
        const a = resp.data.titles
        console.log(a)
        const randomIndex = Math.floor(Math.random() * a.length);
        console.log(a[randomIndex])
        setBackgroundImage(a[randomIndex])
    }
    return bgImage && (
        <>
            <div style={{ backgroundImage: `url(${bgImage.jawSummary.backgroundImage.url})`, height: '100vh', backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover' }}>
                <NavBarStaring />
                <div style={{ color: 'white', fontSize: 50, marginLeft: 20, marginTop: 100 }}>
                    <img src={bgImage.jawSummary.logoImage.url} style={{ width: '40%' }} />
                    <div style={{ width: '50%', height: '50%' }}>
                        <h4 style={{ fontSize: 20, color: 'white', fontFamily: 'Cinzel Decorative, cursive' }}>{bgImage.jawSummary.synopsis}</h4>
                    </div>
                </div>
            </div>
            <Page1 />
        </>
    )
}

export default Bg

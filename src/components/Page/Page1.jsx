import React, { useState, useEffect } from 'react';
import { movies } from '../../Routes/Api.js'
import NavBarStaring from './NavBarStaring';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4
    }
};

const arrowStyle = {
    background: 'red',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.2)',
};


const Imagestyle = styled('img')({
    width: '100%',
    cursor: 'pointer'
})

const Page1 = () => {
    const [imgage, setimage] = useState([]);


    useEffect(() => {
        moviesdetails();
    }, [])

    const moviesdetails = async () => {
        let resp = await movies();
        console.log(resp.data.titles);
        setimage(resp.data.titles);

    }
    return (
        <>

            <h1 style={{ fontSize: 50, margin: 0, padding: 0, background: 'black', color: 'white', fontWeight: 500, fontFamily: 'Fasthand ,cursive' }}>Now Playing</h1>

            <Carousel responsive={responsive}
                arrowLeft={<div style={arrowStyle}><ArrowLeftIcon /></div>}
                swipeable={false}
                draggable={false}
                infinite={true}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={2000}>
                {
                    imgage.map(i => (

                        <div key={i.summary.id}>
                            <div style={{ position: 'relative' }}>
                                <Imagestyle style={{ cursor: 'pointer' }} src={i.jawSummary.backgroundImage.url} />
                                <div style={{ position: 'absolute', top: 0, left: 10, right: 0, bottom: 10, display: 'flex', alignItems: 'end', justifyContent: 'left', color: 'white', fontSize: 20 }}>
                                    {i.jawSummary.title}
                                </div>
                            </div>

                        </div>
                    ))
                }
            </Carousel >

        </>



    )
}

export default Page1

import NotificationsIcon from '@mui/icons-material/Notifications';
import { Typography, styled, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import Logo from '../../Images/NetFlixLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Popover from '@mui/material/Popover';
import '../Total.css'


const NavbarStyle = styled(Box)`
    display:flex;
    padding-left:20px;
    cursor:pointer;
    position: relative;
    color:white
`;
const ListStyle = styled(Box)`
    display:flex;
`;
const LeftPart = styled(Box)`
    display:flex;
`


const NavBarStaring = () => {

    return (
        <>
            <NavbarStyle className='conatiner'  >
                <img src={Logo} style={{ width: 120 }} />
                <ListStyle>
                    <Button style={{ color: 'white', marginRight: 50, marginTop: 10, marginLeft: 10 }}>Home</Button>
                    <Button style={{ color: 'white', marginRight: 50, marginTop: 10 }}>TV Shows</Button>
                    <Button style={{ color: 'white', marginRight: 50, marginTop: 10 }}>Movies</Button>
                    <Button style={{ color: 'white', marginRight: 50, marginTop: 10 }}>News & Popular</Button>
                    <Button style={{ color: 'white', marginRight: 50, marginTop: 10 }}>My List</Button>
                </ListStyle>
                <LeftPart>
                    <SearchIcon style={{ marginLeft: 120, marginTop: 20 }} />
                    <Typography style={{ marginTop: 20, marginLeft: 50 }}>Kids</Typography>
                    <NotificationsIcon style={{ marginTop: 20, marginLeft: 50 }} />
                    <Box>
                        <Button style={{ background: 'transparent', color: 'white', marginLeft: 20, marginTop: 18, height: 30, width: 50, padding: 10 }} >
                            <PersonIcon />
                            <ArrowDropDownIcon />
                        </Button>
                    </Box>
                </LeftPart>

            </NavbarStyle>

        </>
    )
}

export default NavBarStaring

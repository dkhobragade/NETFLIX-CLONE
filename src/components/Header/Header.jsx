import React, { useState } from 'react';
import '../Header/HeaderStyle.css'
import { NavLink } from 'react-router-dom';
import { Typography, styled, InputBase, Button } from '@mui/material'
import { Box } from '@mui/system';
import Logo from '../../Images/NetFlixLogo.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const HeaderCom = styled(Typography)`
    font-family:Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    font-weight:900;
    font-size:50px
`;
const HeaderBox = styled(Box)`
    margin-left:150px;
    margin-top:150px;
    margin-bottom:90px
`
const InputStyle = styled(InputBase)`
    background:#E8E8E8;
    border:2px solid grey;
    width:50%;
    padding:1%
    
`
const EmailStyle = styled(Box)`
    margin-top:20px
`;
const LogoStyle = styled('img')({
    width: '180px'
})
const InitialValue = {
    email: ''
}

const Header = () => {
    const [inputemail, Setinputemail] = useState(InitialValue)
    const handleemail = (e) => {
        Setinputemail({ ...inputemail, [e.target.name]: e.target.value })
        console.log(inputemail);
    }
    return (
        <div className="home">
            <div className="text-overlay">
                <Box style={{ display: 'flex' }}>
                    <LogoStyle src={Logo} style={{ marginLeft: 20, padding: 0, display: 'block' }} alt="" />
                    <Button variant="contained" style={{ background: '#505050', border: '2px solid white', marginRight: 20, height: 40, marginLeft: 800, marginTop: 35 }}>English</Button>
                    <NavLink to='/login' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{ height: 40, background: 'red', marginTop: 35 }}>Sign In</Button>
                    </NavLink>
                </Box>
                <HeaderBox>
                    <HeaderCom variant='h4'> Unlimited movies, TV shows and more.</HeaderCom>
                    <Typography variant='h5'>Watch anywhere. Cancel anytime.</Typography>
                    <Typography variant='h6'>Ready to watch? Enter your email to create or restart your membership.</Typography>
                    <EmailStyle>
                        <InputStyle type='email' name='email' onChange={(e) => handleemail(e)} style={{ fontSize: 16, marginRight: 20 }} placeholder='Email Address' autoComplete='off' />
                        <Button variant="contained" style={{ background: 'red', height: 55 }}>Get Started <ChevronRightIcon /></Button>
                    </EmailStyle>
                </HeaderBox>
            </div>
        </div>
    )
}

export default Header

import React, { useState } from 'react';
import '../Sign/SignIn.css';
import Logo from '../../Images/NetFlixLogo.png';
import { styled, Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { InputBase, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


const LogoStyle = styled('img')({
    width: '200px'
});
const InputSign = styled(InputBase)`
    width:80%
`;
const InitialDefalutValues = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [user, Setuser] = useState(InitialDefalutValues);
    const Valuechange = (e) => {
        Setuser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    return (
        <div className='signIn'>
            <NavLink to='/'>
                <LogoStyle src={Logo} />
            </NavLink>
            <Box className='SignInBox'>
                <Box sx={{ width: 390, height: 450, backgroundColor: 'rgba(0,0,0,.75)', marginLeft: 55 }} >
                    <Typography variant="h3" style={{ fontSize: 32, color: 'white', fontWeight: 500, fontFamily: '"Netflix Sans', paddingTop: 50 }} >Sign In</Typography>
                    <Box>
                        <InputSign name='email' onChange={(e) => Valuechange(e)} style={{ background: '#333333', marginTop: 50, height: 50, borderRadius: 5, padding: 10, color: 'white' }} placeholder="Email or Phone Number" autoComplete='off' /><br />
                        <InputSign name='password' type='password' onChange={(e) => Valuechange(e)} placeholder='Password' style={{ background: '#333333', marginTop: 30, height: 50, borderRadius: 5, padding: 10, color: 'white' }} />
                        <NavLink to='/home' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{ background: 'red', marginTop: 30, width: '80%', height: 50, fontWeight: 900 }}>Sign In</Button>
                        </NavLink>
                    </Box>
                    <Box style={{ display: 'flex', marginTop: 20, marginLeft: 40 }}>
                        <Typography style={{ color: '	#B0B0B0' }}>New to Netflix?</Typography>
                        <NavLink to='/' style={{ textDecoration: 'none' }}>
                            <Typography style={{ color: 'white' }}>Sign up now.</Typography>
                        </NavLink>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default SignIn

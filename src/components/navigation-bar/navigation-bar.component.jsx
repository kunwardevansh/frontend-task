import React, {Component,useState,useEffect, Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import { AppBar, Toolbar , IconButton, Typography, Stack,Button} from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = () =>{
    return(
        <div>
            {/* <div>
                <img src='https://assets2.kuvera.in/production/atlantis/web/assets/img/kuvera-logo-dark.svg'/>
                <h1>This is Navigation Bar</h1>
            </div> */}
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='large' color='inherit' edge='start'>
                    <img src='https://assets2.kuvera.in/production/atlantis/web/assets/img/kuvera-logo-dark.svg'
                    sx={{flexGrow:1}}/>
                    </IconButton>
                    {/* <Typography variant='h6' color='#00ccff' component='div'>
                        MUTUAL FUNDS
                    </Typography> */}
                    <Stack  direction='row' spacing={3}>
                        {/* <Button color='inherit' href='/home'>Home</Button>
                        <Button color='inherit' href='/explore'>Explore</Button>
                        <Button color='inherit' href='/about'>About</Button>
                        <Button color='inherit' href='/login'>Login</Button> */}
                        <div >
                            <Link to='/home'>
                                <Button className='navbar-button' color='inherit'>Home</Button>
                                </Link>
                            <Link to='/explore'>
                                <Button color='inherit'>Explore</Button>
                                </Link>
                            <Link to='/about'>
                                <Button color='inherit'>About</Button>
                                </Link>
                            <Link  to='/login'>
                                <Button color='inherit'>Login</Button>
                                </Link>
                        </div>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    )
}

export default NavigationBar;
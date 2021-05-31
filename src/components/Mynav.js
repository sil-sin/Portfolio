import React from 'react'
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar } from '@material-ui/core';

export default function Mynav(props) {
    const { onClick, modeSwitch } = props
    return (
        <div>
            <AppBar id="nav">

                <nav className={`${modeSwitch} navbar`}>
                    <Link to='#top'><img id='logoSS' src='../logosil.png' alt='logo' /></Link>
                    <span>
                        <Link to="#about" >About</Link>
                    </span>
                    <span>
                        <Link to={"#projects"} >Projects</Link>
                    </span>
                    <Brightness4RoundedIcon onClick={onClick} />
                </nav>
            </AppBar>

        </div >
    )
}


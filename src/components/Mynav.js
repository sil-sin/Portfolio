import React from 'react'
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import { HashLink as Link } from 'react-router-hash-link';
import { Info, AccountTreeOutlined, ContactMail } from '@material-ui/icons';

function Mynav(props) {
    const { onClick, modeSwitch } = props


    return (

        <>
            <nav className={`${modeSwitch} navbar`}>
                <Link to='#top'><img id='logoSS' src='../logosil.png' alt='logo' /></Link>

                <Link className='pop' to="#about" >  <span> About</span><Info /> </Link>

                <Link className='pop' to={"#projects"} >
                    <span>
                        Projects
                    </span> <AccountTreeOutlined />
                </Link>
                <Link className='pop' to={"#contactMe"} >
                    <span>
                        Contact
                    </span> <ContactMail />
                </Link>
                <Link className='pop' onClick={onClick}> {modeSwitch ? <span>Light</span> : <span>Dark</span>} <Brightness4RoundedIcon /></Link>
            </nav >
        </>
    )
}

export default Mynav
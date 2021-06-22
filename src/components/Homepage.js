import { Call, Email, GitHub, LinkedIn, Twitter, WhatsApp } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DialogActions, DialogContent, TextField } from '@material-ui/core';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_CtWs1YzgidOw4pPwk0MKF");

function Homepage(props) {
    const { modeSwitch } = props
    const [src, upSrc] = useState('../images/silpic.jpeg')
    const [error, upError] = useState(false)

    const [toSend, setToSend] = useState({
        from_name: null,
        to_name: null,
        message: null,
        from_email: null,
        phone: null,
        interests: null,
    });

    const mouseOver = () => {
        if (src.includes('silpic.jpeg')) {
            upSrc('../images/ironhacklogo.jpg')
        } else {
            upSrc('../images/silpic.jpeg')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = e.target
        console.log(email.value.includes('@'))
        console.log(name.value, email.value, phone.value, message.value)
        if (!name.value || !email.value || !email.value.includes('@') || !phone.value || !message.value) {
            console.log('empty')
            upError(true)
            setToSend({
                from_name: null,
                to_name: null,
                message: null,
                from_email: null,
                phone: null,
            })

        } else {
            console.log('senidng')
            send(

                'service_6xkxi2b',
                'template_387iwvd',
                toSend,
                'user_CtWs1YzgidOw4pPwk0MKF'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div id='top' className={modeSwitch}>
            <div id='header'>
                <div className='sectionCard ' >
                    <div className="hex center" data-aos="fade-zoom-in" >
                        <div className="hex__shape">
                            <div className="hex__shape">
                                <div className="hex__shape">
                                    <img className='profilePic' onMouseEnter={mouseOver} onMouseOut={mouseOver} src={`${src}`} alt='SilviSinanaj' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1>Silvi Sinanaj</h1>
                    <h2>Full (MERN) Stack Web Developer</h2>
                    <h3>Technologies I work with</h3>
                    <div className='techIcons'>
                        <div><img src='../icons/HTML5.svg' alt='html' />
                            <h2>HTML</h2>
                        </div>
                        <div>
                            <img src='../icons/CSS3.svg' alt='css' />
                            <h2>CSS</h2>
                        </div>
                        <div>
                            <img src='../icons/Javascript.svg' alt='JavaScript' />
                            <h2>JavaScript</h2>
                        </div>
                        <div>
                            <img src='../icons/mongodb.svg' alt='MongoDB' />
                            <h2>MongoDB</h2>
                        </div>
                        <div>
                            <img src='../icons/expressjs.svg' alt='ExpressJS' />
                            <h2>ExpressJS</h2>
                        </div>
                        <div>
                            <img src='../icons/reactjs.svg' alt='ReactJS' />
                            <h2>ReactJS</h2>
                        </div>
                        <div>
                            <img src='../icons/nodejs.svg' alt='NodeJS' />
                            <h2>NodeJS</h2>
                        </div>

                        <div>
                            <img src='../icons/bootstrap.svg' alt='Bootstrap' />
                            <h2>Bootstrap</h2>
                        </div>
                        <div>
                            <img src='../icons/materialui.svg' alt='Material-UI' />
                            <h2>Material UI</h2>
                        </div>
                        <div>
                            <img src='../icons/git.svg' alt='Git' />
                            <h2>Git</h2>
                        </div>

                    </div>
                </div>
            </div>

            <section id='about' data-aos="fade-in">
                <div className='aboutTxt'>
                    <h1> Hello!
                        <br /> I'm Silvi. Nice to meet you!
                    </h1>
                    <h4>
                        I am from Berat(Albania), based in Berlin. <br />
                        Since a little kid, I have always been fascinated by technology.
                        I have been a gamer and a computer geek since forever.
                        <br />
                        In my previous experiences, I've worked with different software,
                        from video/subtitle/photo editing programs to CRM software.
                        While working in the tourism industry as a Tour Organiser and Content Creator, I would catch myself also building websites using builders from WordPress, Wix, or GoDaddy.
                        I felt like it was time for me to finally follow my true passion.
                        <br />
                        Ironhack Full Stack Web Development Bootcamp was one of the best
                        experiences of my life. I had incredible teachers and met amazing,
                        creative people. I build my first web game, using HTML, JS, CSS,
                        and together with my classmates, we built fully functional back-end
                        and full-stack web apps.<br />
                        Now I'm looking for an opportunity to pursue a career
                        as a web developer, to help create beautiful websites and
                        transform my passion into a profession.
                    </h4>

                </div>
                <Link id='linkCv' className='shake' to='../Silvi-Sinanaj-CV.pdf' target="_blank" download><b>Download CV</b></Link>
            </section>

            <section id='projects' >
                <h1> My work</h1><br />
                <div id='allCards'>
                    <div className='projectCards shake' data-aos="fade-top" >
                        <h2>Gotta Win 'Em All</h2>
                        <img className='cardImg' src='../images/pokegame.png' alt='pokGame' />
                        <h3>Technology used</h3>
                        <h4>[HTML] [CSS] [JavaScript]</h4>
                        <p>Gotta Win Em All is my very first coding experience. After only 3 weeks at Ironhack we were able to create our very first webgame,
                            using our newly learned programming languages. The game is a Pokemon themed 2D side scroller with increasing difficulty and different
                            levels.
                        </p>
                        <span className=' linksProject' >
                            <a className='button' href='https://sil-sin.github.io/Gotta-Win-Em-All/' target="_blank" rel="noreferrer" ><b>Website <br /> Link</b></a>
                            <a className='button' href='https://github.com/sil-sin/Gotta-Win-Em-All' target="_blank" rel="noreferrer" ><b>Github <br /> Repository</b></a>
                        </span>
                    </div>
                    <div className='projectCards shake' data-aos="fade-top" >
                        <h2>Silver Tasker</h2>
                        <img className='cardImg' src='../images/silver.png' alt='pokGame' />
                        <h3>Technology used</h3>
                        <h4>[Handlebars] [CSS] [NodeJS] [ExpressJS] [MongoDB] [Bootstrap]</h4>
                        <p>Silver Tasker web application, is a task managing system build with the hotel business model in mind.
                            Using this application, the managers can create and assign tasks to their staff members and keep track of the task status.</p>
                        <span className=' linksProject'>
                            <a className='button' href='https://silver-tasker.herokuapp.com' target="_blank" rel="noreferrer" ><b>Website <br /> Link</b></a>
                            <a className='button' href='https://github.com/sil-sin/Silver-Tasker' target="_blank" rel="noreferrer" ><b>Github <br /> Repository</b></a>
                        </span>

                    </div>
                    <div className='projectCards shake' data-aos="fade-top">
                        <h2>FoodCafe</h2>
                        <img className='cardImg' src='../images/foodcafe.png' alt='pokGame' />
                        <h3>Technology used</h3>
                        <h4>[HTML] [CSS] [NodeJS] [ExpressJS] [MongoDB] [ReactJS] [Axios] [Material-ui]</h4>
                        <p>This is the final project of my Bootcamp. FoodCafe is a full-stack web app.
                            It's a cozy environment for people to connect around the common interest of food.
                            Users can create their profile,   can find, create, edit, or delete  recipes, and post about their food.</p>
                        <span className=' linksProject'>
                            <a className='button' href='https://food-cafe.herokuapp.com/' target="_blank" rel="noreferrer" ><b>Website Link</b></a><br />
                            <a className='button' href='https://github.com/jnmelio/FoodCafe-client' target="_blank" rel="noreferrer" ><b>Client Repository</b></a>
                            <a className='button' href='https://github.com/jnmelio/FoodCafe-server' target="_blank" rel="noreferrer" ><b>Server Repository</b></a>
                        </span>
                    </div>
                </div>
            </section>
            <div className='socials' id='slide' >
                <a className='shake' target="_blank" href='https://www.linkedin.com/in/silvi-sinanaj'
                    rel="noreferrer"><LinkedIn /></a>
                <a className='shake' target="_blank" href='https://github.com/sil-sin' rel="noreferrer"><GitHub /></a>
                <a className='shake' target="_blank" href='https://twitter.com/Silsin2' rel="noreferrer"><Twitter /></a>
                <a className='shake' target="_blank" href='mailto:silviberat@gmail.com' rel="noreferrer"><Email /></a>
                <a className='shake' target="_blank" href='https://wa.me/4917671613833' rel="noreferrer"><WhatsApp /></a>
                <a className='shake' target="_blank" href='tel:+4917671613833' rel="noreferrer"><Call /></a>
            </div>
            <div id='contactMe' data-aos="fade-in">
                <br />
                <h1> Lets get in contact</h1>
                <div id='icons'><a target="_blank" className='pop' href='https://www.linkedin.com/in/silvi-sinanaj' rel="noreferrer"><LinkedIn /><br />LinkedIn</a>
                    <a target="_blank" className='pop' href='https://github.com/sil-sin' rel="noreferrer"><GitHub /><br />GitHub</a>
                    <a target="_blank" className='pop' href='https://twitter.com/Silsin2' rel="noreferrer"><Twitter /><br />Twitter</a>
                    <a target="_blank" className='pop' href='mailto:silviberat@gmail.com' rel="noreferrer"><Email /><br />Email</a>
                    <a target="_blank" className='pop' href='https://wa.me/4917671613833' rel="noreferrer"><WhatsApp /><br />WhatsApp</a>
                    <a target="_blank" className='pop' href='tel:+4917671613833' rel="noreferrer"><Call /><br />Call</a></div>

                <form id='contactform' onSubmit={handleSubmit} >
                    <DialogContent >
                        <TextField onChange={handleChange} margin="dense" id="name" label="Name " type="text" name='from_name' fullWidth />
                        <TextField onChange={handleChange} margin="dense" id="email" label="Email Address " type="email" name='from_email' fullWidth />
                        <TextField margin="dense" id="phone" onChange={handleChange} label="Phone Number" type="text" name='phone' fullWidth />
                        <TextField multiline margin="dense" id="message" label="Message " onChange={handleChange} type="text" name='message' fullWidth />

                    </DialogContent>
                    <DialogActions>
                        <button className='button' type='submit' >
                            Send
                        </button>
                    </DialogActions>
                </form>
            </div>

            {error && <div id='error'>Please fill all the required* fields!</div>}

            <footer> <a href='mailto:silviberat@gmail.com'>silviberat@gmail.com</a>© <b>Silvi Sinanaj</b>. All Rights Reserved.</footer>
        </div >
    )
}

export default Homepage
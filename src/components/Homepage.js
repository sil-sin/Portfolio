import { Call, Email, GitHub, LinkedIn, Twitter, WhatsApp } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom'
export default function Homepage(props) {
    const { modeSwitch } = props


    return (
        <div id='top' className={modeSwitch}>
            <header>
                <div className='sectionCard'>
                    <div className="hex center">
                        <div className="hex__shape">
                            <div className="hex__shape">
                                <div className="hex__shape">
                                    <img className='profilePic' src='../images/silpic.jpeg' alt='SilviSinanaj' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1>Hello!<br></br> I am Silvi Sinanaj</h1>
                    <h4>Full (MERN) Stack Web Developer</h4>
                    <h4>Technologies I work with</h4>
                HTML | CSS | Flexbox | Bootstrap | Material-ui |
                Javascript (ES6) | React | NodeJS | ExpressJS | MongoDB |
                Git | GitHub | Trello |</div>
            </header>

            <section id='about' >
                <div className='aboutTxt'>
                    <h1> Hello, I'm Silvi. Nice to meet you.
                    </h1>
                    <h4>I am from Berat(Albania), based in Berlin. Since a little kid,
                    I have always been fascinated by technology. I have been a gamer and a computer geek since forever.<br />
                    In my previous experiences, I've worked with different software, from video/subtitle/photo editing programs to CRM software.
                    While working in the tourism industry as a Tour Organiser and Content Creator, I would catch myself also building websites
                    using builders from WordPress, Wix, or GoDaddy. I felt like it was time for me to finally follow my true passion.<br />
                    Ironhack Full Stack Web Development Bootcamp was one of the best experiences of my life.
                    Had incredible teachers and met amazing creative people.I build my first game using HTML,JS,CSS, and  together with my classmates build fully
                    functional back end and fullstack webapps.<br /> Now I'm looking for an oportunity to pursue a career as a web developer
                    ,to help create beautiful websites and transform my passion into a profession.</h4>

                </div>
                <Link id='linkCv' className='shake' to='../Silvi-Sinanaj-CV.pdf' target="_blank" download><b>Download CV</b></Link>
            </section>

            <section id='projects' >
                <h1> My work</h1><br />
                <div id='allCards'>
                    <div className='projectCards shake'>
                        <h2>Gotta Win 'Em All</h2>
                        <img className='cardImg' src='../images/pokegame.png' alt='pokGame' />
                        <h3>Technology used</h3>
                        <h4>[HTML] [CSS] [JavaScript]</h4>
                        <p>Gotta Win Em All is my very first coding experience. After only 3 weeks at Ironhack we were able to create our very first webgame,
                        using our newly learned programming languages. The game is a Pokemon themed 2D side scroller with increasing difficulty and different
                        levels.
                        </p>
                        <span className=' linksProject' >
                            <a className='projectLink' href='https://sil-sin.github.io/Gotta-Win-Em-All/' target="_blank" rel="noreferrer" ><b>Website Link</b></a>
                            <a className='projectLink' href='https://github.com/sil-sin/Gotta-Win-Em-All' target="_blank" rel="noreferrer" ><b>Github Repository</b></a>
                        </span>
                    </div>
                    <div className='projectCards shake'>
                        <h2>Silver Tasker</h2>
                        <img className='cardImg' src='../images/silver.png' alt='pokGame' />
                        <h3>Technology used</h3>
                        <h4>[Handlebars] [CSS] [NodeJS] [ExpressJS] [MongoDB] [Bootstrap]</h4>
                        <p>Silver Tasker web application, is a task managing system build with the hotel business model in mind.
                         Using this application, the managers can create and assign tasks to their staff members and keep track of the task status.</p>
                        <span className=' linksProject'>
                            <a className='projectLink' href='https://silver-tasker.herokuapp.com' target="_blank" rel="noreferrer" ><b>Website Link</b></a>
                            <a className='projectLink' href='https://github.com/sil-sin/Silver-Tasker' target="_blank" rel="noreferrer" ><b>Github Repository</b></a>
                        </span>

                    </div>
                    <div className='projectCards shake'>
                        <h2>FoodCafe</h2>
                        <img className='cardImg' src='../images/foodcafe.png' alt='pokGame' />
                        <h3>Technology used</h3>
                        <h4>[HTML] [CSS] [NodeJS] [ExpressJS] [MongoDB] [ReactJS] [Axios] [Material-ui]</h4>
                        <p>This is the final project of my Bootcamp. FoodCafe is a full-stack web app.
                        It's a cozy environment for people to connect around the common interest of food.
                        Users can create their profile,   can find, create, edit, or delete  recipes, and post about their food.</p>
                        <span className=' linksProject'>
                            <a className='projectLink' href='https://food-cafe.herokuapp.com/' target="_blank" rel="noreferrer" ><b>Website Link</b></a><br />
                            <a className='projectLink' href='https://github.com/jnmelio/FoodCafe-client' target="_blank" rel="noreferrer" ><b>Client Repository</b></a>
                            <a className='projectLink' href='https://github.com/jnmelio/FoodCafe-server' target="_blank" rel="noreferrer" ><b>Server Repository</b></a>
                        </span>
                    </div>
                </div>
            </section>
            <div className='socials'>
                <a className='shake' target="_blank" href='https://www.linkedin.com/in/silvi-sinanaj'
                    rel="noreferrer"><LinkedIn /></a>
                <a className='shake' target="_blank" href='https://github.com/sil-sin' rel="noreferrer"><GitHub /></a>
                <a className='shake' target="_blank" href='https://twitter.com/Silsin2' rel="noreferrer"><Twitter /></a>
                <a className='shake' target="_blank" href='mailto:silviberat@gmail.com' rel="noreferrer"><Email /></a>
                <a className='shake' target="_blank" href='https://wa.me/4917671613833' rel="noreferrer"><WhatsApp /></a>
                <a className='shake' target="_blank" href='tel:+4917671613833' rel="noreferrer"><Call /></a>
            </div>
            <div id='contactMe'>
                <h1> Lets get in contact</h1>
                <div id='icons'><a target="_blank" href='https://www.linkedin.com/in/silvi-sinanaj' rel="noreferrer"><LinkedIn /><br />LinkedIn</a>
                    <a target="_blank" href='https://github.com/sil-sin' rel="noreferrer"><GitHub /><br />GitHub</a>
                    <a target="_blank" href='https://twitter.com/Silsin2' rel="noreferrer"><Twitter /><br />Twitter</a>
                    <a target="_blank" href='mailto:silviberat@gmail.com' rel="noreferrer"><Email /><br />Email</a>
                    <a target="_blank" href='https://wa.me/4917671613833' rel="noreferrer"><WhatsApp /><br />WhatsApp</a>
                    <a target="_blank" href='tel:+4917671613833' rel="noreferrer"><Call /><br />Call</a></div>
            </div>
            <footer> <a href='mailto:silviberat@gmail.com'>silviberat@gmail.com</a>© <b>Silvi Sinanaj</b>. All Rights Reserved.</footer>
        </div>
    )
}

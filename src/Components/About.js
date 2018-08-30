import React, {Component} from "react";
import aboutPhoto from '../resources/Photos/aboutPhoto.jpg';
let resumeLink = 'https://drive.google.com/file/d/1c8ubHYkXqGDOepF3xdF1WiKrFRx7Z9ab/view?usp=sharing';

class About extends Component{
    video;
    render(){
        return(
            <div className="Content_Container">
                <h1>About Me</h1>
                <div className="about">
                    <img src = {aboutPhoto} alt = "kito pham" className="aboutPic"/>
                    <p className="aboutText">
                        Community-driven developer. Current University of Washington - Seattle student studying Informatics with Cybersecurity. Background
                        in Information and Telecommunications where I worked on and off for several years under an IT Consultant
                        company as a computer and networks consultant as well with customer service as a receptionist at a locally
                        popular nail salon.  Formerly campus outreach chair for social justice club Asian Coalition for Equality and
                        former Outreach chair for Annual ACT conference where I handled securing sponsorships with local non profit
                        organizations and acquired keynote speakers. An opportunity where I learned to communicate and connect with a
                        diverse cast of individuals and acquire leadership skills in managing tasks. Today, I just like to sit back
                        and code while seeing my projects come to life. I also do photography and design work as a hobby putting me
                        in positions where I have to change my way of thinking in to a more artistic and creative approach. My
                        varying experiences have given me the skill-set to be able to handle a wide range of roles and responsibilities
                        and the ability to think on my feet to flourish best in environments that are always changing.
                    </p>
                    <a href = {resumeLink}> Resume </a>
                    <h2>Contact Me</h2>
                    <ul>
                        <li>Email: kpham97@live.com </li>
                        <li>Phone: (509) 619 - 4686</li>
                        <li>GitHub: github.com/kpham97</li>
                        <li>LinkedIn: linkedin.com/in/kpham97</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export {About};
import React, { Component } from 'react';
import backicon from '../resources/backicon.png';
import comingSoonImage from '../resources/comingsoon.png';
import {Link} from 'react-router-dom'
import {codeProjects,designProjects,websiteProjects} from "./ProjectListings";

class Coding extends Component {
    render(){

        function intersperse(arr, sep) {
            if (arr.length === 0) {
                return [];
            }

            return arr.slice(1).reduce(function(xs, x, i) {
                return xs.concat([sep, x]);
            }, [arr[0]]);
        }

        return(
            <div className= "Content_Container">
                <div id="coding_projects">
                    <h1>Mobile Apps</h1>
                    <ul className="projects">
                        {codeProjects.map((page, index) => (
                            <li key = {index}>
                                <Link
                                    //onClick ={()=>{this.props.changePage(index)}}
                                    to={process.env.PUBLIC_URL + '/Projects/dev/'+ page.url}
                                    style={{ textDecoration: 'none', color: 'black'}}>
                                    <div className="projectImageWrap"><img className="projectImage" src={page.img} alt={page.img}/></div>
                                </Link>
                                <div className="projectText">
                                    <strong>{page.name}</strong><br />
                                    {page.type} : {intersperse(page.technology, ", ")}
                                </div>
                            </li>
                        ))}
                        <li className="comingSoon">
                            <div
                                style={{ textDecoration: 'none', color: 'black'}}>
                                <div className="projectImageWrap"><img className="projectImage" src={comingSoonImage} alt="coming soon"/></div>
                            </div>
                            <div className="projectText">
                                <strong>More works soon . . .</strong><br />
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="coding_projects">
                    <h1>Websites</h1>
                    <ul className="projects">
                        {websiteProjects.map((page, index) => (
                            <li key = {index}>
                                <Link
                                    //onClick ={()=>{this.props.changePage(index)}}
                                    to={process.env.PUBLIC_URL + '/Projects/dev/'+ page.url}
                                    style={{ textDecoration: 'none', color: 'black'}}>
                                    <div className="projectImageWrap"><img className="projectImage" src={page.img} alt={page.img}/></div>
                                </Link>
                                <div className="projectText">
                                    <strong>{page.name}</strong><br />
                                    {page.type} : {intersperse(page.technology, ", ")}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="design_projects">
                    <h1>Design</h1>
                    <ul className="projects">
                        {designProjects.map((page, index) => (
                            <li key = {index}>
                                <Link
                                    className="headerButton"
                                    //onClick ={()=>{this.props.changePage(index)}}
                                    to={process.env.PUBLIC_URL + '/projects/design/'+ page.url}
                                    style={{ textDecoration: 'none', color: 'black'}}>
                                    <img className="projectImage" src={page.img} alt={page.img}/>
                                </Link>
                                <div className="projectText">
                                    <strong>{page.name}</strong><br />
                                    {page.type} : {intersperse(page.technology, ", ")}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

class Project extends Component{
    render() {
        return (
            <div className="Content_Container">
                <div className="page_Container">
                    <Link to="/projects" className="backbutton"><img src={backicon} alt="back"/></Link>
                    <h1>{this.props.object.name}</h1>
                    <h4>{this.props.object.type}</h4>
                    <div className="technology">
                        <h3>Technologies</h3>
                        <ul>
                            {this.props.object.technology.map((word, index) => (
                                <li key={index}>
                                    {word}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img className="pageImage" src={this.props.object.img} alt='projectImage'/>
                    <a className="pageLink" href={this.props.object.link}> See More </a>
                    <div className="brief"><h2>Brief</h2>{this.props.object.brief}</div>
                    <div className="summary"><h2>Summary</h2>{this.props.object.summary}</div>

                    <div className="pageGallery">{this.props.object.pictures.map((picture, index) => (
                        <a href={picture} key={index}>
                            <img className="pageGalleryImage" src={picture} alt={picture}/>
                        </a>))}
                    </div>
                </div>
            </div>
        )
    }
}

export {Coding, Project};
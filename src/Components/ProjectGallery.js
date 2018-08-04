import React, { Component } from 'react';
import comingSoonImage from '../resources/comingsoon.png';
import {Link} from 'react-router-dom'
import {codeProjects,designProjects,websiteProjects} from "./ProjectListings";

class ProjectGallery extends Component {
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
                                    //onClick ={()=>{this.props.changePage(index)}}
                                    to={process.env.PUBLIC_URL + '/Projects/design/'+ page.url}
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
            </div>
        )
    }
}


export {ProjectGallery};
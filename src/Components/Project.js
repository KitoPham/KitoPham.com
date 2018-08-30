import React, { Component } from 'react';
import backicon from '../resources/icons/backicon.png';
import {Link} from 'react-router-dom'

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

                    <div className="sectionsContainer">{this.props.object.sections.map((sectionObject) => (
                        <div className="sectionBody">
                            <h2>{sectionObject.sectionname}</h2>
                            <div className="sectionDescription">{sectionObject.sectiondescr}</div>

                            <div className="pageGallery">{sectionObject.pictures.map((picture, index) => (
                                <a href={picture} key={index}>
                                    <img className="pageGalleryImage" src={picture} alt={picture}/>
                                </a>))}
                            </div>

                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}

export {Project}
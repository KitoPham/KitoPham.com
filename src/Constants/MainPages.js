import {HomePage} from "../Components/Home";
import {ProjectGallery} from "../Components/ProjectGallery";
import {Photography} from "../Components/Photography";
import {About} from "../Components/About";
import React from "react";

let MainPages = [
    {Component : <HomePage />, name : "Home"},
    {Component : <ProjectGallery />, name: "Projects"},
    {Component : <Photography />, name : "Photography"},
    {Component : <About />, name: "About"}
];

export {MainPages}
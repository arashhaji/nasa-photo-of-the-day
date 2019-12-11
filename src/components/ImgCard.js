import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgInfo from "./ImgInfo";

const ImgCard = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [explanation, setExplanation] = useState();

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=3EAHQjmCyuBAIUJSRuRrO7GpBT6QDoa0yNDSU1Yn')
            .then(response => {
                setTitle(response.data.title);
                setDate(response.data.date);

                setImage(response.data.url);
                setExplanation(response.data.explanation);
                console.log(response);
            });
    }, []);

    return (
        <div className="container">
            <ImgInfo title = {title} image = {image} day = {date} text = {explanation} /> 
        </div>
    )
}

export default ImgCard

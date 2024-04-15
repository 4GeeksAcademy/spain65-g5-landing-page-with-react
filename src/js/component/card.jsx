import React from "react";
import propTypes from "prop-types";


//create your first component
const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};


Card.propTypes = {
    image: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
    link: propTypes.string
};

export default Card
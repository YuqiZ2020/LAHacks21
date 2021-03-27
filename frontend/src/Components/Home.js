import React from 'react';
import "./Home.css";
import sample1 from "../Image/sample1.png";
import sample2 from "../Image/sample2.png";
import sample3 from "../Image/sample3.png";
import sample4 from "../Image/sample4.png";
import sample5 from "../Image/sample5.png";
export default class Home extends React.Component {
    render() {
        return (
            <div className="display-window">
                <div className="image-list">
                    <img src={sample1} alt="sample1"></img>
                    <img src={sample2} alt="sample2"></img>
                    <img src={sample3} alt="sample3"></img>
                    <img src={sample4} alt="sample4"></img>
                    <img src={sample5} alt="sample5"></img>
                </div>
            </div>
        )
    }
}
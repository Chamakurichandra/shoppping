import React, { Component } from 'react';
import "../App.css";
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footer: props.data
        }
    }
    render() {
        const { icon, info, name } = this.state.footer;
        return (
            <div >
                <h4 className="info" >{name}</h4>
                <dl>
                    <dd>{info.map((data, index) => (
                        <div className="mob-icon">{icon.length > 1 ? icon[index] : icon} {data}</div>
                    ))}</dd>
                </dl>
            </div>
        )
    }
}

















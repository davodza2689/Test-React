import React, {Component} from 'react';

export default class NewComponent extends Component {

    constructor(props) {
        super(props);
    }

    renderItem(item, idx) {
        return (
            <li key={idx}><b>{item.text}</b> - {item.id}</li>
        );
    }

    render() {
        return (
            <ul>
                { this.props.array.map(this.renderItem.bind(this)) }
            </ul>
        );
    }
}


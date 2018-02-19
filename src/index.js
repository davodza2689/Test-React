import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import NewComponent from './new';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: 'Text',
            timer: 0,
            array: [
                {
                    id: 1,
                    text: 'item 1'
                },
                {
                    id: 2,
                    text: 'item 2'
                },
                {
                    id: 3,
                    text: 'item 3'
                }
            ]
        };
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({ timer:this.state.timer+1 });
        }, 100);
    }

    inputOnChange(event) {
        const text = event.target.value;
        this.setState({text});
    }

    static propTypes = {
        h1Text: PropTypes.string.isRequired,
        btnText: PropTypes.string.isRequired
    };

    static defaultProps = {
        btnText: 'Click to me !!'
    };

    btnOnClick() {
        console.log('Button clicked!!');
    }

    render() {
        return (
            <div style={{backgroundColor: '#fff'}} className="test">
                <h1>{this.props.h1Text}</h1>
                <NewComponent array={ this.state.array } />
                <p>{ this.state.timer }</p>
                <input type="text" value={this.state.text} onChange={this.inputOnChange.bind(this)}/>
                <button onClick={this.btnOnClick}>{this.props.btnText}</button>
            </div>
        );
    }
}

ReactDom.render(
    <App h1Text={'App works !!'}/>,
    document.getElementById('app')
);


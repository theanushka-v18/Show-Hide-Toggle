import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor() {
        super();
        this.state = {
            show : true
        }
    }
    toggle(action) {
        if(action=='show') {
            this.setState({show : true});
        } else if(action=='hide') {
            this.setState({show : false});
        } else {
            this.setState({show : !this.state.show});
        }
    }
    render() {
        return (
            <>
                <div className="App">
                    {this.state.show && <h1>Show, Hide, Toggle</h1>}
                    <button onClick={()=>this.toggle('show')}>Show</button>
                    <button onClick={()=>this.toggle('hide')}>Hide</button>
                    <button id='btn' onClick={()=>this.toggle('toggle')}>Toggle</button>
                </div>
            </>
        )
    }
}

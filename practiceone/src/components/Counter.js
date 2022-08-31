import React from 'react';
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter';

export default class Counter extends React.Component {

    state = {
        count : 0,
    }

    incrementCounter = () => {
        this.setState((prevState)=>({
            count : prevState.count + 1,
        }))
    }

    render() {
        const {count} = this.state;
        return(

            <div>
                <ClickCounter count = {count} incrementCounter = {this.incrementCounter}/>
                <HoverCounter count = {count} incrementCounter = {this.incrementCounter}/>
            </div>


        );
    }
}
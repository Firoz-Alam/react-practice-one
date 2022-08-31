import React from 'react';

const withCounter = (OriginalCounter) => {

    class NewComponent extends  React.Component {

        state = {
            count: 0,
        }
    
        incrementCounter = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }))
        }



        render() {

            const {count} = this.state;

            return <OriginalCounter  count = {count} incrementCounter = {this.incrementCounter}/>
        }
        
    }

    return NewComponent;
}

export default withCounter;
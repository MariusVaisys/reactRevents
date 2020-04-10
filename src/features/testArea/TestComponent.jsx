import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testAction';
import { Button } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
    data: state.test.data
})

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

 class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>Test component</h1>
                <h3>The answer is: {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment' />
                <Button onClick={decrementCounter} negative  content='Decrement' />

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
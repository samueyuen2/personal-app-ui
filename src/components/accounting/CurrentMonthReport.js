import React, { Component } from 'react';
import { connect } from 'react-redux'

class CurrentMonthReport extends Component {
    render() {
        return (
            <h1>
                Current Month Report !!!
            </h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMonthReport)
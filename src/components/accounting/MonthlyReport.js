import React, { Component } from 'react';
import { connect } from 'react-redux'

class MonthlyReport extends Component {
    render() {
        return (
            <h1>
                Monthly Report !!!
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

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyReport)
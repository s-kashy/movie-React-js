import React, { Component } from "react"
import classes from "./Layout.css"
import Model from "../Model/Model"

import * as actionItem from "../../store/actions/index";
import PresentMovie from "../PresentMovie/PresentMovie"
import { connect } from "react-redux";
class Layout extends Component {

    render() {
        return (<div>
            <Model visible={this.props.stateOfModel}>
                {this.props.stateOfModel ? <PresentMovie /> : null}
            </Model>
            <main className={classes.content}>{this.props.children}</main>
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        stateOfModel: state.movies.openModelOurClose,

    };
};
const mapStateDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapStateDispatchToProps
)(Layout);
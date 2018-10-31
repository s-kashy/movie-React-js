import React, { Component } from "react";
import BackDrop from "../../Component/UI/BackDrop/BackDrop"
import Aux from "../../Hoc/Hoc"
import { connect } from "react-redux";
import * as actionItem from "../../store/actions/index";
import classes from "./Model.css";
class Modal extends Component {
  
  closeModelHandler = () => {
    this.props.closeModel();
  };
  render() {
    let visibilityState = this.props.visible ? "block" : "none";
    return (
      <Aux style={{ display: visibilityState }}>
        <BackDrop
          visible={this.props.visible}
          modalClosed={this.closeModelHandler}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.visible
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.visible ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    backDrop: state.movies.openModelOurClose
  };
};
const mapStateDispatchToProps = dispatch => {
  return {
    closeModel: () => dispatch(actionItem.closeModel())
  };
};
export default connect(
  mapStateToProps,
  mapStateDispatchToProps
)(Modal);

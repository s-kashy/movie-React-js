import React, { Component } from "react"
import { connect } from "react-redux";
import classes from "./PresentMovie"
import * as actionItems from "../../store/actions/index"
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
class PresentMovie extends Component {

    closeViewHandler=()=>{
        console.log("close view")
        this.props.closeView()
    }

    render() {
        return (
            <div className={classes.contactData}>
                <Card>
                    <CardBody>
                        {this.props.chosenMovie.description ?
                            <CardTitle>{this.props.chosenMovie.description}</CardTitle> :
                            <CardTitle>Data Wasn't Available</CardTitle>}

                        {this.props.chosenMovie.imageUrl ? <CardImg src={this.props.imageUrl} /> : <CardText>Image Not Available</CardText>}

                    </CardBody>
                    <Button onClick={this.closeViewHandler}>Close-View</Button>
                </Card>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        chosenMovie: state.movies.chosenMovie
    };
};
const mapStateDispatchToProps = dispatch => {
    return {

        closeView:()=>dispatch(actionItems.closeViewMovie())
    };
};
export default connect(mapStateToProps, mapStateDispatchToProps)(PresentMovie)
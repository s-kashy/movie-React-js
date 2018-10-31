import React, { Component } from 'react'
import classes from "./LandingPage.css";
import Spinner from "../../Component/UI/Spinner/Spinner"
import * as actionItem from "../../store/actions/index";
import Movie from "../../Component/movie/Movie"
import { connect } from "react-redux";



class LandingPage extends Component {
    componentDidMount() {

        this.props.getAll()
    }

    clickOnMovie=(event)=>{
      
        this.props.loadMovie(event.target.id)
    }
    render() {
        let listOfAllMovie = <Spinner />

        if (this.props.allMovies) {
            listOfAllMovie = this.props.allMovies.map((movie) => {
                return (<Movie
                    key={movie.id}
                    name={movie.name}
                    id={movie.id}
                    year={movie.year}
                    clicked={this.clickOnMovie}
                    category={movie.category} />)
            })
        }
        return (
            <div className={classes.LandingPage}>{listOfAllMovie}</div>

        )
    }


}
const mapStateToProps = state => {
    return {
        allMovies: state.movies.listOfMovie,
    };
};
const mapStateDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(actionItem.fetchAllMovie()),
        loadMovie:(id)=>dispatch(actionItem.getSingelMovie(id))
    }
}
export default connect(
    mapStateToProps,
    mapStateDispatchToProps
)(LandingPage);
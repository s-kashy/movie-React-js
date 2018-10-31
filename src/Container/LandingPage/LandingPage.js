import React, { Component } from 'react'
import classes from "./LandingPage.css";
import Spinner from "../../Component/UI/Spinner/Spinner"
import * as actionItem from "../../store/actions/index";
import Movie from "../../Component/movie/Movie"
import { connect } from "react-redux";
import QueryContainer from "../../Component/QueryContainer/QueryContainer"


function searchFor(term) {
    return function (x) {
       
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term
    }
}
class LandingPage extends Component {
    state = {
        movies: "",
        term: ""
    }
    componentDidMount() {

        this.props.getAll()
        this.setState({ movies: this.props.allMovies })

    }

    clickOnMovie = (id) => {
        
        this.props.loadMovie(id)
    }
    changeHandler = (event) => {
        this.setState({ term: event.target.value })



    }
    render() {
        let tempTerm = this.state.term
        let listOfAllMovie = <Spinner />

        if (this.props.allMovies) {
            listOfAllMovie = this.props.allMovies.filter(searchFor(tempTerm)).map((movie) => {
                return (<Movie
                    key={movie.id}
                    name={movie.name}
                    id={movie.id}
                    year={movie.year}
                    clicked={()=>this.clickOnMovie(movie.id)}
                    category={movie.category} />)
            })
        }
        return (
            <div >
                <QueryContainer change={(event) => this.changeHandler(event)} />
                <div className={classes.LandingPage}>{listOfAllMovie}</div>
            </div>

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
        loadMovie: (id) => dispatch(actionItem.getSingelMovie(id))
    }
}
export default connect(
    mapStateToProps,
    mapStateDispatchToProps
)(LandingPage);


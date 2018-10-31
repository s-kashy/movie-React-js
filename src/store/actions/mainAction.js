import * as actionType from "./actionType";
import axios from "axios";
import arraySort from "array-sort"


export const openModel = () => {
    return {
        type: actionType.OPEN_MODEL
    };
}
export const closeModel = () => {
    return {
        type: actionType.CLOSE_MODEL
    }
}
export const AddMovieList = (moives) => {
    console.log("add movies", moives)
    return {
        type: actionType.GET_ALL_MOVIES,
        data: moives

    }
}
export const fetchAllMovie = () => {

    return dispatch => {
        axios.get("http://x-mode.co.il/exam/allMovies/allMovies.txt").then((response) => {
            arraySort(response.data.movies, "year")
            AddMovieList(response.data.movies)
           
            dispatch(AddMovieList(response.data.movies))
        }).catch((err) => {
            console.log(err)
        })
    }

}
export const chosenMovie=(chosenMovie)=>{
    return{
        type:actionType.GET_SINGEL_MOVIE,
        data:chosenMovie
    }
}
export const getSingelMovie = (id) => {
    return dispatch => {
        axios.get(`http://x-mode.co.il/exam/descriptionMovies/${id}.txt`).then((res) => {
            console.log("res movie", res)
            const movieChosen={
                description: res.data.description,
                imageUrl:res.data.imageUrl
            }
            
         dispatch(chosenMovie(movieChosen))
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const closeViewMovie=()=>{
    return{
        type:actionType.CLOSE_VIEW_MOVIE
    }
}
import React from 'react';
import movies from '../../movieData.js'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies:movies,
            visibleMovies: movies
        }

    }
    
    addMovie(newMovie){
        console.log('addMovie invoked with ', newMovie)
        this.setState({
            movies:this.state.movies.concat(newMovie)
        })
    }

    search(query){
        console.log('invoked with ', query)
        if(!query){
            this.setState({
                visibleMovies:this.state.movies
            })
        } else {
            let filteredMovies = this.state.movies.filter((movie)=>(movie.title.toLowerCase().includes(query.toLowerCase())))
            if(filteredMovies.length > 0){
                this.setState({
                    visibleMovies: filteredMovies
                })   
            } else {
                this.setState({
                    visibleMovies: null
                })
            }
        }
    }

    render(){
        console.log('App rendered')
        return(
            <div className='appContainer'>
                <div className='headerContainer'>
                    <h1>Movie List</h1> 
                </div>
                <div className='searchContainer'>
                    <Search search={this.search.bind(this)}/>
                </div>
                <div className='movieList'>
                    <MovieList movies={this.state.visibleMovies && this.state.visibleMovies}/>
                </div>
            </div>
        )
    }
}

export default App;
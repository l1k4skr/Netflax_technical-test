import './App.css'
import responseMovies from './mocks/with-results.json'
import noResults from './mocks/no-results.json'
import Movies from './Components/Movies'



function App() {

	let { Search: movies } = responseMovies
	// movies = undefined

	const mappedMovies = movies?.map(movie => ({
		id: movie.imdbID,
		title: movie.Title,
		poster: movie.Poster
	}))
	
	return (
		<div>
			<header>
				<form action="GET">
					<label htmlFor="movie-finder"> Buscar: <input type="text" name="movie" id="movie_finder" /></label>
					<button type="submit">Buscar</button>
				</form>

			</header>

			<Movies movies={mappedMovies}/>

		</div>
	)
}

export default App

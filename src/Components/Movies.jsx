export function ListOfMovies({movies}) {
        console.log(movies)
		
		return (
			<>

				{movies.map(movies => (
						<div key={movies.id}>
							<h2>{movies.title}</h2>
							<img src={movies.poster} alt={movies.title} />
						</div>
					)
				)
				}
			
			</>
		)
	
}

export function NoMoviesResult() {
	return (
		<h2>No hay resultados</h2>
	)
}

export default function Movies({movies}) {
	const hasResults = movies && movies.length > 0
	console.log(movies.poster)
	console.log(hasResults)
	console.log(movies)
	return (
		<>
			{hasResults ? <ListOfMovies movies={movies} /> : <NoMoviesResult />}
		</>
	)
}




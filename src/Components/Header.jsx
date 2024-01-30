export function header() {
  return (
    <div>
      <header>
        <form action="GET">
          <label htmlFor="movie-finder"> Buscar: <input type="text" name="movie" id="movie_finder" /></label>
          <button type="submit">Buscar</button>
        </form>

      </header>
    </div>
  )
} 
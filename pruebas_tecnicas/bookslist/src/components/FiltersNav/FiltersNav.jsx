export function FiltersNav(library) {
  const uniqueGenres = [...new Set(library.map((book) => book.genre))];

  return (
    <nav className="lg:bg-slate-100">
      <div className="flex flex-col gap-6 max-w-screen-lg mx-auto px-4 md:flex-row md:justify-between lg:px-16">
        <div className="flex flex-col gap-3 bg-slate-100 p-3 md:grow lg:grow-0">
          <label htmlFor="genre" className="">
            Filtrar por género:
          </label>
          <select name="genre" id="genre">
            <option value="all">All</option>
            {uniqueGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 bg-slate-100 p-3 md:grow lg:grow-0">
          <label htmlFor="pages">Filtrar por cantidad de páginas:</label>
          <input
            name="pages"
            id="pages"
            min="0"
            max="1000"
            step="1"
            defaultValue="0"
            type="range"
          />
          <span>Máximo de páginas 0</span>
        </div>
      </div>
    </nav>
  );
}

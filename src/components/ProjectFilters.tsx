type ProjectFiltersProps = {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  searchTerm: string
  onSearchChange: (value: string) => void
}

export function ProjectFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}: ProjectFiltersProps) {
  return (
    <div className="filters-panel">
      <div className="category-filters" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'filter-chip active' : 'filter-chip'}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <label className="search-box" aria-label="Search projects">
        <span className="search-placeholder">Search projects...</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects..."
          aria-label="Search projects"
        />
      </label>
    </div>
  )
}

export default {
  totalPlanets: 0,
  page: 1,
  results: [],
  currentPlanet: {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    residents: [],
    films: [],
  },
  isPlanetLoading: false,
  isLoading: false,
  errorMessage: null,
};

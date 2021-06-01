import styles from './CountriesTable.module.css'

const orderBy = (countries, direction) => {
  if (direction === 'asc') {
    return [...countries].sort((a,b) => (a.population > b.population ? 1 : -1));
  }
  if (direction === 'desc') {
    return [...countries].sort((a,b) => (a.population > b.population ? -1 : 1));
  };

  return countries;
};

const CountriesTable = ({ countries }) => {
  const orderedCountries = orderBy(countries, 'desc');
  return ( 
  <div>
    <div className={styles.heading}>
      <button>
        <div>Name</div>
      </button>
      
      <button className={styles.heading_population}>
        <div>Population</div>
      </button>
    </div>

    {orderedCountries.map((country) => (
      <div className={styles.row}>
        <div className={styles.name}>{country.name}</div>

        <div className={styles.population}>{country.population}</div>
      </div>
      ))}
  </div>
  );
};

export default CountriesTable;
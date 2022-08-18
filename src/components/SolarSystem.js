import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => {
          const planetN = planet.name;
          const planetI = planet.image;
          return (
            <PlanetCard key={ planetN } planetName={ planetN } planetImage={ planetI } />
          );
        })}
      </div>
    );
  }
}

export default SolarSystem;

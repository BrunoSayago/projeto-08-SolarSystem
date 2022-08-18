import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system-section">
        <Title headline="Planetas" />
        <div className="planetas">
          {planets.map((planet) => {
            const planetN = planet.name;
            const planetI = planet.image;
            return (
              <PlanetCard
                key={ planetN }
                planetName={ planetN }
                planetImage={ planetI }
              />
            );
          })}
        </div>

      </div>
    );
  }
}

export default SolarSystem;

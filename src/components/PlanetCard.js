import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const textoAlt = `Planeta ${planetName}`;
    const semAcento = planetName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const className = `card card${semAcento}`;

    return (
      <div data-testid="planet-card" className={ className }>
        <p data-testid="planet-name">{planetName}</p>
        <div className="div-img">
          <img src={ planetImage } alt={ textoAlt } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

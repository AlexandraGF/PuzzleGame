import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FullPuzzle.scss';

class PuzzleImage extends Component {
    constructor(props) {
        super(props);
        const image = props.image;
        this.state = {clicked: false, image: require(`../../assets/puzzle1/${image}.jpg`)};

        this.click = this.click.bind(this);
      }

    click(){
    this.setState(state => ({
        clicked: !state.clicked,
        }));
    }

    render() {
        return (
            <div>
                <div className="fullPuzzleHeading" onClick={this.click}>
                    {this.state.clicked ? (<img className="fullImage" src={this.state.image}/>) : "Click here for full image" } 
                </div>
                <div className="authorDiv">Developed by <a className="authorAnchor" target="_blank" href="https://github.com/AlexandraGF">Alexandra Fina</a></div>
            </div>
        );
    }
}

PuzzleImage.propTypes = {
    image: PropTypes.string,
};

PuzzleImage.defaultProps = {
    image: '',
};

export default PuzzleImage;

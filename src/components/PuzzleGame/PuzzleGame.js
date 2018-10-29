import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PuzzleGame.scss';

class PuzzleGame extends Component {
    constructor(props) {
        super(props);
        const placeholder = require("../../assets/placeholder.jpg");
        const puzzleFolderName = props.puzzleFolder;
        this.state = {
            one: require(`../../assets/${puzzleFolderName}/11.jpg`), two: require(`../../assets/${puzzleFolderName}/7.jpg`), 
            three: require(`../../assets/${puzzleFolderName}/5.jpg`), four: require(`../../assets/${puzzleFolderName}/10.jpg`), 
            five: require(`../../assets/${puzzleFolderName}/12.jpg`), six: require(`../../assets/${puzzleFolderName}/14.jpg`),
            seven: require(`../../assets/${puzzleFolderName}/3.jpg`), eight: require(`../../assets/${puzzleFolderName}/2.jpg`), 
            nine: require(`../../assets/${puzzleFolderName}/13.jpg`),ten: require(`../../assets/${puzzleFolderName}/15.jpg`), 
            eleven: require(`../../assets/${puzzleFolderName}/4.jpg`), twelve: require(`../../assets/${puzzleFolderName}/16.jpg`),
            thirteen: require(`../../assets/${puzzleFolderName}/1.jpg`), fourteen: require(`../../assets/${puzzleFolderName}/9.jpg`), 
            fifteen: require(`../../assets/${puzzleFolderName}/6.jpg`), sixteen: require(`../../assets/${puzzleFolderName}/8.jpg`),
            empty1: placeholder, empty2: placeholder, empty3: placeholder,  empty4: placeholder, 
            empty5: placeholder, empty6: placeholder, empty7: placeholder, empty8: placeholder, 
            empty9: placeholder, empty10: placeholder, empty11: placeholder, empty12: placeholder, 
            empty13: placeholder, empty14: placeholder, empty15: placeholder, empty16: placeholder, 
            carryOn: placeholder, 
            };

        this.clickF1 = this.clickF1.bind(this); this.clickF2 = this.clickF2.bind(this);
        this.clickF3 = this.clickF3.bind(this); this.clickF4 = this.clickF4.bind(this);
        this.clickF5 = this.clickF5.bind(this); this.clickF6 = this.clickF6.bind(this);
        this.clickF7 = this.clickF7.bind(this); this.clickF8 = this.clickF8.bind(this);
        this.clickF9 = this.clickF9.bind(this); this.clickF10 = this.clickF10.bind(this);
        this.clickF11 = this.clickF11.bind(this); this.clickF12 = this.clickF12.bind(this);
        this.clickF13 = this.clickF13.bind(this); this.clickF14 = this.clickF14.bind(this);
        this.clickF15 = this.clickF15.bind(this); this.clickF16 = this.clickF16.bind(this);

        this.clickE1 = this.clickE1.bind(this); this.clickE2 = this.clickE2.bind(this);
        this.clickE3 = this.clickE3.bind(this); this.clickE4 = this.clickE4.bind(this);
        this.clickE5 = this.clickE5.bind(this); this.clickE6 = this.clickE6.bind(this);
        this.clickE7 = this.clickE7.bind(this); this.clickE8 = this.clickE8.bind(this);
        this.clickE9 = this.clickE9.bind(this); this.clickE10 = this.clickE10.bind(this);
        this.clickE11 = this.clickE11.bind(this); this.clickE12 = this.clickE12.bind(this);
        this.clickE13 = this.clickE13.bind(this); this.clickE14 = this.clickE14.bind(this);
        this.clickE15 = this.clickE15.bind(this); this.clickE16 = this.clickE16.bind(this);
      }

    clickF1(){
    this.setState(state => ({
        carryOn: state.one,
        one: state.carryOn,
        }));
    }

    clickF2(){
    this.setState(state => ({
    carryOn: state.two,
    two: state.carryOn,
    }));
    }

    clickF3(){
    this.setState(state => ({
    carryOn: state.three,
    three: state.carryOn,
    }));
    }

    clickF4(){
    this.setState(state => ({
    carryOn: state.four,
    four: state.carryOn,
    }));
    }

    clickF1(){
    this.setState(state => ({
    carryOn: state.one,
    one: state.carryOn,
    }));
    }


    clickF2(){
    this.setState(state => ({
    carryOn: state.two,
    two: state.carryOn,
    }));
    }

    clickF3(){
    this.setState(state => ({
    carryOn: state.three,
    three: state.carryOn,
    }));
    }

    clickF4(){
    this.setState(state => ({
    carryOn: state.four,
    four: state.carryOn,
    }));
    }

    clickF5(){
    this.setState(state => ({
    carryOn: state.five,
    five: state.carryOn,
    }));
    }


    clickF6(){
    this.setState(state => ({
    carryOn: state.six,
    six: state.carryOn,
    }));
    }

    clickF7(){
    this.setState(state => ({
    carryOn: state.seven,
    seven: state.carryOn,
    }));
    }

    clickF8(){
    this.setState(state => ({
    carryOn: state.eight,
    eight: state.carryOn,
    }));
    }

    clickF9(){
    this.setState(state => ({
    carryOn: state.nine,
    nine: state.carryOn,
    }));
    }


    clickF10(){
    this.setState(state => ({
    carryOn: state.ten,
    ten: state.carryOn,
    }));
    }

    clickF11(){
    this.setState(state => ({
    carryOn: state.eleven,
    eleven: state.carryOn,
    }));
    }

    clickF12(){
    this.setState(state => ({
    carryOn: state.twelve,
    twelve: state.carryOn,
    }));
    }

    clickF13(){
    this.setState(state => ({
    carryOn: state.thirteen,
    thirteen: state.carryOn,
    }));
    }


    clickF14(){
    this.setState(state => ({
    carryOn: state.fourteen,
    fourteen: state.carryOn,
    }));
    }

    clickF15(){
    this.setState(state => ({
    carryOn: state.fifteen,
    fifteen: state.carryOn,
    }));
    }

    clickF16(){
    this.setState(state => ({
    carryOn: state.sixteen,
    sixteen: state.carryOn,
    }));
    }




    clickE1(){
    this.setState(state => ({
        empty1: state.carryOn,
        carryOn: state.empty1,
        }));
    }

    clickE2(){
    this.setState(state => ({
    empty2: state.carryOn,
    carryOn: state.empty2,
    }));
    }

    clickE3(){
    this.setState(state => ({
        empty3: state.carryOn,
        carryOn: state.empty3,
        }));
    }

    clickE4(){
        this.setState(state => ({
            empty4: state.carryOn,
            carryOn: state.empty4,
            }));
    }

    clickE5(){
    this.setState(state => ({
        empty5: state.carryOn,
        carryOn: state.empty5,
        }));
    }

    clickE6(){
    this.setState(state => ({
    empty6: state.carryOn,
    carryOn: state.empty6,
    }));
    }

    clickE7(){
    this.setState(state => ({
        empty7: state.carryOn,
        carryOn: state.empty7,
        }));
    }

    clickE8(){
        this.setState(state => ({
            empty8: state.carryOn,
            carryOn: state.empty8,
            }));
    }

    clickE9(){
        this.setState(state => ({
            empty9: state.carryOn,
            carryOn: state.empty9,
            }));
        }
    
        clickE10(){
        this.setState(state => ({
        empty10: state.carryOn,
        carryOn: state.empty10,
        }));
        }
    
        clickE11(){
        this.setState(state => ({
            empty11: state.carryOn,
            carryOn: state.empty11,
            }));
        }
    
        clickE12(){
            this.setState(state => ({
                empty12: state.carryOn,
                carryOn: state.empty12,
                }));
        }

        clickE13(){
            this.setState(state => ({
                empty13: state.carryOn,
                carryOn: state.empty13,
                }));
            }
        
            clickE14(){
            this.setState(state => ({
            empty14: state.carryOn,
            carryOn: state.empty14,
            }));
            }
        
            clickE15(){
            this.setState(state => ({
                empty15: state.carryOn,
                carryOn: state.empty15,
                }));
            }
        
            clickE16(){
                this.setState(state => ({
                    empty16: state.carryOn,
                    carryOn: state.empty16,
                    }));
            }

    render() {
        const empties = [
            {id: 1, functionName: this.clickE1, placeholderName: this.state.empty1},
            {id: 2, functionName: this.clickE2, placeholderName: this.state.empty2},
            {id: 3, functionName: this.clickE3, placeholderName: this.state.empty3},
            {id: 4, functionName: this.clickE4, placeholderName: this.state.empty4},
            {id: 5, functionName: this.clickE5, placeholderName: this.state.empty5},
            {id: 6, functionName: this.clickE6, placeholderName: this.state.empty6},
            {id: 7, functionName: this.clickE7, placeholderName: this.state.empty7},
            {id: 8, functionName: this.clickE8, placeholderName: this.state.empty8},
            {id: 9, functionName: this.clickE9, placeholderName: this.state.empty9},
            {id: 10, functionName: this.clickE10, placeholderName: this.state.empty10},
            {id: 11, functionName: this.clickE11, placeholderName: this.state.empty11},
            {id: 12, functionName: this.clickE12, placeholderName: this.state.empty12},
            {id: 13, functionName: this.clickE13, placeholderName: this.state.empty13},
            {id: 14, functionName: this.clickE14, placeholderName: this.state.empty14},
            {id: 15, functionName: this.clickE15, placeholderName: this.state.empty15},
            {id: 16, functionName: this.clickE16, placeholderName: this.state.empty16},
        ];

        const functions = [
            {id: 1, functionName: this.clickF1, placeholderName: this.state.one},
            {id: 2, functionName: this.clickF2, placeholderName: this.state.two},
            {id: 3, functionName: this.clickF3, placeholderName: this.state.three},
            {id: 4, functionName: this.clickF4, placeholderName: this.state.four},
            {id: 5, functionName: this.clickF5, placeholderName: this.state.five},
            {id: 6, functionName: this.clickF6, placeholderName: this.state.six},
            {id: 7, functionName: this.clickF7, placeholderName: this.state.seven},
            {id: 8, functionName: this.clickF8, placeholderName: this.state.eight},
            {id: 9, functionName: this.clickF9, placeholderName: this.state.nine},
            {id: 10, functionName: this.clickF10, placeholderName: this.state.ten},
            {id: 11, functionName: this.clickF11, placeholderName: this.state.eleven},
            {id: 12, functionName: this.clickF12, placeholderName: this.state.twelve},
            {id: 13, functionName: this.clickF13, placeholderName: this.state.thirteen},
            {id: 14, functionName: this.clickF14, placeholderName: this.state.fourteen},
            {id: 15, functionName: this.clickF15, placeholderName: this.state.fifteen},
            {id: 16, functionName: this.clickF16, placeholderName: this.state.sixteen},
        ];
        return (
        <div className="puzzleWrap">
            <div>Puzzle Area: click to drop selected piece into the puzzle.
                <div className="puzzleContainer">
                    {empties.map(function(item, i){
                        return (<img key={i} className="puzzleAreaPiece" onClick={item.functionName} src={item.placeholderName} />);
                })}
                </div>
            </div>

            <div>Selected Piece
                <div className="puzzleContainerMiddle">
                    <img className="puzzlePieceMiddle" src={this.state.carryOn} />
                </div>
            </div>
        
            <div>Mixed Puzzle Pieces: click a piece to select it.
                <div className="puzzleContainer">
                    {functions.map(function(item, j){
                        return (<img key={j} className="puzzlePiece" onClick={item.functionName} src={item.placeholderName} />);
                })}
                </div>
            </div>
        </div>
        );
    }
}

PuzzleGame.propTypes = {
    puzzleFolder: PropTypes.string,
};

PuzzleGame.defaultProps = {
    puzzleFolder: '',
};

export default PuzzleGame;

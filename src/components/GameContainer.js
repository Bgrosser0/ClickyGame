import React, { Component } from "react";
import Container from "./Container/Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import Header from "./Header";
import CharacterCard from "./CharacterCard/CharacterCard";
import Characters from "../Characters.json";
import Wrapper from "./Wrapper/Wrapper";
import Navbar from "./Navbar/Navbar";


class GameContainer extends Component {
    state = {
        score: 0,
        topScore: 0,
        selectedCharacters: [],
        Characters: Characters
    }

    handleGuess = id => {

        // HERE I WANT TO PUSH THE ID OF THE SELECTED CHARACTER TO THE ARRAY SELECTEDcHARACTERS

        // THEN CHECK AND SEE IF THE CHOSEN CHARACTER HAS BEEN SELECTED ALREADY BY COMPARING IT TO THE SELECTED CHARACTERS ARRAY
        if ("selectedCharacters.id" === "chosenCharacter.id") {
            alert("YOU LOST!!!")
            this.setState({ score: this.state.score = 0})
        }
        else {
            this.shuffle(Characters)
            this.setState({ selectedCharacters: this.state.Characters.id});
            alert({id})
        }
    }

    shuffle = (Array) => {
            for (let i = Array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [Array[i], Array[j]] = [Array[j], Array[i]];
            }
            return Array;
        }

    chooseCharacter = () => {
        this.setState({ score: this.state.score + 1 });
        this.setState({ topScore: this.state.score + 1 });
    }


    render() {
        return (
            <Wrapper>
                <Row>
                    <Col size="md-12">
                        <Navbar
                            score={this.state.score}
                            topScore={this.state.topScore}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Container>
                            {this.state.Characters.map(Character => (
                                <CharacterCard
                                    chooseCharacter={this.chooseCharacter}
                                    handleGuess={this.handleGuess}
                                    // shuffle={this.shuffle}
                                    id={Character.id}
                                    key={Character.id}
                                    name={Character.name}
                                    image={Character.image}
                                />
                            ))}
                        </Container>
                    </Col>
                </Row>
                <Footer />
            </Wrapper>

        );
    }
};

export default GameContainer;
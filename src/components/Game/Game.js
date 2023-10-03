import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessForm from "../GuessForm/GuessForm";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessAttempts, setGuessAttempts] = useState([]);
	const [isWinner, setIsWinner] = useState(false);

	const handleAddGuessAttempts = (attempt) => {
		const nextGuessAttempts = [...guessAttempts];
		const newAttempt = { id: Math.random(), attempt };
		nextGuessAttempts.push(newAttempt);
		setGuessAttempts(nextGuessAttempts);
		checkWinner(nextGuessAttempts);
	};

	const checkWinner = (guessAttempts) => {
		const guessValues = guessAttempts.map((guess) => guess.attempt);
		console.log("checking winner ", guessValues, answer);
		setIsWinner(guessValues.includes(answer));
	};

	return (
		<>
			<Banner
				isWinner={isWinner}
				numOfAttempts={guessAttempts.length}
			/>
			<GuessList
				guessAttempts={guessAttempts}
				answer={answer}
			/>
			<GuessForm handleAddGuessAttempts={handleAddGuessAttempts} />
		</>
	);
}

export default Game;

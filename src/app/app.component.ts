import { Component } from '@angular/core';
import { Card } from './card';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	cards: Card[] = [];
	flippedCards: Card[] = [];

	constructor() {
    for (let i = 1; i < 16; i++) {
      this.cards.push(new Card(i));
      this.cards.push(new Card(i));
      this.shuffle();
    }
		this.startGame();
	}

	cardFlipped(card: Card) {
		if (this.cards.filter((c) => c.found).length === this.cards.length) {
			alert('You Won!');
		}
		const flippedCards = this.cards.filter((c) => c.status && !c.found);
		if (flippedCards.length === 2) {
			if (flippedCards[0].id === flippedCards[1].id) {
				flippedCards[0].found = true;
				flippedCards[1].found = true;
			} else {
				flippedCards[0].status = false;
				flippedCards[1].status = false;
			}
		}
		card.flipCard();
	}

	reset() {
		this.cards.forEach((card) => {
			card.flipCard();
			card.status = true;
			card.found = true;
		});
		this.shuffle();
	}

	startGame() {
		this.cards.forEach((card) => {
			card.flipCard();
			card.status = false;
			card.found = false;
		});
		this.shuffle();
	}

	shuffle() {
		this.cards.sort(() => Math.random() - 0.5);
	}
}

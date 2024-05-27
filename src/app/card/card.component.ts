import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input()
	card!: Card;

	@Output()
	cardFlipped = new EventEmitter<Card>();

	constructor() {}

	flipCard() {
		if (!this.card.found) {
			this.cardFlipped.emit(this.card);
		}
	}
}

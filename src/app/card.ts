export class Card {
  id: number;
  image: string;
  status: boolean = false;
  found: boolean = false;

  constructor(id: number) {
    this.id = id;
    this.image = `assets/images/${id}.gif`;
  
  }

  openCard() {
    this.status = true;
  }

  closeCard() {
    this.status = false;
  }

  flipCard() {
    if (this.status) {
      this.closeCard();
    }
    else {
      this.openCard();
    }
  }

  isOpen() {
    return this.status;
  }
}

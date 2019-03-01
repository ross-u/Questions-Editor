export class Question {
  constructor() {

    this.id = 0;
    this.question = "";
    this.columns = [];
    this.rows = [];
    this.imagesUploaded = 0;
    this.minCol = undefined;
    this.maxCol = undefined;
    this.minRow = undefined;
    this.maxRow = undefined;
  }
};

export class Column { 
  constructor() {
    this.image = undefined;
    this.label = undefined; 
  } 
};

export class Row {
  constructor() {
    this.image = undefined;
    this.label = undefined;
    this.answer = undefined;
    this.answers = []
  } 
};
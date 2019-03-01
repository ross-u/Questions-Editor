export class Question {
  constructor() {

    this.id = 0;
    this.question = "";
    this.columns = [];
    this.rows = [];
    this.imagesUploaded = 0;
    this.minColLabel = undefined;
    this.maxColLabel = undefined;
    this.minRowLabel = undefined;
    this.maxRowLabel = undefined;
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

const Config = {
  'sentence separators': ".?!",
  'word separators': " \n-",
  'letters': {
    'A': 1,
    'B': 2,
    'C': 3
  }
}

class Kabalist {
  constructor() {
    this.source_text = "";
  }

  setText(text) {
    this.source_text = text;
  }

  getText() {
    return this.source_text;
  }
}

module.exports = Kabalist;



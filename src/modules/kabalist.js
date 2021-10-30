
const Config = {
  'sentence separators': /\.|\?|!/i,
  'word separators': /( |\n|-)/i,
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

  sentences() {
    return this.source_text.split(Config["sentence separators"]).map((s)=>s.trim());
  }
}

module.exports = Kabalist;



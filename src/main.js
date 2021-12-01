const Kabalist = require('./modules/kabalist');

const Config = {
  'sentence separators': /\.|\?|!/i,
  'word separators': / |\n|-/i,
  'letters': {
    'A': 1,
    'B': 2,
    'C': 3
  }
}

const scorer = new Kabalist(Config)

const input = document.querySelector('#source_text');
const output = document.querySelector('#output_view');

input.addEventListener('input', updateOutput);

function updateOutput(e) {
  output.textContent = scorer.score(e.target.value);
}

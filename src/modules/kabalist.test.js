
const Kabalist = require('./kabalist');

const TestConfig = {
  'sentence separators': /\.|\?|!/i,
  'word separators': / |\n|-/i,
  'letters': {
    'A': 1,
    'B': 2,
    'C': 3
  }
}

describe('Kabalist', () => {
  subject = null;

  beforeEach(() => {
    subject = new Kabalist(TestConfig);
    text = `
    What's the time?
    It's quarter-past-midnight.
    Let's do some programming and then go to sleep!
    Heyho
    `;
    subject.setText(text);
  });

  test('can receive text', () => {
    subject.setText("Apple");
    expect(subject.getText()).toBe("Apple");
  });

  test('breaks text into sentences', () => {
    sentences = [
      "What's the time",
      "It's quarter-past-midnight",
      "Let's do some programming and then go to sleep",
      "Heyho"
    ]
    expect(subject.sentences()).toEqual(sentences);
  });

  test('breaks a sentence into words', () => {
    input = "Let's do some programming and then go to sleep";
    expected = ["Let's", "do", "some", "programming", "and", "then", "go", "to", "sleep"];
    expect(subject.words(input)).toEqual(expected);
  });

  test('breaks all sentences into words', () => {
    words = [
      ["What's", "the", "time"],
      ["It's", "quarter", "past", "midnight"],
      ["Let's", "do", "some", "programming", "and", "then", "go", "to", "sleep"],
      ["Heyho"],
    ]
    expect(subject.all_words()).toEqual(words);
  });

  test('scores a word', () => {
    expect(subject.score("")).toEqual(0);
    expect(subject.score("A")).toEqual(1);
    expect(subject.score("B")).toEqual(2);
    expect(subject.score("X")).toEqual(0);
    expect(subject.score("ACB")).toEqual(6);
    expect(subject.score("bC")).toEqual(5);
    
  });

});
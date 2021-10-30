
const Kabalist = require('./kabalist');

describe('Kabalist', () => {
  subject = null;

  beforeEach(() => {
    subject = new Kabalist();
    text = `
    What's the time?
    It's quarter past midnight.
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
      "It's quarter past midnight",
      "Let's do some programming and then go to sleep",
      "Heyho"
    ]
    expect(subject.sentences()).toEqual(sentences);
  });

});
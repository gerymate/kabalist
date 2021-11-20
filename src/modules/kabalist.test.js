
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
  });

  test('breaks text into sentences', () => {
    text = `
    What's the time?
    It's quarter-past-midnight.
    Let's do some programming and then go to sleep!
    Heyho
    `;
    expected = [
      "What's the time",
      "It's quarter-past-midnight",
      "Let's do some programming and then go to sleep",
      "Heyho"
    ]
    expect(subject.sentences(text)).toEqual(expected);
  });

  test('breaks a sentence into words', () => {
    input = "Let's do some programming and then go to sleep";
    expected = ["Let's", "do", "some", "programming", "and", "then", "go", "to", "sleep"];
    expect(subject.words(input)).toEqual(expected);
  });

  test('breaks all sentences into words', () => {
    text = `
    What's the time?
    It's quarter-past-midnight.
    Let's do some programming and then go to sleep!
    Heyho
    `;
    words = [
      ["What's", "the", "time"],
      ["It's", "quarter", "past", "midnight"],
      ["Let's", "do", "some", "programming", "and", "then", "go", "to", "sleep"],
      ["Heyho"],
    ]
    expect(subject.all_words(text)).toEqual(words);
  });

  test('scores a text', () => {
    expect(subject.scoreWord("")).toEqual(0);
    expect(subject.scoreWord("A")).toEqual(1);
    expect(subject.scoreWord("B")).toEqual(2);
    expect(subject.scoreWord("X")).toEqual(0);
    expect(subject.scoreWord("ACB")).toEqual(6);
    expect(subject.scoreWord("bC")).toEqual(5);
    expect(subject.scoreWord("Beans are healthy, chocholate is ambigous.")).toEqual(15);
  });

  test('scores each word in a sentence', () => {
    const sentence = "Beans are healthy, chocholate is ambigous.";
    expected = [["Beans",3],["are",1],["healthy,",1],["chocholate",7],["is",0],["ambigous.",3]];
    expect(subject.scoreEachWord(sentence)).toEqual(expected);
  });

  xtest('scores every sentence in an array of sentences', () => {
    sentences = "Beans are healthy. Chocholate is ambigous but tasty.";
    expected = [
      [[["Beans",3],["are",1],["healthy.",1]],23],
      [[["Chocholate",7],["is",0],["ambigous",3],["but",2],["tasty",1]],34]
    ];
    expect(subject.score(sentences)).toEqual(expected);
  });

});
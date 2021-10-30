
const Kabalist = require('./kabalist');

describe('Kabalist', () => {
  var subject = new Kabalist();

  test('can receive text', () => {
    subject.setText("Apple");
    expect(subject.getText()).toBe("Apple");
  });


});
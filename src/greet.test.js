const { greet } = require('./greet');

describe('greet', () => {
  it('returns default greeting in English', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  it('returns greeting in French when locale is fr', () => {
    expect(greet('Bob', { locale: 'fr' })).toBe('Bonjour, Bob !');
  });

  it('returns greeting in uppercase when shout is true', () => {
    expect(greet('Charlie', { shout: true })).toBe('HELLO, CHARLIE!');
  });

  it('returns French greeting in uppercase when shout and locale are set', () => {
    expect(greet('Denise', { locale: 'fr', shout: true })).toBe('BONJOUR, DENISE !');
  });

  it('falls back to default name when name is missing', () => {
    expect(greet()).toBe('Hello, there!');
    expect(greet('', { locale: 'fr' })).toBe('Bonjour, there !');
    expect(greet('   ')).toBe('Hello, there!');
  });

  it('falls back to English for unknown locale', () => {
    expect(greet('Eve', { locale: 'es' })).toBe('Hello, Eve!');
    expect(greet('Eve', { locale: 'de', shout: true })).toBe('HELLO, EVE!');
  });
});

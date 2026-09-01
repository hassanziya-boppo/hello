// Greeting utility for DEO-36
/**
 * Returns a greeting string for the given name and options.
 * @param {string} name - The name to greet.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.shout] - If true, returns the greeting in uppercase.
 * @param {string} [options.locale] - Locale for greeting: 'en' (default) or 'fr'.
 * @returns {string} The greeting message.
 */
function greet(name, options = {}) {
  let actualName = (typeof name === 'string' && name.trim()) ? name.trim() : 'there';
  let locale = options.locale === 'fr' ? 'fr' : 'en';
  let greeting = locale === 'fr' ? `Bonjour, ${actualName} !` : `Hello, ${actualName}!`;
  if (options.shout) {
    greeting = greeting.toUpperCase();
  }
  return greeting;
}

module.exports = { greet };

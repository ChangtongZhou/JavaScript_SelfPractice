// Look at following codes about parameter destructuring. Indicate what’s the output and why
function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
const o = {
subject: "I",
verb: "love",
object: "JavaScript",
};

getSentence(o); // I love Javascript

// --------------------------------------------------------------------------------
function getSentence([ subject, verb, object ]) {
  return `${subject} ${verb} ${object}`;
}
const arr = [ "I", "love", "JavaScript"];

getSentence(arr); // I love Javascript

// --------------------------------------------------------------------------------
function addPrefix(prefix, ...words) {
  const prefixedWords = [];
  for (let i=0; i<words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

addPrefix("con", "verse", "vex"); // ["converse", "convex"]

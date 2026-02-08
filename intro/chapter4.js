// Basic literal string creation
`In JavaScript '\n' is a line-feed.`;

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const name = "Lev",
    time = "today";
const template=`Hello ${name}, how are you ${time}?`;
console.log(template);
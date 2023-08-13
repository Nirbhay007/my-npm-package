#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message = "Hey there! I'm Nirbhay, a developer!";
  const githubLink = "https://github.com/nirbhay007";
  const linkedinLink = "https://www.linkedin.com/in/nirbhay-singh-349aba12a/";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mGithub:\x1b[0m \x1b[38;5;39m${githubLink}                     \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();

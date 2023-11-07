// event listener
document.getElementById("8ball").addEventListener("click", ballclicked);

// function
function ballclicked() {
  // input
  let input = document.getElementById("input").value.toLowerCase();
  // output variable
  let output = document.getElementById("output");

  //   random
  randnum = Math.random();

  //   nested if statement
  if (input === "") {
    output.innerHTML = "Please ask a question";
  } else if (input === "does a magic 8 ball actually work") {
    output.innerHTML = "How dare you doubt me!";
  } else if (input === "is javascript awesome") {
    output.innerHTML = "Of course.";
  } else {
    if (randnum < 0.2) {
      output.innerHTML = "without a doubt.";
    } else if (randnum < 0.4) {
      output.innerHTML = "As I see it, yes.";
    } else if (randnum < 0.6) {
      output.innerHTML = "Concentrate and ask again.";
    } else if (randnum < 0.8) {
      output.innerHTML = "Don't count on it.";
    } else {
      output.innerHTML = "Outlook not so good.";
    }
  }
}

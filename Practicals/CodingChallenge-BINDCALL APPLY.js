const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const prompt_value = Number(
      console.prompt(
        "What is your favourite programming language\n 0:JavaScript \n 1:Python\n 2:Rust\n 3:C++\n Write option number "
      )
    );
    if (prompt_value <= 3 && typeof prompt_value === "number") {
      this.answers[prompt_value] += 1;
    } else {
      prompt("Answers between 0 $ 3");
    }
    this.displayResults();
    this.displayResults("string");
  },

  displayResults: function (value = "array") {
    if (value === "array") {
      console.log(this.answers);
    } else if (value === "string") {
      console.log(`Poll results are ${this.answers.join(",")}`);
    }
  },
};
poll.registerNewAnswer();

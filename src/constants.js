export const jsQuizz = {
  questions: [
    {
      question:
        "Which of the following is used in React.js to increase performance?",
      choices: [
        "Virtual DOM",
        "Original DOM",
        "Both A and B",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "Virtual DOM",
    },
    {
      question: "Who is the father of C language?",
      choices: [
        "Steve Jobs",
        "James Gosling",
        "Dennis Ritchie",
        "Rasmus Lerdorf",
      ],
      type: "MCQs",
      correctAnswer: "Dennis Ritchie",
    },
    {
      question: "Which of the following is not a valid C variable name?",
      choices: [
        "int number;",
        "float rate;",
        "int variable_count;",
        "int $main;",
      ],
      type: "MCQs",
      correctAnswer: " int $main;",
    },
    {
      question: "Which of the following is true for variable names in C?",
      choices: [
        "They can contain alphanumeric characters as well as special characters",
        "It is not an error to declare a variable to be one of the keywords(like goto, static)",
        "Variable names cannot start with a digit",
        "Variable can be of any length",
      ],
      type: "MCQs",
      correctAnswer:
        "They can contain alphanumeric characters as well as special characters",
    },
    {
      question:
        "They can contain alphanumeric characters as well as special characters?",
      choices: ["volatile", "true", "friend", "export"],
      type: "MCQs",
      correctAnswer: "B. True",
    },
    {
      question: "What is short int in C programming?",
      choices: [
        "The basic data type of C",
        "Qualifier ",
        "Short is the qualifier and int is the basic data type",
        "All of the mentioned",
      ],
      type: "MCQs",
      correctAnswer: "B. True",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

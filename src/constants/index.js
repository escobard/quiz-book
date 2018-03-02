// base quiz data from the project description
export const demoQuizzes = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
        isCorrect: true
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
        isCorrect: true
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
          isCorrect: true
      }
    ]
  }
}

export const newTest = {
  React2: {
    title: "React2",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
        isCorrect: true
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
        isCorrect: true
      }
    ]
  }
}

export const QUIZ_STORAGE_KEY = "QuizBook:quizzes3"

let countdown; // Store the interval ID

function startTimer() {
  clearInterval(countdown); // Clear any existing timer

  let timeLeft = 35 * 60; // 35 minutes in seconds
  const timerDisplay = document.getElementById("timer");
  const startButton = document.getElementById("pradeti");
  const veliauButton = document.getElementById("atlikti-veliau");

  // Disable the button after starting the timer
  startButton.disabled = true;
  veliauButton.disabled = true;

  countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format to always show two digits
    let formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    timerDisplay.textContent = formattedTime;

    if (timeLeft === 0) {
      clearInterval(countdown);
      alert("Laikas pasibaigė!");
      startButton.disabled = false;
      veliauButton.disabled = false;
    }

    timeLeft--;
  }, 1000);
}

document.getElementById("pradeti").addEventListener("click", startTimer);

// ===================================
// The quiz question with the correct answer
// const question = {
//   type: "enter", // "enter" means user needs to input their answer
//   question: "What is 2 + 2?",
//   correctAnswer: "4", // The correct answer
// };

// // Function to generate the question and handle user interaction
// function generateQuiz() {
//   const quizContainer = document.getElementById("quiz-container");
//   quizContainer.innerHTML = ""; // Clear any previous content

//   const questionDiv = document.createElement("div");
//   questionDiv.classList.add("question");

//   // Create question text
//   const questionText = document.createElement("p");
//   questionText.textContent = question.question;

//   // Create input field
//   const inputField = document.createElement("input");
//   inputField.type = "text";
//   inputField.placeholder = "Enter your answer";

//   // Create submit button
//   const submitButton = document.createElement("button");
//   submitButton.classList.add("submit-btn");
//   submitButton.textContent = "Submit";

//   // Add event listener to submit button
//   submitButton.addEventListener("click", () => {
//     const userAnswer = inputField.value.trim(); // Get user input and trim any extra spaces
//     console.log("Entered answer:", userAnswer);

//     // Check if the answer is correct
//     if (userAnswer === question.correctAnswer) {
//       console.log("Correct answer!");
//     } else {
//       console.log("Incorrect answer!");
//     }
//   });

//   // Append question text, input field, and submit button to the container
//   questionDiv.appendChild(questionText);
//   questionDiv.appendChild(inputField);
//   quizContainer.appendChild(questionDiv);
//   quizContainer.appendChild(submitButton);
// }

// window.onload = generateQuiz;

// The quiz question with multiple answers
const questions = [
  {
    type: "enter", // Input-based question
    questionText: "What is 2 + 2?",
    correctAnswers: ["4"],
    options: [],
  },
  {
    type: "multiple", // Multiple-choice question
    questionText: 'What is 2 + 2 = "{answer1}" and 3 + 3 = "{answer2}"?',
    correctAnswers: ["4", "6"],
    options: ["2", "4", "6", "8"], // Possible options to select
  },
  {
    type: "enter", // Input-based question
    questionText: "What is the capital of France?",
    correctAnswers: ["Paris"],
    options: [],
  },
  {
    type: "multiple", // Multiple-choice question
    questionText:
      'Which of the following are prime numbers? "{answer1}", "{answer2}"',
    correctAnswers: ["2", "3"],
    options: ["1", "2", "3", "4", "5"],
  },
];

function generateQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  // Replace placeholders with dynamic input fields
  let questionText = question.questionText;
  questionText = questionText.replace(
    "{answer1}",
    '<input class="answer-input" id="input1" type="text" value="" />'
  );
  questionText = questionText.replace(
    "{answer2}",
    '<input class="answer-input" id="input2" type="text" value="" />'
  );

  const questionTextElement = document.createElement("p");
  questionTextElement.innerHTML = questionText; // Use innerHTML to render the inputs dynamically

  // Create options for selecting answers
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");
  question.options.forEach((option) => {
    const optionButton = document.createElement("div");
    optionButton.classList.add("option");
    optionButton.textContent = option;
    optionButton.dataset.option = option;

    optionButton.addEventListener("click", () => {
      handleOptionSelect(optionButton);
    });

    optionsDiv.appendChild(optionButton);
  });

  // Create submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.classList.add("submit-btn");

  submitButton.addEventListener("click", () => {
    const input1Value = document.getElementById("input1").value.trim();
    const input2Value = document.getElementById("input2").value.trim();
    const userAnswers = [input1Value, input2Value];
    console.log("Entered answers:", userAnswers);

    if (
      userAnswers[0] === question.correctAnswers[0] &&
      userAnswers[1] === question.correctAnswers[1]
    ) {
      console.log("Correct answers!");
    } else {
      console.log("Incorrect answers!");
    }
  });

  // Append question text, input fields, options, and submit button to the container
  questionDiv.appendChild(questionTextElement);
  quizContainer.appendChild(questionDiv);
  quizContainer.appendChild(optionsDiv);
  quizContainer.appendChild(submitButton);
}

// Function to handle option selection
function handleOptionSelect(optionButton) {
  const selectedValue = optionButton.dataset.option;

  // Check if the first input field is available to be filled
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");

  if (input1.value === "") {
    input1.value = selectedValue;
    input1.classList.add("selected");
    addCancelButton(input1);
  } else if (input2.value === "") {
    input2.value = selectedValue;
    input2.classList.add("selected");
    addCancelButton(input2);
  }
}

// Function to add cancel button next to the selected input field
function addCancelButton(inputElement) {
  // Check if cancel button already exists, if not, create it
  if (
    !inputElement.nextElementSibling ||
    !inputElement.nextElementSibling.classList.contains("cancel-btn")
  ) {
    const cancelBtn = document.createElement("span");
    cancelBtn.textContent = "❌";
    cancelBtn.classList.add("cancel-btn");

    // Add event listener for cancel button
    cancelBtn.addEventListener("click", () => {
      inputElement.value = ""; // Reset the answer
      inputElement.classList.remove("selected");
      cancelBtn.remove(); // Remove the cancel button from DOM
    });

    // Append cancel button next to the selected input field
    inputElement.insertAdjacentElement("afterend", cancelBtn);
  }
}

// Function to remove cancel button from the input field
function removeCancelButton(inputElement) {
  const cancelBtn = inputElement.nextElementSibling;
  if (cancelBtn && cancelBtn.classList.contains("cancel-btn")) {
    // cancelBtn.style.display = "none";
  }
}

window.onload = generateQuiz;

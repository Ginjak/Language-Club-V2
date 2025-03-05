// Array of quiz questions with different types and answers
const questions = [
  {
    type: "enter",
    questionText:
      "She is married and has two {input-answer} : a son and a daughter.",
    correctAnswers: ["kids"],
    options: [],
  },
  {
    type: "multiple", // Multiple-choice question
    questionText:
      "It was {answer1} nice weather that we spent {answer2} the beach",
    correctAnswers: ["such a, on", "a, at"],
    options: ["Such a, on", "Such, on", "A, at", "So, at"], // Possible options to select
  },
  {
    type: "enter",
    questionText:
      "She is married and has two {input-answer} : a son and a daughter.",
    correctAnswers: ["kids"],
    options: [],
  },
  {
    type: "multiple", // Multiple-choice question
    questionText:
      "It was {answer1} nice weather that we spent {answer2} the beach",
    correctAnswers: ["such a, on", "a, at"],
    options: ["Such a, on", "Such, on", "A, at", "So, at"], // Possible options to select
  },
  {
    type: "enter",
    questionText:
      "She is married and has two {input-answer} : a son and a daughter.",
    correctAnswers: ["kids"],
    options: [],
  },
  {
    type: "multiple", // Multiple-choice question
    questionText:
      "It was {answer1} nice weather that we spent {answer2} the beach",
    correctAnswers: ["such a, on", "a, at"],
    options: ["Such a, on", "Such, on", "A, at", "So, at"], // Possible options to select
  },
  {
    type: "enter",
    questionText:
      "She is married and has two {input-answer} : a son and a daughter.",
    correctAnswers: ["kids"],
    options: [],
  },
  {
    type: "multiple", // Multiple-choice question
    questionText:
      "It was {answer1} nice weather that we spent {answer2} the beach",
    correctAnswers: ["such a, on", "a, at"],
    options: ["Such a, on", "Such, on", "A, at", "So, at"], // Possible options to select
  },
];

// Generate the quiz with all questions
function generateQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = ""; // Clear any previous content

  // Loop through each question and generate its content
  questions.forEach((currentQuestion, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add(
      "question",
      "mb-0",
      "d-flex",
      "flex-column",
      "gap-3",
      "pb-4"
    );

    let questionText = currentQuestion.questionText;

    // Create input fields based on question type
    if (currentQuestion.type === "enter") {
      // For input-based questions, create input fields
      questionText = questionText.replace(
        "{input-answer}",
        `<input class="input-answer quiz-grey-input d-inline-block mx-2" id="input${index}1" type="text" value=""/> `
      );
    } else if (currentQuestion.type === "multiple") {
      // For multiple-choice questions, create dynamic input fields for answers
      questionText = questionText.replace(
        "{answer1}",
        `<input class="answer-input" id="input${index}1" type="text" value="" disabled/>`
      );
      questionText = questionText.replace(
        "{answer2}",
        `<input class="answer-input" id="input${index}2" type="text" value="" disabled/>`
      );
    }

    const questionTitleElement = document.createElement("p");
    questionTitleElement.classList.add(
      "outline-green-btn",
      "main-btn",
      "max-w-200",
      "mb-2"
    );
    questionTitleElement.textContent = "Klausimas " + (index + 1);
    const questionTextElement = document.createElement("div");
    questionTextElement.classList.add("fs-5");
    questionTextElement.innerHTML = questionText;

    // Create options for multiple-choice selection
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add(
      "options",
      "mt-0",
      "d-flex",
      "flex-row",
      "gap-3",
      "fs-5"
    );
    currentQuestion.options.forEach((option) => {
      const optionButton = document.createElement("div");
      optionButton.classList.add("option");
      optionButton.textContent = option;
      optionButton.dataset.option = option;

      optionButton.addEventListener("click", () => {
        handleOptionSelect(optionButton, index);
      });

      optionsDiv.appendChild(optionButton);
    });

    // Append question text, input fields, options to the container
    questionDiv.appendChild(questionTitleElement);
    questionDiv.appendChild(questionTextElement);
    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
  });

  // Add a single submit button for all questions at the end
  const submitButton = document.createElement("button");
  submitButton.textContent = "Baigti testą";
  submitButton.classList.add(
    "main-btn",
    "purple-btn",
    "white-btn-txt",
    "border-0",
    "max-w-170",
    "ms-auto",
    "w-100",
    "fs-5"
  );

  submitButton.addEventListener("click", () => {
    alert("Atsakymai išsiųsti!");
    const timerElement = document.getElementById("timer");

    // Collect all answers and validate
    questions.forEach((currentQuestion, index) => {
      // Get the first input value
      const input1Value = document.getElementById("input" + index + "1")
        ? document.getElementById("input" + index + "1").value.trim()
        : "";

      // Get the second input value (only for multiple choice questions)
      const input2Value =
        currentQuestion.type === "multiple" &&
        document.getElementById("input" + index + "2")
          ? document.getElementById("input" + index + "2").value.trim()
          : "";

      const userAnswers = [input1Value, input2Value].filter(
        (val) => val !== ""
      ); // filter out empty answers
      console.log(`Entered answers for Question ${index + 1}:`, userAnswers);

      const lowercaseUserAnswers = userAnswers.map((answer) =>
        answer.toLowerCase()
      );
      const lowercaseCorrectAnswers = currentQuestion.correctAnswers.map(
        (answer) => answer.toLowerCase()
      );

      if (
        lowercaseUserAnswers.length === lowercaseCorrectAnswers.length &&
        lowercaseUserAnswers.every(
          (answer, idx) => answer === lowercaseCorrectAnswers[idx]
        )
      ) {
        console.log("Question " + (index + 1) + ": Correct answers!");
      } else {
        console.log("Question " + (index + 1) + ": Incorrect answers!");
      }
    });
  });

  quizContainer.appendChild(submitButton); // Append the submit button at the end
}

// Function to handle option selection for multiple choice
function handleOptionSelect(optionButton, index) {
  const selectedValue = optionButton.dataset.option;

  // Get the input fields for this question
  const input1 = document.getElementById("input" + index + "1");
  const input2 = document.getElementById("input" + index + "2");

  if (input1.value === "") {
    input1.value = selectedValue;
    input1.classList.add("selected");
    addCancelButton(input1);
  } else if (input2 && input2.value === "") {
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
    const cancelBtn = document.createElement("div");
    cancelBtn.classList.add(
      "position-relative",
      "d-inline-block",
      "cancel-wraper"
    );
    const cancelBtnTest = document.createElement("span");
    cancelBtnTest.textContent = "❌";
    cancelBtnTest.classList.add("cancel-btn");
    cancelBtn.appendChild(cancelBtnTest);

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

document.addEventListener("DOMContentLoaded", function () {
  const pradetiBtn = document.getElementById("pradeti");
  const atliktiVeliauBtn = document.getElementById("atlikti-veliau");
  const timerElement = document.getElementById("timer");

  function startTimer(durationInMinutes, display) {
    let timeRemaining = durationInMinutes * 60; // Convert minutes to seconds

    function updateTimer() {
      let minutes = Math.floor(timeRemaining / 60);
      let seconds = timeRemaining % 60;

      // Format time as MM:SS (e.g., 04:44)
      display.textContent =
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds;

      if (timeRemaining > 0) {
        timeRemaining--;
        setTimeout(updateTimer, 1000);
      } else {
        alert("Laikas baigėsi"); // ✅ Show alert when time runs out
      }
    }

    updateTimer(); // Start the timer loop
  }

  pradetiBtn.addEventListener("click", function () {
    // Disable buttons
    pradetiBtn.disabled = true;
    atliktiVeliauBtn.disabled = true;

    // ✅ Remove 'd-none' class from #timer
    timerElement.classList.remove("d-none");

    // Start the timer (35 minutes)
    startTimer(35, timerElement);

    // Generate the quiz
    generateQuiz();
  });
});

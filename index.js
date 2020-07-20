
const QUESTIONS = [
    {
        question: "Where are the Great Pyramids of Giza located?",
        possibleAnswers: ["Iraq","Syria","Egypt","Iran"],
        correctAnswer: "Possible Answer 3",
        answerExplanation: "Egypt",
        imageSrc: "images/pyramid.jpg",
        imageAlt: "The Great Pyramids",
    },
    {
        question: "The Hanging Gardens of Babylon are located in which modern country?",
        possibleAnswers: ["Turkey","Greece","Iran","Iraq"],
        correctAnswer: "Possible Answer 4",
        answerExplanation: "Iraq",
        imageSrc: "images/hanging-gardens.jpg",
        imageAlt: "Hanging Gardens of Babylon",
    },
    {
        question: "What statue sits at the top of Mount Olympus?",
        possibleAnswers: ["Poseidon","Jupiter","Zeus","Hades"],
        correctAnswer: "Possible Answer 3",
        answerExplanation: "Zeus",
        imageSrc: "images/mount-olympus.jpg",
        imageAlt: "Mount Olympus",
    },
    {
        question: "Honoring the Greek goddess, the Temple of Artemis is located where?",
        possibleAnswers: ["Greece","Lybia","Syria","Turkey"],
        correctAnswer: "Possible Answer 4",
        answerExplanation: "Turkey",
        imageSrc: "images/artemis.jpg",
        imageAlt: "Greek goddess Artemis and animals",
    },
    {
        question: "A tomb for Mausolus, the Mausoleum of Halicarnassus is found where on a map?",
        possibleAnswers: ["Italy","Bulgaria","Greece","Turkey"],
        correctAnswer: "Possible Answer 4",
        answerExplanation: "Turkey",
        imageSrc: "images/halicarnassus.jpg",
        imageAlt: "The Mausoleum of Halicarnassus",
    },
    {
        question: "Worshipping the sun god Helios, the Colossus of Rhodes was built in which modern day nation?",
        possibleAnswers: ["Greece","Turkey","Croatia","Italy"],
        correctAnswer: "Possible Answer 1",
        answerExplanation: "Greece",
        imageSrc: "images/colossus.jpg",
        imageAlt: "The Colossus of Rhodes", 
    },
    {
        question: "Once the tallest structure in the world, the Lighthouse of Alexandria would be found in which modern country?",
        possibleAnswers: ["Algeria","Egypt","Lybia","Tunisia"],
        correctAnswer: "Possible Answer 2",
        answerExplanation: "Egypt",
        imageSrc: "images/lighthouse.jpg",
        imageAlt: "The Lighthouse of Alexandria",
    },
];

console.log("testing 1");

function renderQuestion() {



    const questionString = 
    
        `<form id="js-quiz-form" method="post" class="js-question-area">
    <div class="main-image">
        <div class="item">
            <img src="${QUESTIONS[counter].imageSrc}" height="300" width="400" alt="${QUESTIONS[0].imageAlt}">
        </div>
    </div>

    <div class="question-box group">
        <div class="item">
            <p class="js-question">${QUESTIONS[counter].question}</p>
        </div>
    </div>

    <div class="answer-box group">
        <div class="item">
            <input type = "radio"
                name = "answers"
                id = "answer1"
                value = "Possible Answer 1" 
                required
                />
            <label class = "radio" for = "answer1">${QUESTIONS[counter].possibleAnswers[0]}</label>
        </div>
    </div>

    <div class="answer-box group">
        <div class="item">
            <input type = "radio"
                class = "radio-btn"
                name = "answers"
                id = "answer2"
                value = "Possible Answer 2" />
             <label class = "radio" for = "answer2">
                ${QUESTIONS[counter].possibleAnswers[1]}    
             </label>
        </div>
    </div>

    <div class="answer-box group">
        <div class="item">
            <input type = "radio"
                name = "answers"
                id = "answer3"
                value = "Possible Answer 3" />
            <label class = "radio" for = "answer3">${QUESTIONS[counter].possibleAnswers[2]}</label>
        </div>
    </div>

    <div class="answer-box group">
        <div class="item">
            <input type = "radio"
                name = "answers"
                id = "answer4"
                value = "Possible Answer 4" />
            <label class = "radio" for = "answer4">${QUESTIONS[counter].possibleAnswers[3]}</label>
        </div>
    </div>
    <div class="submit-container">
        <input type="submit" id="submit-answer" class="btn-style">
    </div>
    <br>
    <div class="answer-display"></div>
</form>
`;

    console.log("rendering Question...");
    $('.js-question-area').html(questionString);
};

let counter = 0;
let totalCorrect = 0;

function handleSubmit() {
    $('.js-question-area').on('submit', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if ($('input[name=answers]:checked', '#js-quiz-form').val() === QUESTIONS[counter].correctAnswer) {
            $('.answer-display').html('<p class="correct-answer">Great Job!</p>');
            totalCorrect++;
            $('#total-score').html('Total Score: ' + parseInt(totalCorrect/QUESTIONS.length * 100) + "%");
        } else {
            $('.answer-display').html(`<p class="incorrect-answer">So Close! <span class="answer-explanation">The answer was actually ${QUESTIONS[counter].answerExplanation}</span></p>`);
            $('#total-score').html('Total Score: ' + parseInt(totalCorrect/QUESTIONS.length * 100) + "%");
            console.log($('input[name=answers]:checked'));
        }
        $('.submit-container').html("");
        $('.next-question-container').html(`<button id="next-question" class="btn-style" name="nextQuestion">Next Question <i class="fas fa-arrow-right"></i></button>
        `)
        $('.next-question-container button').on('click', function(event) {
            renderNewQuestion();
        })
     });
};

function renderNewQuestion() {
    // $('#next-question').on('click', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (document.getElementsByTagName('answers').checked) {
            console.log("Answer was chosen");
        } else {
            console.log("No answer chosen");
        }

        if (counter < QUESTIONS.length - 1) {
            counter++;
            renderQuestion();
        } else {
            console.log(counter);
            console.log(QUESTIONS.length);
            const quizSummary = `
            <div class="quiz-summary-container"><img src="images/good-score-image.jpg" height="400px" width="300px"><p class="quiz-summary">Congratulations</p>
            <span class="quiz-summary-span">You scored <b>${parseInt(totalCorrect/QUESTIONS.length * 100)}%</b>!</span></div>
            `
            $('.js-question-area').html(quizSummary);  
            $('.next-question-container').html(""); 
            $('#question-number').remove();
            $('#total-score').html("");
        }
        $('#question-number').html("Question: " + (counter + 1) + " / " + QUESTIONS.length);
        $('.next-question-container').html("");

        console.log(counter);
        // renderQuestion();
    // });
};

function handleScore() {

};

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleQuestionList() {
    renderQuestion();
    handleSubmit();
    renderNewQuestion();
    handleScore();  
    startOver();
  }
  
  // when the page loads, call `handleShoppingList`
  $(handleQuestionList);

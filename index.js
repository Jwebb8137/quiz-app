// Question List Array
const QUESTIONS = [
    {
        question: "Where are the Great Pyramids of Giza located?",
        possibleAnswers: ["Iraq","Syria","Egypt","Iran"],
        correctAnswer: "Possible Answer 3",
        answerExplanation: "Egypt",
        imageSrc: "images/pyramid.jpg",
        imageAlt: "The Great Pyramids",
        fact: "Experts say that it took about 23 years to complete this massive structure!",
    },
    {
        question: "The Hanging Gardens of Babylon are located in which modern country?",
        possibleAnswers: ["Turkey","Greece","Iran","Iraq"],
        correctAnswer: "Possible Answer 4",
        answerExplanation: "Iraq",
        imageSrc: "images/hanging-gardens.jpg",
        imageAlt: "Hanging Gardens of Babylon",
        fact: "The name \"Babylon\", means \"Gate of the Gods\"!",
    },
    {
        question: "What statue sits at the base of Mount Olympus?",
        possibleAnswers: ["Poseidon","Jupiter","Zeus","Hades"],
        correctAnswer: "Possible Answer 3",
        answerExplanation: "Zeus",
        imageSrc: "images/mount-olympus.jpg",
        imageAlt: "Mount Olympus",
        fact: "The mountain was said to be home to the 12 Greek gods, such as Zeus, his wife Hera, Anthena and Poseidon.",
    },
    {
        question: "Honoring the Greek goddess, the Temple of Artemis is located where?",
        possibleAnswers: ["Greece","Lybia","Syria","Turkey"],
        correctAnswer: "Possible Answer 4",
        answerExplanation: "Turkey",
        imageSrc: "images/artemis.jpg",
        imageAlt: "Greek goddess Artemis and animals",
        fact: "Artemis was the daughter of Zeus, the King of the Gods, and Leto, a Titaness!",
    },
    {
        question: "A tomb for Mausolus, the Mausoleum of Halicarnassus is found where on a map?",
        possibleAnswers: ["Italy","Bulgaria","Greece","Turkey"],
        correctAnswer: "Possible Answer 4",
        answerExplanation: "Turkey",
        imageSrc: "images/halicarnassus.jpg",
        imageAlt: "The Mausoleum of Halicarnassus",
        fact: "The Mausoleum at Halicarnassus was famous for its aspiring beauty of architecture, decorative aspects and sculptures!",
    },
    {
        question: "Worshipping the sun god Helios, the Colossus of Rhodes was built in which modern day nation?",
        possibleAnswers: ["Greece","Turkey","Croatia","Italy"],
        correctAnswer: "Possible Answer 1",
        answerExplanation: "Greece",
        imageSrc: "images/colossus.jpg",
        imageAlt: "The Colossus of Rhodes",
        fact: "The height of Colossus of Rhodes was more than 30 meters. In the ancient world, it became one of the highest statues!",
    },
    {
        question: "Once the tallest structure in the world, the Lighthouse of Alexandria would be found in which modern country?",
        possibleAnswers: ["Algeria","Egypt","Lybia","Tunisia"],
        correctAnswer: "Possible Answer 2",
        answerExplanation: "Egypt",
        imageSrc: "images/lighthouse.jpg",
        imageAlt: "The Lighthouse of Alexandria",
        fact: "The Lighthouse of Alexandria was the first lighthouse in the world. Construction began in 290 BC and took twenty years to complete!",
    },
];

// Render question
function renderQuestion() {

    // create initial content for question number 
    $('#question-number').html("Question: " + 1 + " / " + QUESTIONS.length);

    // form / question structure
    const questionString = 
    
    `<form id="js-quiz-form" method="post" class="js-question-area">
        <fieldset>
            <legend>Answer Questions</legend>
            <section class="main-image">
                <div class="item">
                    <img src="${QUESTIONS[counter].imageSrc}" height="300" width="400" alt="${QUESTIONS[0].imageAlt}">
                </div>
            </section>

            <section class="question-box group">
                <div class="item">
                    <p class="js-question">${QUESTIONS[counter].question}</p>
                </div>
            </section>

            <section class="answer-box group">
                <div class="item">
                    <input type = "radio"
                        name = "answers"
                        id = "answer1"
                        value = "Possible Answer 1" 
                        required
                        />
                    <label class = "radio" for = "answer1">${QUESTIONS[counter].possibleAnswers[0]}</label>
                </div>
            </section>

            <section class="answer-box group">
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
            </section>

            <section class="answer-box group">
                <div class="item">
                    <input type = "radio"
                        name = "answers"
                        id = "answer3"
                        value = "Possible Answer 3" />
                    <label class = "radio" for = "answer3">${QUESTIONS[counter].possibleAnswers[2]}</label>
                </div>
            </section>

            <section class="answer-box group">
                <div class="item">
                    <input type = "radio"
                        name = "answers"
                        id = "answer4"
                        value = "Possible Answer 4" />
                    <label class = "radio" for = "answer4">${QUESTIONS[counter].possibleAnswers[3]}</label>
                </div>
            </section>
            <section class="submit-container">
                <input type="submit" value="Submit" id="submit-answer" class="btn-style">
            </section>
            <br>
            <section class="answer-display"></section>
        </fielset>
    </form>
    `;

    // place questionString content into question area
    $('.js-question-area').html(questionString);
};

// initialize variables
let counter = 0;
let totalCorrect = 0;


// Submit function that executes upon form submissions
function handleSubmit() {
    $('.js-question-area').on('submit', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        // Check if user answer is correct
        // Correct answer 
        if ($('input[name=answers]:checked', '#js-quiz-form').val() === QUESTIONS[counter].correctAnswer) {
            $('.answer-display').html(`<p class="correct-answer">Great Job!</p>
            <span class="answer-fact">"${QUESTIONS[counter].fact}"</span>
            `);
            // Increase total correct variable
            totalCorrect++;
            // Update Score
            handleScore();
        } else {
            // Incorrect answer
            $('.answer-display').html(`
            <p class="incorrect-answer">So Close! 
                <span class="answer-explanation">The answer is <u>${QUESTIONS[counter].answerExplanation}</u></span>
                <span class="answer-fact">"${QUESTIONS[counter].fact}"</span>
            </p>`);
            // Update Score
            handleScore();
        }
        // Remove submit button
        $('.submit-container').html("");

        // Render next question button
        $('.next-question-container').html(`<button id="next-question" class="btn-style" name="nextQuestion">Next Question <i class="fas fa-arrow-right"></i></button>
        `)

        // On click function for next question button
        $('.next-question-container button').on('click', function(event) {
            renderNewQuestion();
        })
    });
};

function renderNewQuestion() {
    event.preventDefault();
    event.stopImmediatePropagation();
    // Render new question if counter is less than array length
    if (counter < QUESTIONS.length - 1) {
        counter++;
        renderQuestion();
    } else {
        // Call quiz summary 
        renderQuizSummary();
    }

    //handle displaying question number
    $('#question-number').html("");
    $('#question-number').html("Question: " + (counter + 1) + " / " + QUESTIONS.length);
    $('.next-question-container').html("");
};

// Render quiz summary page
function renderQuizSummary() {

    if (totalCorrect >= 5) {
        const goodQuizSummary = `
        <span class="summary-reponse">"Herodotus would be proud!"</span>
        <div class="quiz-summary-container"><img src="images/good-score-image.jpg" alt="Cartoon Greek Man" height="400px" width="300px"><p class="quiz-summary">Congratulations!</p>
        <span class="quiz-summary-span">You scored <b>${parseInt(totalCorrect/QUESTIONS.length * 100)}%</b>!</span></div>
        `
        $('.js-question-area').html(goodQuizSummary);
    } else {
        const badQuizSummary = `
        <span class="summary-reponse">"By the beard of Zeus ..."</span>
        <div class="quiz-summary-container"><img src="images/bad-score-image.jpg" alt="Cartoon Greek Man" height="400px" width="300px"><p class="quiz-summary">Disappointing...</p>
        <span class="quiz-summary-span">You scored <b>${parseInt(totalCorrect/QUESTIONS.length * 100)}%</b>!</span></div>
        ` 
        $('.js-question-area').html(badQuizSummary);
    }
    $('.start-over-container').html(`<a href="index.html" id="start-over" class="btn-style" name="startOver">Try Again <i class="fas fa-sync"></i></a>
    `)  
    $('.next-question-container').html(""); 
    $('#question-number').remove();
    $('#total-score').html("");
};

// Update total score function
function handleScore() {
    $('#total-score').html('Total Score: ' + parseInt(totalCorrect/QUESTIONS.length * 100) + "%");
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

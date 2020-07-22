// Global STORE object
const STORE = {
    questions: [
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
    ],
    counter: 0,
    totalCorrect: 0,
};


//HTML for question form
function questionHtml() {
    const questionString = 
    
    `<form id="js-quiz-form" method="post" class="js-question-area">
        <fieldset>
            <legend>Answer Questions</legend>
            <section class="main-image">
                <div class="item">
                    <img src="${STORE.questions[STORE.counter].imageSrc}" height="300" width="400" alt="${STORE.questions[0].imageAlt}">
                </div>
            </section>

            <section class="question-box group">
                <div class="item">
                    <p class="js-question">${STORE.questions[STORE.counter].question}</p>
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
                    <label class = "radio" for = "answer1">${STORE.questions[STORE.counter].possibleAnswers[0]}</label>
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
                        ${STORE.questions[STORE.counter].possibleAnswers[1]}    
                    </label>
                </div>
            </section>

            <section class="answer-box group">
                <div class="item">
                    <input type = "radio"
                        name = "answers"
                        id = "answer3"
                        value = "Possible Answer 3" />
                    <label class = "radio" for = "answer3">${STORE.questions[STORE.counter].possibleAnswers[2]}</label>
                </div>
            </section>

            <section class="answer-box group">
                <div class="item">
                    <input type = "radio"
                        name = "answers"
                        id = "answer4"
                        value = "Possible Answer 4" />
                    <label class = "radio" for = "answer4">${STORE.questions[STORE.counter].possibleAnswers[3]}</label>
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
    return questionString;
};

//HTML for initial question number
function initQuestionHtml() {
    const initQuestion = `Question: 1 / ${STORE.questions.length}`;
    return initQuestion;
}

//HTML for next question numbers
function nextQuestionNumHtml() {
    const nextQuestionsNum = `Question: ${(STORE.counter + 1)} / ${STORE.questions.length}`;
    return nextQuestionsNum;
}

//HTML for correct answer display
function correctAnswerHtml() {
    const correctAnswerResponse = `<p class="correct-answer">Great Job!</p>
    <span class="answer-fact">"${STORE.questions[STORE.counter].fact}"</span>`;
    return correctAnswerResponse;
};


//HTML for wrong answer display
function wrongAnswerHtml() {
    const wrongAnswerResponse = `
    <p class="incorrect-answer">So Close! 
        <span class="answer-explanation">The answer is <u>${STORE.questions[STORE.counter].answerExplanation}</u></span>
        <span class="answer-fact">"${STORE.questions[STORE.counter].fact}"</span>
    </p>
    `;
    return wrongAnswerResponse;
};

//HTML for next button
function nextButtonHtml() {
    const nextButton = `<button id="next-question" class="btn-style" name="nextQuestion">Next <i class="fas fa-arrow-right"></i></button>
    `;
    return nextButton;
};

//HTML for total score display
function totalScoreHtml() {
    let totalScore = `Total Score: ${parseInt(STORE.totalCorrect/STORE.questions.length * 100)}%`;
    return totalScore;
}

//HTML for good quiz summary display
function goodQuizSummaryHtml() {
    const goodQuizSummary = `
    <span class="summary-reponse">"Herodotus would be proud!"</span>
    <div class="quiz-summary-container"><img src="images/good-score-image.jpg" alt="Cartoon Greek Man" height="400px" width="300px"><p class="quiz-summary">Congratulations!</p>
    <span class="quiz-summary-span">You scored <b>${parseInt(STORE.totalCorrect/STORE.questions.length * 100)}%</b>!</span></div>
    `;
    return goodQuizSummary;
};

//HTML for bad quiz summary display
function badQuizSummaryHtml() {
    const badQuizSummary = `
        <span class="summary-reponse">"By the beard of Zeus ..."</span>
        <div class="quiz-summary-container"><img src="images/bad-score-image.jpg" alt="Cartoon Greek Man" height="400px" width="300px"><p class="quiz-summary">Disappointing...</p>
        <span class="quiz-summary-span">You scored <b>${parseInt(STORE.totalCorrect/STORE.questions.length * 100)}%</b>!</span></div>
    `;
    return badQuizSummary;
};

//HTML for reset button
function resetButtonHtml() {
    const resetButton = `
    <a href="index.html" id="start-over" class="btn-style" name="startOver">Try Again <i class="fas fa-sync"></i></a>
    `;
    return resetButton;
};

// Update total score function
function handleScore() {
    $('#total-score').html(totalScoreHtml());
};

//Render question
function renderQuestion() {
    // create initial content for question number 
    $('#question-number').html(initQuestionHtml());

    // place questionString content into question area
    $('.js-question-area').html(questionHtml());
};

// Submit function that executes upon form submissions
function handleSubmit() {
    $('.js-question-area').on('submit', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        // Check if user answer is correct
        // Correct answer 
        if ($('input[name=answers]:checked', '#js-quiz-form').val() === STORE.questions[STORE.counter].correctAnswer) {
            $('.answer-display').html(correctAnswerHtml());
            // Increase total correct variable
            STORE.totalCorrect++;
            // Update Score
            handleScore();
        } else {
            // Incorrect answer
            $('.answer-display').html(wrongAnswerHtml());
            // Update Score
            handleScore();
        };
        // Remove submit button
        $('.submit-container').html("");

        // Render next question button
        $('.next-question-container').html(nextButtonHtml());

        // On click function for next question button
        $('.next-question-container button').on('click', function(event) {
            renderNewQuestion();
        });
        
        //disable radio buttons
        $("input[type='radio'][name='answers']").each(function(){
            $(this).attr("disabled","false");
        });
    });
};

function renderNewQuestion() {
    event.preventDefault();
    event.stopImmediatePropagation();
    // Render new question if counter is less than array length
    if (STORE.counter < STORE.questions.length - 1) {
        STORE.counter++;
        renderQuestion();
    } else {
        // Call quiz summary 
        renderQuizSummary();
    }

    //handle displaying question number
    $('#question-number').html("");
    $('#question-number').html(nextQuestionNumHtml());
    $('.next-question-container').html("");
};

// Render quiz summary page
function renderQuizSummary() {
    // If score is good render good summary
    if (STORE.totalCorrect >= 5) {
        $('.js-question-area').html(goodQuizSummaryHtml());
    } else {
        // If score is bad render bad summary 
        $('.js-question-area').html(badQuizSummaryHtml());
    }
    //Render try again button / hide other elements
    $('.start-over-container').html(resetButtonHtml())  
    $('.next-question-container').html(""); 
    $('#question-number').remove();
    $('#total-score').html("");
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

document.addEventListener('DOMContentLoaded', () => {
    // Basic functionality for quizzes (example for a single quiz)
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            let score = 0;
            const answers = {
                q1: 'optionA', // Example correct answer for question 1
                q2: 'optionC'  // Example correct answer for question 2
            };

            // Get user's answers
            const userAnswer1 = document.querySelector('input[name="q1"]:checked');
            const userAnswer2 = document.querySelector('input[name="q2"]:checked');

            if (userAnswer1 && userAnswer1.value === answers.q1) {
                score++;
            }
            if (userAnswer2 && userAnswer2.value === answers.q2) {
                score++;
            }

            // Display results
            if (quizResult) {
                const totalQuestions = Object.keys(answers).length;
                quizResult.textContent = `You scored ${score} out of ${totalQuestions} questions.`;
                quizResult.className = (score === totalQuestions) ? 'correct' : 'incorrect';
            }
        });
    }
});

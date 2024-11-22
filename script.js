function startQuiz() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
}

function checkAnswer() {
    const indiaOptions = document.getElementsByName('capital-india');
    const americaOptions = document.getElementsByName('capital-america');
    let selectedIndiaOption, selectedAmericaOption;

    for (const option of indiaOptions) {
        if (option.checked) {
            selectedIndiaOption = option.value;
            break;
        }
    }

    for (const option of americaOptions) {
        if (option.checked) {
            selectedAmericaOption = option.value;
            break;
        }
    }

    const result = document.getElementById('result');
    let correctCount = 0;

    if (selectedIndiaOption === 'Delhi') {
        correctCount++;
    }

    if (selectedAmericaOption === 'Washington, D.C.') {
        correctCount++;
    }

    result.textContent = `You got ${correctCount} out of 2 questions correct.`;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("nutritionSurveyForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const firstQuestion = document.getElementById("breakfastToday");
        if (firstQuestion.value === "") {
            alert("Please answer the first question about your breakfast today.");
            firstQuestion.focus();
            return false;
        }
        alert("Thank you for completing the survey!");
        form.reset();
    });
});

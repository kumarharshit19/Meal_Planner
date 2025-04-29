document.getElementById('mealForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the dish options from the form
    let breakfast = [
        document.getElementById('breakfast1').value,
        document.getElementById('breakfast2').value,
        document.getElementById('breakfast3').value
    ];
    let lunch = [
        document.getElementById('lunch1').value,
        document.getElementById('lunch2').value,
        document.getElementById('lunch3').value
    ];
    let dinner = [
        document.getElementById('dinner1').value,
        document.getElementById('dinner2').value,
        document.getElementById('dinner3').value
    ];

    // Function to get random dish
    function getRandomDish(options, yesterdayDish) {
        let randomIndex;
        let todayDish;
        do {
            randomIndex = Math.floor(Math.random() * options.length);
            todayDish = options[randomIndex];
        } while (todayDish === yesterdayDish); 

        return todayDish;
    }

    // Function to generate a meal plan
    function mealPlan(day, yesterdayMeal) {
        let bf = getRandomDish(breakfast, yesterdayMeal.breakfast);
        let lun = getRandomDish(lunch, yesterdayMeal.lunch);
        let din = getRandomDish(dinner, yesterdayMeal.dinner);

        return { breakfast: bf, lunch: lun, dinner: din };
    }

    let yesterdayMeal = { breakfast: "", lunch: "", dinner: "" };
    let mealSchedule = [];

    // Generate meal plans for each day
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    daysOfWeek.forEach(day => {
        yesterdayMeal = mealPlan(day, yesterdayMeal);
        mealSchedule.push(yesterdayMeal);
    });

    // Display the meal plan in the table
    let mealTable = document.getElementById('mealTable').getElementsByTagName('tbody')[0];
    mealTable.innerHTML = ''; // Clear previous meal plans

    mealSchedule.forEach((meal, index) => {
        let row = mealTable.insertRow();
        row.innerHTML = `
            <td>${daysOfWeek[index]}</td>
            <td>${meal.breakfast}</td>
            <td>${meal.lunch}</td>
            <td>${meal.dinner}</td>
        `;
    });
});

// char in main 
const ctx = document.getElementById('myChart');

function formatMonthWithDays() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    let currentMonth = monthNames[date.getMonth()]
    let currentDay = new Date().getDate();
    let monthLabels = [];
    for (let index = 0; index < currentDay; index++) {
        monthLabels.push(index + ' ' + currentMonth);
    }
    return monthLabels;
}

const data = [25, 40, 60, 75, 25, 40, 60, 80, 25, 44, 60, 50, 25, 40, 74, 75, 25, 40, 35, 65, 74, 22];

const colors = data.map(value => {
    if (value < 30) return '#CA6B6E'; // رنگ قرمز برای مقادیر کمتر از 20
    if (value >= 30 && value <= 50) return '#478F96'; // رنگ زرد برای مقادیر بین 20 و 60
    return '#D08726'; // رنگ سبز برای مقادیر بیشتر از 60
});

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: formatMonthWithDays(),
        datasets: [{
            label: '',
            data: data,
            backgroundColor: colors,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            borderRadius: 10,
            barThickness: 8
        }]
    },
    options: {

        scales: {
            y: {
                min: 20, // حداقل مقدار محور Y
                max: 80, // حداکثر مقدار محور Y
                ticks: {
                    callback: function (value) {
                        return value + '%'; // نمایش درصد
                    }
                }
            }
        }
        , plugins: {
            legend: {
                display: false // مخفی کردن legend
            }
        }
    }
});



// toggle bmi

let bmiToggleBtn = document.querySelector('.bmi-toggle-btn');
let bmiCalc = document.querySelector('.bmi-calculator');
let bmiCalcCloseBtn = document.querySelector('.bmi-calculator__controller');

bmiToggleBtn.addEventListener('click', () => {
    bmiCalc.classList.add('bmi-calculator--open');
    bmiToggleBtn.classList.add('bmi-toggle-btn--hidden');
});

bmiCalcCloseBtn.addEventListener('click', () => {
    bmiCalc.classList.remove('bmi-calculator--open');
    bmiToggleBtn.classList.remove('bmi-toggle-btn--hidden');
});
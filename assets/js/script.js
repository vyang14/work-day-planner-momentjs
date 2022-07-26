var theHours = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];
var lsData = JSON.parse(localStorage.getItem("dayPlanner")) || []
var planEl = document.getElementById('timeBlocks');
var todayMyDudes = moment().format('ddd MMM Do, YYYY');
var counter = 8;
var j = 0;

if (lsData.length === 0) { //sets up the array to store without undefined values if localstorage is empty
    for (let i = 0; i < 10; i++) {
        lsData.push({ time: counter, task: "" });
        counter++;
    }
}

$("#currentDay").text(todayMyDudes);// displays the date in the jumbotron

function theTimeIsNow() { // displays the time in the jumbotron
    var currentTime = moment().format('hh:mm:ss');
    $("#currentTime").text(`Current time ${currentTime}`);
};

function saveContent() { //saves the textarea content to localstorage upon clicking the save button
    var taskNum = parseInt(this.previousElementSibling.classList[2]);
    var saveTask = {
        time: taskNum,
        task: this.previousElementSibling.value,
    };
    for (let i = 0; i < lsData.length; i++) {
        if (lsData[i].time == taskNum) {
            lsData[i] = saveTask
        }
    }
    localStorage.setItem("dayPlanner", JSON.stringify(lsData))
};

setInterval(theTimeIsNow, 1000); // calls fx to display the time in the jumbotron every second

for (var i = 8; i < 18; i++) {  //for loop to append rows and cotents inside of the rows
    var stored = localStorage.getItem("workDay");
    var entireRow = document.createElement('div');
    var timeEl = document.createElement('div');
    var hourEl = document.createElement('div');
    var taskRow = document.createElement('textarea');
    var saveRow = document.createElement('button');
    entireRow.classList.add('row');
    timeEl.classList.add('timeOfDay', 'col-2');
    taskRow.classList.add('input', 'col-9', i);
    saveRow.classList.add('save', 'col-1');
    hourEl.appendChild(document.createTextNode(theHours[i]));
    taskRow.value = lsData[j].task;
    j++;
    if (i < moment().format('HH')) {
        taskRow.classList.add('past');
    } else if (i === moment().format('HH')) {
        taskRow.classList.add('present');
    } else {
        taskRow.classList.add('future');
    }
    saveRow.innerHTML = '💾';
    timeEl.appendChild(hourEl);
    entireRow.appendChild(timeEl);
    entireRow.appendChild(taskRow);
    entireRow.appendChild(saveRow);
    planEl.appendChild(entireRow)
    saveRow.addEventListener('click', saveContent);
};

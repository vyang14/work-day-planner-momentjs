var theHours = ['12AM', '1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM', '9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM', '8PM', '9PM', '10PM', '11PM']
var planEl = document.getElementById('timeBlocks');
var todayMyDudes = moment().format('ddd MMM Do, YYYY');
$("#currentDay").text(todayMyDudes);

function theTimeIsNow(){
    var currentTime = moment().format('hh:mm:ss');
    $("#currentTime").text(`Current time ${currentTime}`);
};

function saveContent(){
    var storedValues = {
    time: this.previousElementSibling.previousElementSibling.textContent,
    task: this.previousElementSibling.value
    };
    localStorage.setItem("storedStuff", JSON.stringify(storedValues));
};

setInterval(theTimeIsNow, 1000);

for (var i = 8; i < 19; i++){
    console.log(i + ' = i');
    var entireRow = document.createElement('div');
    var timeEl = document.createElement('div');
    var hourEl = document.createElement('div');
    var taskRow = document.createElement('textarea');
    var saveRow = document.createElement('button');

    hourEl.appendChild(document.createTextNode(theHours[i]));
    saveRow.innerHTML = '💾';
    entireRow.classList.add('row');
    timeEl.classList.add('timeOfDay', 'col-2');
    taskRow.classList.add('input','col-9', `task${i}`);
    saveRow.classList.add('save','col-1');

    if (i < moment().format('HH')) {
        taskRow.classList.add('past');
    } else if (i === moment().format('HH')){
        taskRow.classList.add('present');
    } else {
        taskRow.classList.add('future');
    }
    
    timeEl.appendChild(hourEl);
    entireRow.appendChild(timeEl);
    entireRow.appendChild(taskRow);
    entireRow.appendChild(saveRow);
    planEl.appendChild(entireRow);

    saveRow.addEventListener('click', saveContent);
};


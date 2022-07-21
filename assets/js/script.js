var theHours = ['12AM', '1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM', '9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM', '8PM', '9PM', '10PM', '11PM'];
var toStorage = new Array(24);
var planEl = document.getElementById('timeBlocks');
var todayMyDudes = moment().format('ddd MMM Do, YYYY');
$("#currentDay").text(todayMyDudes);

function theTimeIsNow(){
    var currentTime = moment().format('hh:mm:ss');
    $("#currentTime").text(`Current time ${currentTime}`);
};

function saveContent(){
    var fromStorage = JSON.parse([localStorage.getItem("workDay")]);
    var taskNum = parseInt(this.previousElementSibling.classList[2]);
    var saveTask =  {
    time: this.previousElementSibling.previousElementSibling.textContent,
    task: this.previousElementSibling.value
    };
    debugger;
    if (fromStorage === null){
        toStorage[taskNum] = saveTask;
        localStorage.setItem("workDay", JSON.stringify(toStorage));
    } else {
        fromStorage[taskNum] = saveTask;
        localStorage.setItem("workDay", JSON.stringify(fromStorage));
    }    
};

function getTasks(i){
    var fromStorage = JSON.parse([localStorage.getItem("workDay")]);
    var textEl = document.querySelector('textarea');

    forEach(textEl) => {
        for (var i = 8; i < 19; i++) {
            if (fromStorage[i].time = this.previousElementSibling.innerHTML) {
                this.innerHTML = fromStorage[i].task;
            } else {
                this.innerHTML = '';
            }
        }
    };
    
}

setInterval(theTimeIsNow, 1000);

for (var i = 8; i < 19; i++){
    var stored = localStorage.getItem("workDay");
    var entireRow = document.createElement('div');
    var timeEl = document.createElement('div');
    var hourEl = document.createElement('div');
    var taskRow = document.createElement('textarea');
    var saveRow = document.createElement('button');

    entireRow.classList.add('row');
    timeEl.classList.add('timeOfDay', 'col-2');
    taskRow.classList.add('input','col-9', i);
    saveRow.classList.add('save','col-1');

    hourEl.appendChild(document.createTextNode(theHours[i]));
    
    if (i < moment().format('HH')) {
        taskRow.classList.add('past');
    } else if (i === moment().format('HH')){
        taskRow.classList.add('present');
    } else {
        taskRow.classList.add('future');
    }

//     if (stored = null){
//         taskRow.innerHTML = '';
//         break;
//     } else {    
//         var fromStorage = localStorage.getItem("workDay");
//         if (fromStorage[i] === null) {
//             taskRow.innerHTML = '';
//             break;
//         } else {
//         if (fromStorage[i].time = hourEl.innerHTML) {
//         taskRow.innerHTML = fromStorage[i].task;
//         } else {
//         taskRow.innerHTML = '';
//         }
//     }
//     }
// debugger;
    saveRow.innerHTML = '💾';

    timeEl.appendChild(hourEl);
    entireRow.appendChild(timeEl);
    entireRow.appendChild(taskRow);
    entireRow.appendChild(saveRow);
    planEl.appendChild(entireRow);

    saveRow.addEventListener('click', saveContent);
    getTasks();
};

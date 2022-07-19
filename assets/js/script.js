var theHours = ['8AM', '9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM', '8PM', '9PM']
var planEl = document.getElementById('timeBlocks');
var todayMyDudes = moment('1-1-2022', 'M-D-YYYY').format('ddd MMM Do, YYYY');
$("#currentDay").text(todayMyDudes);

function theTimeIsNow(){
    var currentTime = moment().format('hh:mm:ss');
    $("#currentTime").text(currentTime);
}

setInterval(theTimeIsNow, 1000)

for (var i = 0; i < theHours.length; i++){
    // debugger;
    console.log(`for loop iteration: ${i}.`);  
    var entireRow = document.createElement('div');
    var timeEl = document.createElement('div');
    var hourEl = document.createElement('div');
    var taskRow = document.createElement('input');
    var saveRow = document.createElement('button');

    hourEl.appendChild(document.createTextNode(theHours[i]));
    saveRow.innerHTML = '💾';
    entireRow.classList.add('row');
    timeEl.classList.add('timeOfDay', 'col-1');
    taskRow.classList.add('input','col-10');
    saveRow.classList.add('save','col-1');
    
    timeEl.appendChild(hourEl);
    entireRow.appendChild(timeEl);
    entireRow.appendChild(taskRow);
    entireRow.appendChild(saveRow);
    planEl.appendChild(entireRow);
    // var entireRow = $('<div>').attr('class', 'row');
    // var timeRow = $('<div></div>').text(theHours[i])
    // var taskRow = $('<input>').attr({
    //     class: 'input', 
    //     id: `task${i}`,
    //     placeholder: '--Your Task Here--'});
    // var saveRow = $('<div></div>').text('💾');

    // $(timeRow).attr('class', 'theTime');
    // $(saveRow).attr('class', 'col-2');


// entireRow.classList.add('customRow');
// timeRow.classList.add('theTime');
// taskRow.classList.add('col-8');
// saveRow.classList.add('center', 'save');

    // $('#theTime').html($(theHours));

    

    // entireRow.appendChild(timeRow);
    // entireRow.appendChild(taskRow);
    // entireRow.appendChild(saveRow);
    // planEl.appendChild(entireRow);
};


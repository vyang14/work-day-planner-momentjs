var planEl = document.querySelector('container');
var theHours = ['8AM', '9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM', '8PM', '9PM']

var todayMyDudes = moment('1-1-2022', 'M-D-YYYY').format('ddd MMM Do, YYYY');
$("#currentDay").text(todayMyDudes);

var currentTime = moment().format('hh:mm:ss');

for (var i = 0; i < theHours.length; i++){
    // debugger;
    console.log(`for loop iteration: ${i}.`)

    var entireRow = $('<div>').attr('class', 'row');
    var timeRow = $('<div>').attr('class', 'theTime');
    var taskRow = $('<input>').attr({
        class: 'input', 
        id: `task${i}`,
        placeholder: '--Your Task Here--'});
    var saveRow = $('<div>').attr('class', 'col-2');

// entireRow.classList.add('customRow');
// timeRow.classList.add('theTime');
// taskRow.classList.add('col-8');
// saveRow.classList.add('center', 'save');


    $('#theTime').html($(theHours));
    $('save').html($('💾'));

    entireRow.appendChild(timeRow);
    entireRow.appendChild(taskRow);
    entireRow.appendChild(saveRow);
    planEl.appendChild(entireRow);
};


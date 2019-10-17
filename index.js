var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var todaysDate = new Date();

var str = "Today is: ";
var bold = str.bold();

//sliding up function for the slide up button
function slideUp(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "0px";
}

//sliding down function for the slide down button
function slideDown(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "655px";
}

//Loading the functions below
window.onload = (event) => {
    changePageTitle();
    showDateTime();
    showTime();
    GetTodayTask(tasks);
    GetTomorrowTask(tasks);
};

//getting the st, nd, rd and th for days
function getNth(number) {
    var num = parseInt(number.toString().split(' ').pop());
    var res = num == 1 ? "st" : num == 2 ? "nd" : num == 3 ? "rd" : num > 3 || num == 11 ? "th" : "";
    return res;
}

//Displaying current date
function showDateTime() {
    document.getElementById("datetime").innerHTML = bold + daysOfWeek[todaysDate.getDay()] +
        " " + todaysDate.getDate() +
        getNth(todaysDate.getDate()) +
        " " + monthsOfYear[todaysDate.getMonth()] +
        " " + todaysDate.getFullYear();
}


//getting weekday
function getDayOfWeek(dayNumber) {

    return daysOfWeek[dayNumber];
}

//Adding a task in the table
function addTodayTask() {
    let getDescription = document.getElementById("addToday").value;
    let selectTime = document.getElementById("timePick").value;
    let newTask = {
        "id": tasks.length + 1,
        "day": getDayOfWeek(todaysDate.getDay()),
        "time": selectTime,
        "description": getDescription
    };
    if (selectTime === "" || getDescription === "") {
        alert("Please fill all the fields");
    } else {
        tasks.push(newTask);

        GetTodayTask(tasks);
    }
}

//Deleting a specific task of today
function deleteToday(id) {

    tasks = tasks.filter(function(obj) {
        return obj.id !== id;
    });
    //reloading the today's task table
    GetTodayTask(tasks);
}

//Deleting a specific task of tomorrow
function deleteTomorrow(id) {

    tasks = tasks.filter(function(obj) {
        return obj.id !== id;
    });
    //reloading the tomorrow's task table
    GetTomorrowTask(tasks);
}


//Displaying the current time
function showTime() {
    //Shows current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Check whether AM or PM 
    var newformat = hours >= 12 ? 'PM' : 'AM';

    // AM-PM Format 
    hours = hours % 12;

    // To display "0" as "12" 
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    //Display current time
    var curtime = "Current time is: ";
    var bold = curtime.bold();

    var currentTime = document.getElementById("time").innerHTML = bold + hours + '.' + minutes + ' ' + newformat;
    return currentTime;
}


//Array of JSON objects
var tasks = [

    {
        "id": 1,
        "day": "Monday",
        "time": "08:00",
        "description": "Laugh to Your Heart’s Content"
    },
    {
        "id": 2,
        "day": "Monday",
        "time": "11:00",
        "description": "Dance Like No One’s Watching"
    },
    {
        "id": 3,
        "day": "Monday",
        "time": "16:00",
        "description": "Make Dinner for homeless guy"
    },
    {
        "id": 4,
        "day": "Tuesday",
        "time": "07:00",
        "description": "Change Your Morning Routine"
    },
    {
        "id": 5,
        "day": "Tuesday",
        "time": "10:00",
        "description": "Go People Watching"
    },
    {
        "id": 6,
        "day": "Tuesday",
        "time": "18:00",
        "description": "Do Something Stupid"
    },
    {
        "id": 7,
        "day": "Wednesday",
        "time": "08:00",
        "description": "Sing in the Shower"
    },
    {
        "id": 8,
        "day": "Wednesday",
        "time": "13:00",
        "description": "Listen to Nature Sounds"
    },
    {
        "id": 9,
        "day": "Wednesday",
        "time": "15:00",
        "description": "Join a Club"
    },
    {
        "id": 10,
        "day": "Thursday",
        "time": "06:00",
        "description": "Strike a Pose"
    },
    {
        "id": 11,
        "day": "Thursday",
        "time": "09:00",
        "description": " Challenge Yourself"
    },
    {
        "id": 12,
        "day": "Thursday",
        "time": "20:00",
        "description": "Reconnect with an Old Friend"
    },
    {
        "id": 13,
        "day": "Friday",
        "time": "09:00",
        "description": "Learn a Joke"
    },
    {
        "id": 14,
        "day": "Friday",
        "time": "12:00",
        "description": "Become an Expert"
    },
    {
        "id": 15,
        "day": "Friday",
        "time": "19:00",
        "description": "Take a Class"
    },
    {
        "id": 16,
        "day": "Saturday",
        "time": "07:00",
        "description": "Change Your Look"
    },
    {
        "id": 17,
        "day": "Saturday",
        "time": "12:00",
        "description": "Excite Your Palate"
    },
    {
        "id": 18,
        "day": "Saturday",
        "time": "21:00",
        "description": "Begin a Diary"
    },
    {
        "id": 19,
        "day": "Sunday",
        "time": "10:00",
        "description": "Embrace Your Curiosity"
    },
    {
        "id": 20,
        "day": "Sunday",
        "time": "11:00",
        "description": "Pretend to Be a Tourist"
    },
    {
        "id": 21,
        "day": "Sunday",
        "time": "17:00",
        "description": "Drive Away with No Destination in Mind"
    }

];

//Changing the page title 
function changePageTitle() {
    var txt = document.getElementById('txt').value;
    document.getElementById('title').innerHTML = txt;
    document.getElementById("MyDay").innerHTML = txt;
}

//Selecting a bagground color
function clrchange(SelectedColor) {
    document.bgColor = SelectedColor;
}

//Getting the data of today's task and showing it in the table
function GetTodayTask(tasks) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    for (let task of tasks) {
        if (daysOfWeek[todaysDate.getDay()] === task.day) {
            dataHtml += `<tr><td>${task.time}</td><td>${task.description}</td><td><button onClick="deleteToday(${task.id})">remove</button></td></tr>`;
        }
    }
    tableBody.innerHTML = dataHtml;
}

//Getting the data of tomorrow's task and showing it in the table
function GetTomorrowTask(tasks) {
    const tableBody = document.getElementById('tableData2');
    let dataHtml = '';
    for (let task of tasks) {
        if (daysOfWeek[todaysDate.getDay() + 1] === task.day) {
            dataHtml += `<tr><td>${task.time}</td><td>${task.description}</td><td><button onClick="deleteTomorrow(${task.id})">remove</button></td></tr>`;
        }
        tableBody.innerHTML = dataHtml;
    }
}
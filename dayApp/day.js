let d = new Date();
let weekDay = Array(7);
weekDay[0] = 'Sunday';
weekDay[1] = 'Monday';
weekDay[2] = 'Tuesday';
weekDay[3] = 'Wednesday';
weekDay[4] = 'Thursday';
weekDay[5] = 'Friday';
weekDay[6] = 'Saturday';

let d2 = new Date();
let weekDay2 = Array(7);
weekDay2[0] = 'Time to chillax';
weekDay2[1] = 'Monday morning blues !';
weekDay2[2] = 'Taco Time !';
weekDay2[3] = 'Two more days to the weekend.';
weekDay2[4] = 'The weekend is almost here...';
weekDay2[5] = 'Weekend is here!';
weekDay2[6] = 'Time to party';

let day = weekDay[d.getDay()];
let sentence = weekDay2[d2.getDay()];

let displayWeekDay = document.getElementById('day');
let displaySentence = document.getElementById('phrase');

displayWeekDay.innerHTML = day;
displaySentence.innerHTML = sentence;
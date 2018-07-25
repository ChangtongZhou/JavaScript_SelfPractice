/**
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
determine if a person could attend all meetings.
For example,
•	Given [[0, 30],[5, 10],[15, 20]],
•	return false.

*/
function Interval (start, end) {
  this.start = start;
  this.end = end;
}

function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].end > intervals[i+1].start) return false;
  }
  return true;
}

let intervals = [];
intervals.push(new Interval(7, 10));
intervals.push(new Interval(2, 4));
console.log(canAttendMeetings(intervals));

let intervals2 = [];
intervals2.push(new Interval(0, 30));
intervals2.push(new Interval(5, 10));
intervals2.push(new Interval(15, 20));
console.log(canAttendMeetings(intervals2));

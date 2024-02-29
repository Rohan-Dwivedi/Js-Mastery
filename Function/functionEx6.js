// Given a array of numbers, qfilter out the marks of student who have scored 90+ marks;

let marks = [33, 45, 67, 89, 90, 91, 92, 93, 80, 95, 96, 67, 98, 39];

let gmarks = marks.filter((val) => {
  return val > 90;
});

console.log(gmarks);

let grades = [90, 85, 95];

let average = grades.reduce((a, b) => a + b, 0) / grades.length;

console.log("Average grade:", average);

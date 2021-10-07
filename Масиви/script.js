const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//1
const getPairs = (students) => {
   const male = students.filter(student => student[student.length - 1] !== 'а');
   const female = students.filter(student => student[student.length - 1] === 'а');
   const pairs = [];
   for (let i = 0; i < male.length; i++) {
    pairs.push([male[i], female[i]]);
   }
   return pairs;
};


//2
const getThemes = (pairs, themes) => {
  const getPairTheme = [];
  for (let i = 0; i < themes.length; i++) {
    getPairTheme.push([pairs[i][0] + " і " + pairs[i][1], themes[i]]);
  }
   return getPairTheme;
};


//3
const addMark = (students, marks) => students.map((student, i) => [student, marks[i]]);


//4
const randomMark = (pairsWithThemes) => pairsWithThemes.map((pairs) => [...pairs, Math.floor(Math.random()* 5 + 1)]);


const pairs = getPairs(students);
const getPairTheme = getThemes(pairs, themes);
const studentsWithMarks = addMark(students, marks);
const pairsWithRandomMarks = randomMark(getPairTheme);


console.log(pairs);
console.log(getPairTheme);
console.log(studentsWithMarks);
console.log(pairsWithRandomMarks);
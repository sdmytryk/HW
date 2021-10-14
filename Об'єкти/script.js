const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


//1
const getSubjects = (students) => {
  const arrSubjects = Object.keys(students.subjects);

  const listSubjects = arrSubjects.map((subject) => (subject.slice(0,1).toUpperCase() + subject.slice(1).toLowerCase()).split("_").join(" "));

  return listSubjects;
}


//2
const getAverageMark = (students) => {
  const marksSubject = Object.values(students.subjects);
  const getMark = marksSubject[0].concat(marksSubject[1], marksSubject[2]);

  const averageMark = (getMark.reduce((sum, mark) => sum+mark) / getMark.length).toFixed(2)

  return averageMark;
}


//3
const getStudentInfo = (students) => {
  return {
  course: students.course,
  name: students.name,
  averageMark: getAverageMark(students)
}
}


//4
const getStudentsNames = (students) => students.map(student => student.name).sort();

//5
const getBestStudent = (students) => students.reduce((student1, student2) => getAverageMark(student1) > getAverageMark(student2) ? student1 : student2).name;


//6
const calculateWordLetters = (word) => {
  const wordLowerCased = word.toLowerCase().split('');
  const result = {};

  wordLowerCased.map(item => !result[item] ? result[item] = 1 : result[item]++);

  return result;
}


console.log('Функція 1:', getSubjects(students[0]));
console.log('Функція 2:', getAverageMark(students[0]));
console.log('Функція 3:', getStudentInfo(students[0]));
console.log('Функція 4:', getStudentsNames(students));
console.log('Функція 5:', getBestStudent(students));
console.log('Функція 6:', calculateWordLetters("Тест"));

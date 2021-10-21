class Student {
  constructor (university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = [5, 4, 4, 5];
      this.isStudy = true;
  }


  getInfo() {
    return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`;
  }


  get getMarks() {
    if (this.isStudy) {
      return this.marks;
    } else {
      return null;
    }
  }


  set setMarks(mark) {
    if (this.isStudy) {
      this.marks.push(mark);
      return this.studentMarks;
    } else {
      return null;
    }
  }


  getAverageMark() {
    return this.marks.reduce((sum, mark) => sum + mark) / this.marks.length;
  }


  dismiss() {
    this.isStudy = false;
  }
  

  recover() {
    this.isStudy = true;
  }
}


const sofia = new Student('Львівська Політехніка', 4, 'Софія Дмитрик');


console.log(sofia.getInfo());
console.log(sofia.getMarks);
console.log(`Середній бал ${sofia.getAverageMark()}`);
sofia.setMarks = 5;
sofia.dismiss();
console.log(sofia.getMarks);
sofia.recover();
console.log(sofia.getMarks);


//Advanced
class BudgetStudent extends Student {
  constructor (university, course, fullName) {
      super(university, course, fullName);
      setInterval(() => this.getScholarship(), 30000)
    }
  getScholarship() {
      if (this.getAverageMark() >= 4 && this.isStudy) {
          console.log('Ви отримали 1400 грн. стипендії');
      } 
    }
}


const petro = new BudgetStudent('Київський національний університет ім. Тараса Шевченка', '4', 'Петро Мороз');


console.log(petro.getInfo());
petro.getScholarship();
petro.setMarks = 3;
petro.setMarks = 3;
petro.setMarks = 3;
console.log(`Середній бал ${petro.getAverageMark()}`);
petro.getScholarship();

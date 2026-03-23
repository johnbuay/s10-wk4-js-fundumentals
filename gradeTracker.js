const gradeTracker = {
  students: [],

  addStudent(name, grades) {
    this.students.push({ name, grades });
  },

  getStudent(name) {
    return this.students.find(student => student.name === name) || null;
  },

  getStudentAverage(name) {
    const student = this.getStudent(name);
    if (!student) return null;

    const values = Object.values(student.grades);
    const total = values.reduce((sum, grade) => sum + grade, 0);
    return Number((total / values.length).toFixed(2));
  },

  getSubjectAverage(subject) {
    let total = 0;
    let count = 0;

    for (const student of this.students) {
      if (student.grades[subject] !== undefined) {
        total += student.grades[subject];
        count++;
      }
    }

    if (count === 0) return null;
    return Number((total / count).toFixed(2));
  },

  getTopStudent() {
    if (this.students.length === 0) return null;

    let topStudent = this.students[0];
    let topAverage = this.getStudentAverage(topStudent.name);

    for (const student of this.students) {
      const avg = this.getStudentAverage(student.name);
      if (avg > topAverage) {
        topAverage = avg;
        topStudent = student;
      }
    }

    return {
      name: topStudent.name,
      average: topAverage
    };
  },

  getStrugglingStudents() {
    return this.students.filter(student => this.getStudentAverage(student.name) < 70);
  },

  getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  },

  generateReportCard(name) {
    const student = this.getStudent(name);
    if (!student) return "Student not found";

    let report = `Report Card for ${student.name}\n`;
    report += "----------------------\n";

    for (const [subject, grade] of Object.entries(student.grades)) {
      report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
    }

    const average = this.getStudentAverage(name);
    report += `Average: ${average}\n`;
    report += `Overall Grade: ${this.getLetterGrade(average)}`;

    return report;
  }
};

gradeTracker.addStudent("James", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bobby", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("James average:", gradeTracker.getStudentAverage("James"));
console.log("Math average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent());
console.log("Struggling students:", gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("James"));
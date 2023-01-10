function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject  = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ((this.marks === undefined) && (this.marks === null)) {
        this.marks = [...marks];
    } else {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks.length === 0) {
        return 0;
    } else {
        let sum = this.marks.reduce((sum, elem) => sum + elem);
        return sum / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
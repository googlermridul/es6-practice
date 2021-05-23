class Student{
   constructor(sId, sName) {
      this.id = sId;
      this.name = sName;
      this.school = "bkkmghs"
   }
}

const student1 = new Student(1, "pushpita")
const student2 = new Student(2, "rahman")

console.log(student1, student2);
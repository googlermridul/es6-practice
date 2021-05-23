class Parent {
   constructor() {
      this.fatherName = "jeorgeKhan";
   }
}
class Child extends Parent {
   constructor(name) {
      super();
      this.name = name;
   }
}

const baby = new Child("asman");
const baby2 = new Child("erTole");
console.log(baby);
console.log(baby2);
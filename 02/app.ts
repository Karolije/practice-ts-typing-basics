type Student = {
    type: "student";
    firstName: string;
    lastName: string;
    promoter: Professor; 
}

type Professor = {
    type: "professor";
    firstName: string;
    lastName: string;
    students: Student[];
}



  const professor1: Professor = {
    type: "professor",
    firstName: "Anna",
    lastName: "Nowak",
    students: []
  };

  
  const professor2: Professor = {
    type: "professor",
    firstName: "Beata",
    lastName: "Kwiecień",
    students: []
  };
  const student1: Student = {
    type: "student",
    firstName: "Karolina",
    lastName: "Jankowska",
    promoter: professor1
  };
  const student3: Student = {
    type: "student",
    firstName: "Jan",
    lastName: "Kowalski",
    promoter:professor1
  };
  const student2: Student = {
    type: "student",
    firstName: "Paulina",
    lastName: "Bąk",
    promoter: professor2
  };

  professor1.students = [student1, student3];
professor2.students = [student2];

  function getPersonInfo (person: Student | Professor): string | string[] {
    if (person.type === "student") {
      return `${person.promoter.firstName} ${person.promoter.lastName}`;
    } else {
      return person.students.map(
        (student) => `${student.firstName} ${student.lastName}`
      );
    }
  }

console.log(getPersonInfo(student2))
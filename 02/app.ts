type Student = {
    type: "student";
    firstName: string;
    lastName: string;
    promoter: {firstName: string; lastName: string};
}

type Professor = {
    type: "professor";
    firstName: string;
    lastName: string;
    students: string[];
}

const student1: Student = {
    type: "student",
    firstName: "Karolina",
    lastName: "Jankowska",
    promoter: {
      firstName: "Anna",
      lastName: "Nowak"
    }
  };

  const student2: Student = {
    type: "student",
    firstName: "Paulina",
    lastName: "Bąk",
    promoter: {
      firstName: "Beata",
      lastName: "Kwiecień"
    }
  };

  const student3: Student = {
    type: "student",
    firstName: "Jan",
    lastName: "Kowalski",
    promoter: {
      firstName: "Anna",
      lastName: "Nowak"
    }
  };

  const professor1: Professor = {
    type: "professor",
    firstName: "Anna",
    lastName: "Nowak",
    students: ["Karolina Jankowska", "Jan Kowalski"]
  };

  
  const professor2: Professor = {
    type: "professor",
    firstName: "Beata",
    lastName: "Kwiecień",
    students: ["Paulina Bąk"]
  };
  
  function getPersonInfo (person: Student | Professor): string | string[] {
if (person.type === "student") {
    return `${person.promoter.firstName} ${person.promoter.lastName}`
} else {
    return person.students
} 
}

console.log(getPersonInfo(student2))
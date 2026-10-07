
const employees = [
  {
    id: 1,
    name: "Arun",
    age: 28,
    department: "IT",
    salary: 60000,
    experience: 4,
    skills: ["JavaScript", "React"],
    isActive: true
  },
  {
    id: 2,
    name: "Priya",
    age: 32,
    department: "HR",
    salary: 55000,
    experience: 7,
    skills: ["Recruitment", "Communication"],
    isActive: true
  },
  {
    id: 3,
    name: "Rahul",
    age: 25,
    department: "IT",
    salary: 45000,
    experience: 2,
    skills: ["JavaScript", "Node.js"],
    isActive: false
  },
  {
    id: 4,
    name: "Sneha",
    age: 30,
    department: "Finance",
    salary: 70000,
    experience: 6,
    skills: ["Excel", "Accounting"],
    isActive: true
  },
  {
    id: 5,
    name: "Vikram",
    age: 35,
    department: "IT",
    salary: 90000,
    experience: 10,
    skills: ["JavaScript", "Node.js", "MongoDB"],
    isActive: true
  },
  {
    id: 6,
    name: "Divya",
    age: 27,
    department: "Marketing",
    salary: 50000,
    experience: 3,
    skills: ["SEO", "Content Writing"],
    isActive: true
  },
  {
    id: 7,
    name: "Karthik",
    age: 29,
    department: "Finance",
    salary: 65000,
    experience: 5,
    skills: ["Excel", "Accounting", "SQL"],
    isActive: false
  },
  {
    id: 8,
    name: "Anjali",
    age: 24,
    department: "IT",
    salary: 40000,
    experience: 1,
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true
  },
  {
    id: 9,
    name: "Suresh",
    age: 38,
    department: "HR",
    salary: 80000,
    experience: 12,
    skills: ["Recruitment", "Management"],
    isActive: true
  },
  {
    id: 10,
    name: "Meena",
    age: 31,
    department: "Marketing",
    salary: 58000,
    experience: 8,
    skills: ["SEO", "Social Media", "Content Writing"],
    isActive: false
  }
];

let highpaid=employees.filter((emp)=>{
    return emp.salary > 60000}).map((emp)=>{return employees.name})

console.log(highpaid)

console.log('____________________________');

//3. get the name of all the emp who work in the it dept

// 4.calculate the total sal of all emp

// 5.calculate the average salary of all emp

// 6.get all the emp who are currently active

// 7.find the emp with id=7

// 3.
console.log('_______________itemp_________________________');

let itemp=employees.filter((emp)=>{
    return emp.department=='IT'
}).map((emp)=>{
    return emp.name
})
console.log(itemp);

// 4.Calculate the total salary of the employee
console.log('____________totsal_______________________');

let totsal=employees.reduce((acc,emp)=>{return acc+emp.salary},0)
console.log(totsal);
console.log('___________avgsal___________');

let avgsal=totsal/employees.length
console.log(avgsal);







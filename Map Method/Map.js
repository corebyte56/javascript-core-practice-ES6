const users = [
  { id: 1, name: "Fahim Ahmed", role: "Frontend Dev" },
  { id: 2, name: "Rahim Uddin", role: "Backend Dev" },
  { id: 3, name: "Karim Hasan", role: "UI Designer" },
  { id: 4, name: "Nusrat Jahan", role: "QA Engineer" },
  { id: 5, name: "Tanvir Islam", role: "Full Stack Dev" },
  { id: 6, name: "Sadia Khan", role: "Project Manager" },
  { id: 7, name: "Imran Hossain", role: "DevOps Engineer" },
  { id: 8, name: "Mim Akter", role: "UX Designer" },
  { id: 9, name: "Rafiq Ahmed", role: "Data Analyst" },
  { id: 10, name: "Jannat Ara", role: "Mobile Dev" }
];

let user = users.map((item, idx) => (
    console.log(`
        Name : ${item.name}, 
        Role : ${item.role}
        `)
    
))
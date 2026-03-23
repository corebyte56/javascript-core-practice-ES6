
function jsonToJs(Data) {
    let jsFormate = JSON.parse(Data).users;
    console.log(jsFormate);
    
}




const users = {
  "users": [
    { "id": 1, "name": "Fahim Ahmed", "role": "Frontend Dev", "age": 23, "country": "Bangladesh" },
    { "id": 2, "name": "Rahim Uddin", "role": "Backend Dev", "age": 27, "country": "India" },
    { "id": 3, "name": "Karim Hasan", "role": "UI Designer", "age": 24, "country": "Pakistan" },
    { "id": 4, "name": "Nusrat Jahan", "role": "QA Engineer", "age": 25, "country": "Bangladesh" },
    { "id": 5, "name": "Tanvir Islam", "role": "Full Stack Dev", "age": 28, "country": "India" },
    { "id": 6, "name": "Sadia Khan", "role": "Project Manager", "age": 30, "country": "USA" },
    { "id": 7, "name": "Imran Hossain", "role": "DevOps Engineer", "age": 26, "country": "Canada" },
    { "id": 8, "name": "Mim Akter", "role": "UX Designer", "age": 22, "country": "UK" },
    { "id": 9, "name": "Rafiq Ahmed", "role": "Data Analyst", "age": 29, "country": "Germany" },
    { "id": 10, "name": "Jannat Ara", "role": "Mobile Dev", "age": 24, "country": "France" },
    { "id": 11, "name": "Al Amin", "role": "Frontend Dev", "age": 25, "country": "Bangladesh" },
    { "id": 12, "name": "Rumana Akter", "role": "Backend Dev", "age": 27, "country": "India" },
    { "id": 13, "name": "Shakil Khan", "role": "UI Designer", "age": 24, "country": "Pakistan" },
    { "id": 14, "name": "Tania Rahman", "role": "QA Engineer", "age": 26, "country": "Bangladesh" },
    { "id": 15, "name": "Sabbir Hossain", "role": "Full Stack Dev", "age": 28, "country": "USA" },
    { "id": 16, "name": "Nadia Akter", "role": "Project Manager", "age": 30, "country": "Canada" },
    { "id": 17, "name": "Feroz Khan", "role": "Frontend Dev", "age": 23, "country": "UK" },
    { "id": 18, "name": "Rasheda Begum", "role": "Backend Dev", "age": 27, "country": "Bangladesh" },
    { "id": 19, "name": "Tanvir Hossain", "role": "UI Designer", "age": 24, "country": "India" },
    { "id": 20, "name": "Jahanara Akter", "role": "QA Engineer", "age": 26, "country": "Pakistan" }
  ]
}

jsonToJs(users)
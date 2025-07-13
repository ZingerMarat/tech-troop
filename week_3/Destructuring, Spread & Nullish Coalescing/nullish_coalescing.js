let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]


for (let emp of employeesArr){
    const validName = emp.name ?? false
    const validId = emp.id ?? false
    const validAge = emp.age ?? false

    if (!validName || !validId || !validAge){
        console.log(emp.name);
    }
}
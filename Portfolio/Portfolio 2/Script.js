let student={
    id: 101,
    sname: "Ayush",
    age: 21,
    isWorking: false,
    img:"https://i.pinimg.com/736x/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg"
}
let{id,sname,age,isWorking,img}=student
let info = `
    <h1>Welcome</h1>
    <img src="${img}" alt="No image" height="100px" width="100px"><br>
    <h2>ID: ${id}</h2>
    <h3>Age: ${age} yr old </h3>
    <h3>Working/Student: ${isWorking ? "Working profession": "Student"}</h3>
`
document.write(info)
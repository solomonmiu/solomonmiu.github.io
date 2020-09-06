function showFullname(){
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;
let fullname = fname+" "+lname;
document.getElementById("output").innerHTML = fullname;
}
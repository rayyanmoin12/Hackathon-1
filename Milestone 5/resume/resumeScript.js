"use strict";
let fName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let job = localStorage.getItem("job");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let pass1 = localStorage.getItem("pass1");
    let degree1 = localStorage.getItem("degree1");
    let inst1 = localStorage.getItem("inst1");
    let pass2 = localStorage.getItem("pass2");
    let degree2 = localStorage.getItem("degree2");
    let inst2 = localStorage.getItem("inst2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let styr = localStorage.getItem("styr");
    let enyr = localStorage.getItem("enyr");
    let com = localStorage.getItem("com");
    let loc = localStorage.getItem("loc");
    let jobt = localStorage.getItem("jobt");
    let acc1 = localStorage.getItem("acc1");
    let acc2 = localStorage.getItem("acc2");
    let acc3 = localStorage.getItem("acc3");
    let picture = localStorage.getItem("profile_pic");
    let myName = document.getElementById('myName');
    myName.textContent = name;
    let myJob = document.getElementById('myJob');
    myJob.textContent = job;
    let myPhone = document.getElementById('myPhone');
    myPhone.textContent = phone;
    let myEmail = document.getElementById('myEmail');
    myEmail.textContent = email;
    let myAddress = document.getElementById('myAddress');
    myAddress.textContent = address;
    let p1 = document.getElementById('p1');
    p1.textContent = pass1;
    let d1 = document.getElementById('d1');
    d1.textContent = degree1;
    let i1 = document.getElementById('i1');
    i1.textContent = inst1;
    let p2 = document.getElementById('p2');
    p2.textContent = pass2;
    let d2 = document.getElementById('d2');
    d2.textContent = degree2;
    let i2 = document.getElementById('i2');
    i2.textContent = inst2;
    let sk1 = document.getElementById('sk1');
    sk1.textContent = skill1;
    let sk2 = document.getElementById('sk2');
    sk2.textContent = skill2;
    let sk3 = document.getElementById('sk3');
    sk3.textContent = skill3;
    let sy = document.getElementById('sy');
    sy.textContent = styr;
    let ey = document.getElementById('ey');
    ey.textContent = enyr;
    let comp = document.getElementById('comp');
    comp.textContent = com;
    let locs = document.getElementById('locs');
    locs.textContent = loc;
    let job1 = document.getElementById('job1');
    job1.textContent = jobt;
    let aco1 = document.getElementById('aco1');
    aco1.textContent = acc1;
    let aco2 = document.getElementById('aco2');
    aco2.textContent = acc2;
    let aco3 = document.getElementById('aco3');
    aco3.textContent = acc3;
    let resImg = document.getElementById('resImg');
    resImg.src = picture;
});
// ------- Print button
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
// ------- Edit button
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
// ------- Share button
let share_btn = document.getElementById("share_btn");
let ac = document.getElementById("ac");
let userName;
if (fName) {
    userName = fName.toLowerCase().replace(/\s+/g, "-");
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${fName}`;
share_btn?.addEventListener("click", () => {
    ac?.setAttribute("href", uniqueUrl);
});
// ------- Copy button
let copy_btn = document.getElementById("copy_btn");
copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Copied succesfully");
    });
});

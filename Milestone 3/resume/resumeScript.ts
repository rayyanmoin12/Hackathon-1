window.addEventListener("load", () => {

  let name = localStorage.getItem("name");
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








  let myName: any = document.getElementById('myName')
  myName.textContent = name

  let myJob: any = document.getElementById('myJob')
  myJob.textContent = job

  let myPhone: any = document.getElementById('myPhone')
  myPhone.textContent = phone

  let myEmail: any = document.getElementById('myEmail')
  myEmail.textContent = email

  let myAddress: any = document.getElementById('myAddress')
  myAddress.textContent = address

  let p1: any = document.getElementById('p1')
  p1.textContent = pass1

  let d1: any = document.getElementById('d1')
  d1.textContent = degree1

  let i1: any = document.getElementById('i1')
  i1.textContent = inst1

  let p2: any = document.getElementById('p2')
  p2.textContent = pass2
  
  let d2: any = document.getElementById('d2')
  d2.textContent = degree2

  let i2: any = document.getElementById('i2')
  i2.textContent = inst2

  let sk1: any = document.getElementById('sk1')
  sk1.textContent = skill1

  let sk2: any = document.getElementById('sk2')
  sk2.textContent = skill2

  let sk3: any = document.getElementById('sk3')
  sk3.textContent = skill3

  let sy: any = document.getElementById('sy')
  sy.textContent = styr

  let ey: any = document.getElementById('ey')
  ey.textContent = enyr

  let comp: any = document.getElementById('comp')
  comp.textContent = com

  let locs: any = document.getElementById('locs')
  locs.textContent = loc

  let job1: any = document.getElementById('job1')
  job1.textContent = jobt

  let aco1: any = document.getElementById('aco1')
  aco1.textContent = acc1

  let aco2: any = document.getElementById('aco2')
  aco2.textContent = acc2

  let aco3: any = document.getElementById('aco3')
  aco3.textContent = acc3

  let resImg: any = document.getElementById('resImg')
  resImg.src = picture
  


});

// ------- Contact button
let con_section = document.getElementById("con");
let con_btn = document.getElementById("con_btn");

con_btn?.addEventListener("click", () => {
  con_section!.classList.toggle("hide");
});

// ------- Education button
let edu_section = document.getElementById("edu");
let edu_btn = document.getElementById("edu_btn");

edu_btn?.addEventListener("click", () => {
  edu_section!.classList.toggle("hide");
});

// ------- Skill button
let ski_section = document.getElementById("ski");
let ski_btn = document.getElementById("ski_btn");

ski_btn?.addEventListener("click", () => {
  ski_section!.classList.toggle("hide");
});

// ------- Experience button
let exp_section = document.getElementById("exp");
let exp_btn = document.getElementById("exp_btn");

exp_btn?.addEventListener("click", () => {
  exp_section!.classList.toggle("hide");
});

// ------- Reference button
let ref_section = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");

ref_btn?.addEventListener("click", () => {
  ref_section!.classList.toggle("hide");
});

// ------- Print button
let print_1 = document.getElementById("print_1");

print_1?.addEventListener("click", () => {
  window.print();
});

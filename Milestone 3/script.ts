let myName: any = document.getElementById('name')
let job: any = document.getElementById('job')
let phone: any = document.getElementById('phone')
let email: any = document.getElementById('email')
let address: any = document.getElementById('address')
let pass1: any = document.getElementById('pass1')
let degree1: any = document.getElementById('degree1')
let inst1: any = document.getElementById('inst1')
let pass2: any = document.getElementById('pass2')
let degree2: any = document.getElementById('degree2')
let inst2: any = document.getElementById('inst2')
let skill1: any = document.getElementById('skill1')
let skill2: any = document.getElementById('skill2')
let skill3: any = document.getElementById('skill3')
let styr: any = document.getElementById('styr')
let enyr: any = document.getElementById('enyr')
let com: any = document.getElementById('com')
let loc: any = document.getElementById('loc')
let jobt: any = document.getElementById('jobt')
let acc1: any = document.getElementById('acc1')
let acc2: any = document.getElementById('acc2')
let acc3: any = document.getElementById('acc3')
let pic: any = document.getElementById('pic')

let subtn = document.getElementById('subtn')

let form = document.getElementById('form')

form?.addEventListener('submit', (a)=>{
    a.preventDefault()
    
    localStorage.setItem("name", myName.value)
    localStorage.setItem("job", job.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("address", address.value)
    localStorage.setItem("pass1", pass1.value)
    localStorage.setItem("degree1", degree1.value)
    localStorage.setItem("inst1", inst1.value)
    localStorage.setItem("pass2", pass2.value)
    localStorage.setItem("degree2", degree2.value)
    localStorage.setItem("inst2", inst2.value)
    localStorage.setItem("skill1", skill1.value)
    localStorage.setItem("skill2", skill2.value)
    localStorage.setItem("skill3", skill3.value)
    localStorage.setItem("styr", styr.value)
    localStorage.setItem("enyr", enyr.value)
    localStorage.setItem("com", com.value)
    localStorage.setItem("loc", loc.value)
    localStorage.setItem("jobt", jobt.value)
    localStorage.setItem("acc1", acc1.value)
    localStorage.setItem("acc2", acc2.value)
    localStorage.setItem("acc3", acc3.value)


    if(pic.files && pic.files[0]){
        let reader = new FileReader()
        reader.addEventListener("load", ()=>{
            let textImg: any = reader.result
            localStorage.setItem("profile_pic", textImg)
        })
        reader.readAsDataURL(pic.files[0])
    }

    
    window.location.href = "./resume/resume.html"
})
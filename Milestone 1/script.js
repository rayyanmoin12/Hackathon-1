"use strict";
// ------- Contact button
let con_section = document.getElementById('con');
let con_btn = document.getElementById('con_btn');
con_btn?.addEventListener('click', () => {
    con_section.classList.toggle('hide');
});
// ------- Education button
let edu_section = document.getElementById('edu');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    edu_section.classList.toggle('hide');
});
// ------- Skill button
let ski_section = document.getElementById('ski');
let ski_btn = document.getElementById('ski_btn');
ski_btn?.addEventListener('click', () => {
    ski_section.classList.toggle('hide');
});
// ------- Experience button
let exp_section = document.getElementById('exp');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
// ------- Reference button
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
// ------- Print button
let print_1 = document.getElementById('print_1');
print_1?.addEventListener('click', () => {
    window.print();
});

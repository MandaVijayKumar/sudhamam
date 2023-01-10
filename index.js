let b1 = document.querySelector('#btn1');
let b2 = document.querySelector('#btn2');
let b3 = document.querySelector('#btn3');
let b4 = document.querySelector('#btn4');
let b5 = document.querySelector('#btn5');
let b6 = document.querySelector('#btn6');
let b7 = document.querySelector('#btn7');
let b8 = document.querySelector('#btn8');
let b9 = document.querySelector('#btn9');
let b10 = document.querySelector('#btn10');
let b11 = document.querySelector('#btn11');
let b12 = document.querySelector('#btn12');
let b13 = document.querySelector('#btn13');
let b14 = document.querySelector('#btn14');
let b15 = document.querySelector('#btn15');
let b16 = document.querySelector('#btn16');
let b17 = document.querySelector('#btn17');
let b18 = document.querySelector('#btn18');
let b19 = document.querySelector('.btnincidents');
let pbtn1 = document.querySelector('#para-btn1');
let pbtn2 = document.querySelector('#para-btn2');
let pbtn3 = document.querySelector('#para-btn3');
let btm1 = document.querySelector('.btntm1');
let btm2 = document.querySelector('.btntm2');
btm1.addEventListener('click', () => {
    let ptm1 = document.querySelector('#tm1');
    ptm1.style.display = 'inline';
    btm1.style.display = 'none'
})
btm2.addEventListener('click', () => {
    let ptm2 = document.querySelector('#tm2');
    ptm2.style.display = 'inline';
    btm2.style.display = 'none'
})

pbtn1.addEventListener('click', () => {
    let pt1 = document.querySelector('#para-text1');
    pt1.style.display = 'inline';
    pbtn1.style.display = 'none'
})
pbtn2.addEventListener('click', () => {
    let pt2 = document.querySelector('#para-text2');
    pt2.style.display = 'inline';
    pbtn2.style.display = 'none'
})
pbtn3.addEventListener('click', () => {
    let pt3 = document.querySelector('#para-text3');
    pt3.style.display = 'inline';
    pbtn3.style.display = 'none'
})
b19.addEventListener('click',()=> {
    let crimesview = document.querySelector('#crimeslist');
    crimesview.style.display= 'block';
    b19.style.display ='none'
})


b1.addEventListener('click',()=> {
    let p1 = document.querySelector('#para1');
    console.log('this is btn');
    console.log(p1);
    p1.style.display = 'block';
    b1.style.display = 'none';
})

b2.addEventListener('click',()=> {
    let p2 = document.querySelector('#para2');
    
    p2.style.display = 'block';
    b2.style.display = 'none';
})

b3.addEventListener('click',()=> {
    let p3 = document.querySelector('#para3');
    
    p3.style.display = 'block';
    b3.style.display = 'none'
})
b4.addEventListener('click',()=> {
    let p4 = document.querySelector('#para4');
    
    p4.style.display = 'block';
    b4.style.display = 'none'
})
b5.addEventListener('click',()=> {
    let p5 = document.querySelector('#para5');
    
    p5.style.display = 'block';
    b5.style.display = 'none'
})
b6.addEventListener('click',()=> {
    let p6 = document.querySelector('#para6');
    
    p6.style.display = 'block';
    b6.style.display = 'none'
})
b7.addEventListener('click',()=> {
    let p7 = document.querySelector('#para7');
    
    p7.style.display = 'block';
    b7.style.display = 'none'
})
b8.addEventListener('click',()=> {
    let p8 = document.querySelector('#para8');
    
    p8.style.display = 'block';
    b8.style.display = 'none'
})
b9.addEventListener('click',()=> {
    let p9 = document.querySelector('#para9');
    
    p9.style.display = 'block';
    b9.style.display = 'none'
})
b10.addEventListener('click',()=> {
    let p10 = document.querySelector('#para10');
    
    p10.style.display = 'block';
    b10.style.display = 'none'
})
b11.addEventListener('click',()=> {
    let p11 = document.querySelector('#para11');
    
    p11.style.display = 'block';
    b11.style.display = 'none'
})
b12.addEventListener('click',()=> {
    let p12 = document.querySelector('#para12');
    
    p12.style.display = 'block';
    b12.style.display = 'none'
})
b13.addEventListener('click',()=> {
    let p13 = document.querySelector('#para13');
    
    p13.style.display = 'block';
    b13.style.display = 'none'
})
b14.addEventListener('click',()=> {
    let p14 = document.querySelector('#para14');
    
    p14.style.display = 'block';
    b14.style.display = 'none'
})
b15.addEventListener('click',()=> {
    let p15 = document.querySelector('#para15');
    
    p15.style.display = 'block';
    b15.style.display = 'none'
})
b16.addEventListener('click',()=> {
    let p16 = document.querySelector('#para16');
    
    p16.style.display = 'block';
    b16.style.display = 'none'
})
b17.addEventListener('click',()=> {
    let p17 = document.querySelector('#para17');
    
    p17.style.display = 'block';
    b17.style.display = 'none'
})
b18.addEventListener('click',()=> {
    let p18 = document.querySelector('#para18');
    
    p18.style.display = 'block';
    b18.style.display = 'none'
})
let evilb = document.querySelector('#btnevil');
let pb = document.querySelector('#psy-btn');
pb.addEventListener('click', () => {
    pp = document.querySelector("#psy-para");;

    pp.style.display = 'inline';
    pb.style.display = 'none'
})

evilb.addEventListener('click', () => {
    let evilp = document.querySelector('#evilpara');
    evilp.style.display = 'inline';
    evilb.style.display = 'none';
});

let opbtn = document.querySelector('#op-btn');
opbtn.addEventListener('click', () => {
    let oppara = document.querySelector('#op-para');
    oppara.style.display = 'inline';
    opbtn.style.display = 'none';

})

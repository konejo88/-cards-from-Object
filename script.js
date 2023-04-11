import { goods } from "./script1.js";

const primer = document.querySelectorAll('.telefons>.primer')


const telefons = document.querySelector('.telefons')
const ttt = document.querySelector('.d')

const two = document.querySelector('.two')
let newgoods = goods.map((good) => {
  
  return `
    <div class='${good.type}'>
      <img src="${good.img}" class='tele'>
      <h4 class='mod'>${good.model}</h4>
      <p class='god'>Memory:${good.memory}gb</p>
      <p class='god'>Ram:${good.ram}gb</p>
      <p class='god'>Screen:${good.screen}inch</p>
      <p class='god'>Color:${good.color}</p>
      <p class='price'>Price:${good.price}$</p>
      <p class='d'>Discont:${good.discont}%</p>
    </div> 
    `
});


telefons.innerHTML = newgoods
const par=document.querySelectorAll('.d')

for (let index = 0; index < 1; index++) {
  const element = par[index];
  element.classList.add('one')
}
// сортировка
const buttons=document.querySelectorAll('.knopki>button')
const models=document.querySelectorAll('.telefons>div')
console.log(models);

buttons.forEach(button => {
  // console.log(element);
  button.addEventListener('click',()=>{
    console.log(123);
    models.forEach(model => {
      console.log(model);
      if (model.className===button.className) {
        console.log('good');
      }
      else {
        console.log('nogood');
      }
 
    });
  })
});
 

// const five=document.querySelectorAll('.primer')
// for (let i = 0; i < five.length; i++) {
//   const element = five[i];
//   //  console.log(element);

//    xiaomi.addEventListener('click',xaoimiclick)
// function xaoimiclick() {

//   if (element.classList.contains('xiaomi')) {
//      console.log('ok');
//     //  element.classList.add('one')
//     if (element.classList.contains('samsung')) {
//       console.log(element);
//     }
//   }else{
//     console.log('none');
//   }
// }
// }

// xiaomi.removeEventListener('click',xaoimiclick)

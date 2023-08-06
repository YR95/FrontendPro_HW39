const arr1 = [
  {name: '&#128002', quantity: 0, title: "cow"},
  {name: '&#128018;', quantity: 0, title: "monkey"},
  {name: '&#129412;', quantity: 0, title: "horse"},
  {name: '&#128047;', quantity: 0, title: "tiger"},
  {name: '&#129420;', quantity: 0, title: "deer"},
];
console.log(arr1);
arrElem = [];
for (let i = 0; i < arr1.length; i++) {
  let div = document.createElement('div');
  let p = document.createElement('p');
  p.innerText = arr1[i].title;

  let emoj = document.createElement('p');
  emoj.innerHTML = arr1[i].name;
  emoj.style.background = 'aqua';
  let calc = document.createElement('p');
  calc.innerText = arr1[i].quantity;
  emoj.addEventListener("click", e=>{
    arr1[i].quantity++;
    calc.innerText=arr1[i].quantity;

    console.log(arr1[i].quantity)
  })


  div.append(p);
  div.append(emoj)
  div.append(calc)

  document.body.append(div);
}


const arr1 = [
  {name: '&#128002', quantity: 0, title: "cow", perstage: 0},
  {name: '&#128018;', quantity: 0, title: "monkey", perstage: 0},
  {name: '&#129412;', quantity: 0, title: "horse", perstage: 0},
  {name: '&#128047;', quantity: 0, title: "tiger", perstage: 0},
  {name: '&#129420;', quantity: 0, title: "deer", perstage: 0},
];
console.log(arr1);

function renderAndCalculateData(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = arr1[i].title;

    let emoj = document.createElement('p');
    emoj.innerHTML = arr1[i].name;
    emoj.style.background = 'aqua';

    let calc = document.createElement('p');
    calc.innerText = arr1[i].quantity;

    let perstage = document.createElement('p');
    perstage.innerText = arr1[i].perstage +"%" ;

    emoj.addEventListener("click", e => {

      arr1[i].quantity++;
      calc.innerText = arr1[i].quantity;
      getPerstageAll(arr1);
      perstage.innerText = arr1[i].perstage;
      document.body.innerHTML = '';
      renderAndCalculateData(arr1);
    })

    div.append(p);
    div.append(emoj)
    div.append(calc)
    div.append(perstage)

    document.body.append(div);
  }
}

function getPerstage(val, arr1) {
  let res = 0
  arr1.map(function (value) {
    res = res + value.quantity;
    return res;
  });
  console.log(res)
  return (val / res) * 100;
}

function getPerstageAll(arr1) {
  for (let i = 0; i < arr1.length; i++) {

    arr1[i].perstage = getPerstage(arr1[i].quantity, arr1);
    console.log(arr1[i].perstage)
  }
  console.log(arr1)

}

function reDraw(p, emoj, calc, perstage) {

  for (let i = 0; i < arr1.length; i++) {
    p.innerText = "!!!";
    emoj.innerHTML = arr1[i].name;
    emoj.style.background = 'black';
    calc.innerText = arr1[i].quantity;
    perstage.innerText = arr1[i].perstage;

    console.log(arr1[i].quantity)
  }
}

renderAndCalculateData(arr1)



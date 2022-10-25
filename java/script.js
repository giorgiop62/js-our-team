const row = document.querySelector(".row");

const profilo = [
  {
    name:"Wayne Barnett",
    role:"Founder & CEO",
    immagine:"./img/wayne-barnett-founder-ceo.jpg",

},
{
  name:"Angela Caroll",
  role:"chief Editor",
  immagine:"./img/angela-caroll-chief-editor.jpg"

},

{
  name:"Walter Gordon",
  role:"officine Manager",
  immagine:"./img/walter-gordon-office-menager.jpg"

},

{
  name:"Angela Lopez",
  role:"Social Media Manager",
  immagine:"./img/jpg"
},

{
  name:"Scott Exstrada",
  role:"Developer",
  immagine:"./img/scott-estrada-developer.jpg"

},

{
  name:"Barbara Ramos",
  role:"Graphic Designer",
  immagine: "./img/barbara-ramos-graphic-designer.jpg"
}
];

console.log(profilo);

for ( let key in profilo){
  console.log(profilo[key]);
}


let card = `
<div class="col-4">

        <div class="card" style="width: 18rem;">
          <img src="${profilo.immagine}" class"card-img-top" alt="${profilo.immagine}">
          <div class="card-body">
            <h5 class="card-title">${profilo.name}</h5>
            <p class="card-text">${profilo.role}</p>
          </div>
        </div>

      </div> `;

      row.innerHTML += card;






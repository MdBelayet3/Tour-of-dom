//Where to add
const placesList = document.getElementById('places-list');

//what to be added
const li = document.createElement('li');
li.innerText = 'Pahartoli bon';

//add the child
placesList.appendChild(li);

//add a section in main tag with innerText
//add section part
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');


//add h1 part in section
const h1 = document.createElement('h1');
h1.innerText = 'My food item';
section.appendChild(h1);

const ol = document.createElement('ol');

const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ol.appendChild(li1);  

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ol.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ol.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Chicken';
ol.appendChild(li4);

section.appendChild(ol);

mainContainer.appendChild(section);


//set innerHtml for create a section 

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress section</h1>
    <ol>
        <li>T-shirt</li>
        <li>Shirt</li>
        <li>Panjabi</li>
        <li>Payjama</li>
    <ol>
`
mainContainer.appendChild(sectionDress);

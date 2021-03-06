// Obiettivo
// Organizzare un array di carte (oggetti) Magic  (almeno 5 all'inizio), con tutte le loro proprietà.
// Visualizzare nell'html la lista di queste carte mostrando SOLO il nome della carta. Non grafichiamo nulla.
// Creaiamo una select nell'html per filtrare le carte attraverso la proprietà power, per un valore che va da 1 a 5. (anche se in Magic è diverso)
// Superpoweredbonus. E se volessi un'altra select e filtrare gli elementi attraverso la proprietà che abbiamo chiamato cardType?


$(document).ready(function() {




  const fieldCodes = [
    'W', 'U', 'B', 'R', 'G'
  ]



  const cardTypes = [
    'Terre',
    'Creature',
    'Incantesimi',
    'Artefatti',
    'Instantanei',
    'Stregonerie'
  ]


  const editions = {

    'BL': {
      edition: 'Boolean',
      rarity: 'blue'
    },

    'SP': {
      edition: 'Special',
      rarity: 'red'
    }

  }


  const optionPower = [1,2,3,4,5]

  //Dove stamperò a schermo il nome delle cards in oggetti
  const nameOfCArds = document.getElementById('namecards')

  //Select nell'html a cui aggiungerò dinamicamente delle options;
  const selectPowerInPage = document.getElementById('selectoption');

  //Select nell'html per la scelta del tipo,a cui aggiungo dinamicamentedelle options
  const selectUserType = document.getElementById('type-option');

  //Prendo la select 'scegli il valore' in html anche tramite jquery per l'event change;
  const selectOption = $('#selectoption');

  //Prendo la select 'scegi il tipo' in html anche tramite jquery per l'event change;
  const selectType = $('#type-option');

  //posizione in cui visualizzerò i tipi di card  in base al 'power' scelte
  const powerSelected = document.getElementById('type-selected')


  const userTypeSelected = document.getElementById('user-type-selected');
  //ARRAY DI OGGETTI CARDS

  // Abbiamo creato un oggetto di oggetti, come riferimento
  // di una edizione. Se ad esempio scrivo editions['SP']
  // allora otterrò tutto un oggetto che descrive
  // con più dettagli l'edizione.
  // come oggetto di oggetti, può essere navigato solo con il for-in

  const cards = [{

    cardName: 'Grizzly Bears',

    cost: {
      genericCostNumber: 1,
      costFields: [
        fieldCodes[0],
        fieldCodes[2]
      ],
    },

    picture: 'images/i.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lorem ipsum',
    story: 'Naltro Lorem Ipsum',

    score: {
      power: 3,
      toughness: 2
    }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,
      toughness: 3
    }

  },



  {

    cardName: 'Ninja',

    cost: {
      genericCostNumber: 3,
      costFields: [
        fieldCodes[1],
        fieldCodes[4]
      ],
    },

    picture: 'images/g.png',
    cardType: cardTypes[0],
    cardObject: 'Bear',

    editionType: editions['SP'],

    description: 'Il ninja mena ragà!',
    story: 'Gli hanno appioppato la forza.',

    score: {
      power: 1,
      toughness: 3
    }

  },


  {

    cardName: 'Dragon',

    cost: {
      genericCostNumber: 4,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],
        fieldCodes[2]
      ],
    },

    picture: 'images/g.png',
    cardType: cardTypes[5],
    cardObject: 'Bear',

    editionType: editions['SP'],

    description: 'Forte forte!',
    story: 'Nato da un uovo',

    score: {
      power: 7,
      toughness: 7
    }

  },


  {

    cardName: 'Superman',

    cost: {
      genericCostNumber: 3,
      costFields: [
        fieldCodes[3],
        fieldCodes[4]
      ],
    },

    picture: 'images/g.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['SP'],

    description: 'Spaziale!',
    story: 'Lorem ipsum dolor ',

    score: {
      power: 5,
      toughness: 4
    }

  },

  {

    cardName: 'Pippo',

    cost: {
      genericCostNumber: 3,
      costFields: [
        fieldCodes[3],
        fieldCodes[4]
      ],
    },

    picture: 'images/g.png',
    cardType: cardTypes[3],
    cardObject: 'Bear',

    editionType: editions['SP'],

    description: 'Ammazza o!',
    story: 'Lorem ipsum dolor ',

    score: {
      power: 2,
      toughness: 4
    }

  },


  {

    cardName: 'Pluto',

    cost: {
      genericCostNumber: 3,
      costFields: [
        fieldCodes[3],
        fieldCodes[4]
      ],
    },

    picture: 'images/g.png',
    cardType: cardTypes[5],
    cardObject: 'Bear',

    editionType: editions['SP'],

    description: 'Ammazza o!',
    story: 'Lorem ipsum dolor ',

    score: {
      power: 4,
      toughness: 4
    }

  },


  {

    cardName: 'Aldair',

    cost: {
      genericCostNumber: 3,
      costFields: [
        fieldCodes[3],
        fieldCodes[4]
      ],
    },

    picture: 'images/g.png',
    cardType: cardTypes[4],
    cardObject: 'Bear',

    editionType: editions['SP'],

    description: 'Ammazza o!',
    story: 'Lorem ipsum dolor ',

    score: {
      power: 4,
      toughness: 4
    }

  }

]
console.log(cards);

//FUNZIONE PER FILTRARE 'POWER' DA UN ARRAY DI OGGETTI

function PowerCards(power,array){
  return array.filter((element) => {
    return element.score.power === power
  });
}

//prova funzione
console.log(PowerCards(5 , cards));





//FUNZIONE CHE MI PERMETTA DI STAMPARE IN PAGINA

function inPage(pageElement, arrayName){

  arrayName.forEach((item) => {

    pageElement.innerHTML +=
    `
    <li>${item.cardName}</li>

    `
  });
};

//VISUALIZZATI CARDSNAME;
inPage(nameOfCArds,cards);





//FUNZIONE CHE MI PERMETTA DI AGGIUNGERE OPTIONS ALLA SELECT(OPZIONI SCELTA IN PAGINA)

function addOptionsToSelect(elementPage , arrayName){
  arrayName.forEach((item) => {
    const powersCard = item;

    elementPage.innerHTML +=

    `
    <option value ="${powersCard}">${powersCard}</option>

    `
  });
}



addOptionsToSelect(selectPowerInPage,optionPower);//Aggiunte options nella select 'scegli il valore'
addOptionsToSelect(selectUserType,cardTypes);//Aggiunte options nella select 'scegli il tipo'





//-------------------------->>> FUNZIONI DI CHANGE PER SELEZIONARE DIVERSE OPZIONI NELLA SELECT 'SCEGLI IL VALORE'<<<----------------------------------------------------

selectOption.change(function() {

  powerSelected.innerHTML = ''; //ad ogni change il contenuto si azzera,in modo che le scelte non si sommino;

  const userChoice = parseInt($(this).val());

  console.log(userChoice); //visualizzo la scelta,mi assicuro che il change funzioni


  let filteredArray; //preparo una variabile vuota che avrà come item la scelta dell'utente;



  if(userChoice !== 'default') {

        filteredArray = cards.filter((element) => {

          return element.score.power === userChoice
        });
  }

  else {
    // Se typeSelected è uguale a Default
    // assegno in filteredArray tutto l'array CARDS.
  filteredArray = cards;


  }

  console.log(filteredArray);





  filteredArray.forEach((item) => {

    powerSelected.innerHTML +=

    `
    <li class = select> La scelta è ${item.cardName} </li>
    `

  });

});



//-------------------------->>> FUNZIONI DI CHANGE PER SELEZIONARE DIVERSE OPZIONI NELLA SELECT 'SCEGLI IL TIPO'<<<----------------------------------------------------

selectType.change(function(){
userTypeSelected.innerHTML = ''; //In modo che ad ogni change riparta da zero e i risultati non si sommino

let typeUserChoice = $(this).val(); //prendo la scelta dell'utente




let filteredTypeArray; //preparo una variabile vuota che avrà come item la scelta dell'utente;

if (typeUserChoice !== 'default') {

  filteredTypeArray = cards.filter((element) => {

  return element.cardType === typeUserChoice;
  })

}else {

  return filteredTypeArray = cards.cardName;
}

//
// console.log(filteredTypeArray);


  filteredTypeArray.forEach((item) => {

  userTypeSelected.innerHTML +=

    `
    <li class = select> Il tipo di carta è ${item.cardName} </li>
    `

  });
})










//END DOCUMENT READY
});

"use strict";

const pies = [
    {
        name: "Dutch Apple Pie",
        ingredients: "apples,sugar,butter,nutmeg,dutch people",
        bakeTemp: 5000,
        drinkPairing: "Earl Grey Tea",
        imageUrl:
            "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
        person: "Max",
        iceCream: "Vanilla"
    },
    {
        name: "Berry Pie",
        ingredients: "berries",
        bakeTemp: 400,
        drinkPairing: "wine",
        imageUrl:
            "https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg",
        person: "Max",
        iceCream: "banana",
    },
    {
        name: "Pumpkin Pie",
        ingredients: "pumpkins, nutmeg, cinnamon, graham crackers, pilgrims",
        bakeTemp: 42,
        drinkPairing: "egg nog",
        imageUrl:
            "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg",
        person: "Will",
        iceCream: "Vanilla",
    },
    {
        name: "Shoo Fly Pie",
        ingredients: "Molasses, nutmeg, cinnamon, butter, graham cracker ",
        bakeTemp: 1234,
        drinkPairing: "Apple Cider",
        imageUrl:
            "https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg",
        person: "Will",
        iceCream: "Coffee",
    },
    {
        name: "Pecan Pie",
        ingredients: "Pecans, sugar, butter, flour",
        bakeTemp: 5000,
        drinkPairing: "Milk",
        imageUrl:
            "https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg",
        person: "Rachel",
        iceCream: "Vanilla",
    },
    {
        name: "Keylime Pie",
        ingredients: "lemons, sugar, butter, flour",
        bakeTemp: 5000,
        drinkPairing: "Water",
        imageUrl:
            "https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg",
        person: "Rachel",
        iceCream: "none",
    },
];



const handleButtonClick = (e) => {
    const buttonId = e.target.id;

    const selectedPies = [];

    for (let i = 0; i < pies.length; i++) {
        if (pies[i].person === buttonId) {
            selectedPies.push(pies[i]);

        }
    }

    if (buttonId === 'Rachel') {
        document.querySelector('body').style.backgroundColor = 'Green';
    } else if (buttonId === 'Max') {
        document.querySelector('body').style.backgroundColor = 'Blue';
    } else if (buttonId === 'Will') {
        document.querySelector('body').style.backgroundColor = 'Orange';
    } else {
        document.querySelector('body').style.backgroundColor = 'White';

    }

    if (buttonId === 'All' || buttonId === e.currentTarget.id) {
        pieBuilder(pies);
    } else {
        pieBuilder(selectedPies);
    }
}

const deleteItems = (e) => {

    const ctype = e.target.type;
    const target = e.target.id;

    if (ctype === 'button') {
        pies.splice(target, 1);
        pieBuilder(pies);
    }

}

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}
const pieBuilder = (Thesepies) => {
    let domString = '';
    for (let i = 0; i < Thesepies.length; i++) {
        domString += `<div class="card" style="width: 18rem;" id="${i}">
                        <div class="img-container" style="background-image: url('${Thesepies[i].imageUrl}')"></div>
                        
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">${Thesepies[i].name}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        <button type="button" class="btn btn-danger" id="${i}">Delete</button>

                    </div>`

    }
    printToDom('pies', domString);
}
const buttonEvents = () => {
    document.querySelector('#person-buttons').addEventListener('click', handleButtonClick);
    document.querySelector('#pies').addEventListener('click', deleteItems);
}

const init = () => {
    buttonEvents();
    pieBuilder(pies);
}

init();

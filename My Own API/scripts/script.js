container = document.querySelector(".container");
main = document.querySelector(".mainDiv");
btns = document.querySelector("#btnsDiv");
firstButton = document.getElementById('firstBtn')

//----------------------------------------------------------------------------------------------------------------//   

const pickCharacter = async () => {
    main.innerHTML = ""
    btns.innerHTML = ""
    btns.appendChild(document.createElement('li')).innerHTML = `
    <div class="btnImg">
        <img src="https://lh3.googleusercontent.com/UO7AqyWvGig7mrkXs6g_iPEg7D4qfkHyS72V21U2syLmPHhb5uocAW_zKSZLIPjeB1DZoYpn_MhvzNPdkUPZSTw2=w128-h128-e365-rj-sc0x00ffffff">
        <img src="https://assets.change.org/photos/9/fi/gw/rAfiGwnmwjoxWrn-128x128-noPad.jpg?1558421245">
        <img src="https://pm1.narvii.com/6791/280513ef50c9e54e26e455adcfd55fe174730e65v2_128.jpg">
        <img src="https://lh3.googleusercontent.com/0UKchaHucuV8A84NNHZWBsyY5iHTEsDbXUuCsDPFoAPF1hmyfTgeue2tPmxU4jClvcHv4f34e_ywj9NwZdfIK3pnksc=w128-h128-e365-rj-sc0x00ffffff">
        <img src="https://pm1.narvii.com/6794/22bdf901764dc4794da532e71f690302dc7c7ec4v2_128.jpg">
    </div>
    <div id="btns" class="btn">
            <button class="button" id="1303"
                value="https://i.pinimg.com/564x/72/8f/50/728f503ebc7564da375aa5bd8fa7a2d7.jpg">
                Daenerys
                </button>
            <button class="button" id="148" value="https://i.dlpng.com/static/png/6774803_preview.png">
                Arya
                </button>
            <button class="button" id="1442"
                value="https://i.pinimg.com/originals/2f/de/72/2fde72e09bf7c9c8e560b2c7f9df62bb.jpg">
                The Mountain
                </button>
            <button class="button" id="1532"
                value="https://i.pinimg.com/originals/8d/63/00/8d63002189c2f09e0fda2ebc8221ca94.jpg">
                Jaqen H-gar
                </button>
            <button class="button" id="1770" value="https://i.imgur.com/sWfwAOx.png">
                Oberyn
                </button>
        </div>
`;
    const buttons = Array.from(document.getElementsByClassName("button"));
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const character = event.target.id;
            const img = event.target.value;
            getCharacter(character)
                .then((data) => addCharacterToDom(data, img));

        });
    });
};


//----------------------------------------------------------------------------------------------------------------//   
const addCharacterToDom = async (arr, img) => {
    main.innerHTML = ""
    btns.innerHTML = ""
    const newImg = document.createElement('img')
    newImg.src = img;
    main.appendChild(newImg);
    main.appendChild(document.createElement('li')).innerHTML = `
        <ul class="myUl">
            <li><h3> Name: ${arr.name}.</h3></li>
            <li><h3> Gender: ${arr.gender}.</h3></li>
            <li><h3> Culture: ${arr.culture}.</h3></li>
            <li><h3> Born: ${arr.born}.</h3></li>
            <li><h3> Titles: ${arr.titles[1]} , ${arr.titles[2]} , ${arr.titles[3]}.</h3></li>
            <li><h3> Appeared in: ${arr.tvSeries}.</h3></li>
            <li><h3> Was played by: ${arr.playedBy}.</h3></li>
        </ul>`;

};


//--------------------------------------------//  
firstButton.addEventListener('click', pickCharacter);


const main = document.querySelector(".mainDiv");
const btns = document.querySelector("#btnsContainer");
const firstButton = document.getElementById('firstBtn');
const secondButton = document.getElementById('secondBtn');
const FAV_API_URL = "https://www.anapioficeandfire.com/api/characters/"
const API_URL = "https://thronesapi.com/api/v2/Characters/";

const characters = [
    { id: 1303, name: "Daenerys", img: "https://i.pinimg.com/564x/72/8f/50/728f503ebc7564da375aa5bd8fa7a2d7.jpg" },
    { id: 148, name: "Arya", img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/game-of-thrones-arya-1558383066.jpg?crop=0.495xw:1.00xh;0.347xw,0&resize=480:*" },
    { id: 1442, name: "The Mountain", img: "https://i.pinimg.com/originals/2f/de/72/2fde72e09bf7c9c8e560b2c7f9df62bb.jpg" },
    { id: 1532, name: "Jaqen H'ghar", img: "https://i.pinimg.com/originals/8d/63/00/8d63002189c2f09e0fda2ebc8221ca94.jpg" },
    { id: 1770, name: "Oberyn", img: "https://i.pinimg.com/originals/8e/fe/93/8efe93a781d2742f206dec7d10fa8fab.jpg" },
];

const getCharacter = async (api, id) => {
    try {
        const response = await fetch(`${api}${id}`);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
};

const addCharacterToDom = (character) => {
    main.innerHTML = "";
    btns.innerHTML = "";
    const { name, gender, culture, born, titles, tvSeries, playedBy } = character;
    const newImg = document.createElement("img");
    const newImgCont = document.createElement("div");

    newImg.src = characters.find(c => c.id == character.url.split("/").slice(-1)).img;
    newImgCont.appendChild(newImg);
    main.appendChild(newImgCont);
    const ul = document.createElement("ul");
    ul.className = "myUl";
    ul.innerHTML = `
        <li><h3>Name: ${name}.</h3></li>
        <li><h3>Gender: ${gender}.</h3></li>
        <li><h3>Culture: ${culture}.</h3></li>
        <li><h3>Born: ${born}.</h3></li>
        <li><h3>Titles: ${titles.slice(1,4).join(", ")}.</h3></li>
        <li><h3>Appeared in: ${tvSeries}.</h3></li>
        <li><h3>Was played by: ${playedBy}.</h3></li>
    `;
    main.appendChild(ul);
};

const addRandomCharacterToDom = (character) => {
    main.innerHTML = "";
    btns.innerHTML = "";
    const { family , firstName , id , imageUrl , lastName , title } = character;
    const newImg = document.createElement("img");
    const newImgCont = document.createElement("div");

    newImg.src = imageUrl
    newImgCont.appendChild(newImg);
    main.appendChild(newImgCont)
    const ul = document.createElement("ul");
    ul.className = "myUl";
    ul.innerHTML = `
        <li><h3>Name: ${firstName}.</h3></li>
        <li><h3>Family: ${family}.</h3></li>
        <li><h3>Last Name: ${lastName}.</h3></li>
        <li><h3>Titles: ${title}.</h3></li>
    `;
    main.appendChild(ul);
};

const pickRandomCharacter = () => {
    let id  = Math.floor(Math.random() * 52) 
    getCharacter(API_URL,id).then(addRandomCharacterToDom);
};

const pickCharacter = () => {
    main.innerHTML = "";
    btns.innerHTML = "";
    characters.forEach(({ id, name, img }) => {
        const button = document.createElement("button");
        const imgDiv = document.createElement("div");
        const image = document.createElement("img");
        const btnDiv = document.createElement("div");
        imgDiv.appendChild(image)
        btnDiv.appendChild(imgDiv)
        btnDiv.appendChild(button)
        image.src = img
        btnDiv.className = "btnDiv"
        button.className = "btn";
        button.id = id;
        button.value = img;
        button.innerText = name;
        button.addEventListener("click", () => getCharacter(FAV_API_URL,id).then(addCharacterToDom));
        btns.appendChild(btnDiv);
    });
};
firstButton.addEventListener("click", pickCharacter);
secondButton.addEventListener("click", pickRandomCharacter);
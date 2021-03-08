const Daenerys = "1303"
const Arya = "148"
const TheMountain = "1442"
const JaqenHgar = "1532"
const Oberyn = "1770"





const getCharacter = async (name) => {
    try {
        const res = await fetch(`https://www.anapioficeandfire.com/api/characters/${name}`, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};


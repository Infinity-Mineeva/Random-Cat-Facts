// DOM REFERENCES

const factoid = document.getElementById("factoid");
const factBtn = document.getElementById("factBtn");



factBtn.addEventListener("click", getFact);

async function getFact() {
    let response = await fetch("https://catfact.ninja/fact");
    if(response.ok) {

        let data = await response.json();
        factoid.innerHTML = data.fact;
    } else {
        factoid.innerHTML = `Something went wrong! Unable to get Fact! Error: ${response.status}`;
    }
    
}

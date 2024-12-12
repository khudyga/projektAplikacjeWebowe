const nm = document.querySelector("#name")
const grade1 = document.querySelector("#grade1")
const grade2 = document.querySelector("#grade2")
const grade3 = document.querySelector("#grade3")
const grade4 = document.querySelector("#grade4")
const grade5 = document.querySelector("#grade5")
const btn = document.querySelector("#btn")
const result = document.querySelector("#res")


const oblicz = () => {
var tab = [];
var srednia = 0;
tab.push(grade1.value)
tab.push(grade2.value)
tab.push(grade3.value)
tab.push(grade4.value)
tab.push(grade5.value)


for (i = 0; i < 5; i++){
   if (parseInt(tab[i]) > 0 && parseInt(tab[i]) < 7) {
    srednia = srednia + parseInt(tab[i])
    result.style.display = "block"
   } else {
    alert("Podano niepoprawne dane.")
    result.style.display = "none"
}}

var srednia2 = srednia / 5
result.innerHTML = "Średnia ucznia " + nm.value + " wynosi " + srednia2

console.log(nm.value)
tab = []
}




btn.addEventListener("click", oblicz)
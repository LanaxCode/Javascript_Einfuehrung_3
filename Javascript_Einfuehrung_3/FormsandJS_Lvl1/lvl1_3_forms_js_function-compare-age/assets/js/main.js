function rechnung(){

    let ageOne = document.getElementById('age_one').value
    let ageTwo = document.getElementById('age_two').value

    let ausgabe = document.getElementById('ausgabe')

    ausgabe.innerHTML = ageOne - ageTwo
}
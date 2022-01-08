async function getNumber1() {
    return 10;
}

async function getNumber2() {
    return 4;
}

async function compute() {
    let result = await getNumber1() + await getNumber2();
    return result;
}

compute()
    .then(function(res) {
        document.getElementById("result").innerHTML = res;
    })
    .catch(function(err) {
        // Une erreur est survenue;
    })
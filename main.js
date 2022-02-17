function show() {
    let age = parseInt(document.getElementById('age').value);
    let div = document.getElementById('em');
    let span = document.getElementById('me');
    //let divv = document.getElementsByClassName('me');
    let i;
    let s = 0;
    let arr = [];
    
    for (let i = 0; i < age; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    div.innerHTML=" "
    for (i = 0; i < age; i++) {
        div.innerHTML += arr[i]+'\n'
    }

    for (i = 0; i < age; i++) {
        s += arr[i] + 1;
    }
    console.log(s)
    span.innerHTML = "\n"+`<p>${s}</p>`;

}
function nulls() {
    let age = parseInt(document.getElementById('age').value);
    let div = document.getElementById('em');
    let arr = [];

    for (let i = 0; i < age; i++) {
        arr[i] = 0;
    }

    div.innerHTML = " "
    for (i = 0; i < age; i++) {
        div.innerHTML += arr[i] + '\n'
    }
}

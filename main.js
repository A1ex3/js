function show() {
    let age = parseInt(document.getElementById('age').value);
    let div = document.getElementById('em');

    if (age < 10) {
        div.innerHTML = "<h1>You're a child</h1>"
    }
    else if (age < 17) {
        div.innerHTML = "<h1>You're a teenager</h1>";
    }
    else if (age > 60) {
        div.innerHTML = "<h1>You're old</h1>"
    }
    else {
        div.innerHTML = "<h1>you're an adult</h1>"
    }
}
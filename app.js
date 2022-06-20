class App {
    constructor(title,content) {
        this.title = title;
        this.content = content;
    }
}


const app = new App("primera app en colaboracion","proyecto colaborativo");

function hola() {
   document.getElementById("h2").innerHTML= app.title;
   document.getElementById("p").innerText = app.content;
}


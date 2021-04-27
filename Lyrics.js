var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.querySelector("header > h1").innerHTML = "Weather App " + today;


class LyricSearcher {

    constructor() {
        this.artist = "default";
        this.title = "default";
        this.addHTML();
    }

    addHTML() {
        let script = document.querySelector('script[src="Lyrics.js"]');
        let parent = script.parentElement;
        let div = document.createElement('div');
        // div.setAttribute("style", `background-color: lightgray; border: solid 4px grey; padding: 0 0 0 0; margin: auto auto; height: calc(${this.y} *  20px + 50px); width: calc(${this.x} *  20px); display: grid; grid-template-rows: 50px repeat(${this.y}, 20px); grid-template-columns: repeat(${this.x}, 20px);`);
        div.setAttribute("id", "lyrics");
        div.setAttribute("style", `padding: .3em; margin: 2em auto; height: auto; width: 80vw; min-height: 8em; background-color: grey`);
        let button = document.createElement('button')
        button.setAttribute("style", `display: inline-grid; padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${1}; grid-row-end: ${2}; grid-column-start: ${1}; grid-column-end: ${this.x + 1};`);
        button.setAttribute("class", `minesweeper_header`);
        button.innerHTML =  `Search`
        button.addEventListener('click', this.search);
        let artistField = document.createElement("input");
        artistField.setAttribute("class", "searchField");
        artistField.setAttribute("type", "text");
        artistField.setAttribute("id", "artistField");
        artistField.setAttribute("maxLength", "512");
        artistField.setAttribute("placeholder", "Artist");
        let titleField = document.createElement("input");
        titleField.setAttribute("class", "searchField");
        titleField.setAttribute("type", "text");
        titleField.setAttribute("id", "titleField");
        titleField.setAttribute("maxLength", "512");
        titleField.setAttribute("placeholder", "Song");
        let lyricField = document.createElement("div");
        lyricField.setAttribute("class", "searchField");
        lyricField.setAttribute("id", "lyricField");
        lyricField.setAttribute("style", `padding: .4em; margin: 0 0 0 0; height: auto; min-height: 8em; width: 1fr; background-color: lightgray; color: black;`);
        div.insertBefore(artistField, null);
        div.insertBefore(titleField, null);
        div.insertBefore(button, null);
        div.insertBefore(lyricField, null);
    
        parent.insertBefore(div, null);
    }


    search() {
        if (document.getElementById('artistField').value == "" || document.getElementById('titleField').value == "") {
            console.log("No lyrics found");
            document.getElementById('lyricField').innerHTML = "No lyrics found";
        }
        else {
            this.artist = document.getElementById('artistField').value;
            this.title = document.getElementById('titleField').value;
    
    
            let promise = fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.title}`)
            
            promise.then(thing => thing.json()).then(async jason => {
                    console.log(jason);
                    
            
            
                    let lyrics = jason.lyrics;
                    let error = jason.error;
                    
                    if (error != undefined) {
                        document.getElementById('lyricField').innerHTML = error;
                    }
                    else {
                        document.getElementById('lyricField').innerHTML = "<pre>" + lyrics + "</pre>";
                    }
                        
                    // forecast = await forecast.json();
                        
                }
            );
        }
    }
    

}




let Lyrics = new LyricSearcher();


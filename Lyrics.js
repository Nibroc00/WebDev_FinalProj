
class LyricSearcher {

    constructor() {
        this.artist = "default";
        this.title = "default";
        this.addHTML();
    }
 
    addHTML() {
        var div = $('<div id="lyrics"></div>');
        div.css({"padding": "0.3em", "margin": "2em auto", "height": "auto", "width": "80vw", "min-height": "8em", "background-color": "grey"});
        var button = $('<button id="search-button"></button>').text("Search").click(this.search);
        var artistField = $('<input id="artistField" type="text" placeholder="Artist"></input>');
        var titleField = $('<input id="titleField" type="text" placeholder="Song"></input>');
        var lyricField = $('<div id="lyricField" type="text" placeholder="Song" style="padding: .4em; margin: 0 0 0 0; height: auto; min-height: 8em; width: 1fr; background-color: lightgray; color: black;"></div>');
        
        $("script[src=\"Lyrics.js\"]").parent().append(div);
        $("#lyrics").append(artistField, titleField, button, lyricField)

    }


    search() {
        if ($('#artistField').val() == "" || $('#titleField').val() == "") {
            $('#lyricField').html("No lyrics found");
        }
        else {
            this.artist = $('#artistField').val();
            this.title = $('#titleField').val();
    
    
            let promise = fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.title}`)
            
            promise.then(thing => thing.json()).then(async jason => {
                    console.log(jason);
                    
                    let lyrics = jason.lyrics;
                    let error = jason.error;
                    
                    if (error != undefined) {
                        $('#lyricField').html(error);
                    }
                    else {
                        $('#lyricField').html("<pre>" + lyrics + "</pre>");
                    }               
                }
            );
        }
    }
    

}




let Lyrics = new LyricSearcher();


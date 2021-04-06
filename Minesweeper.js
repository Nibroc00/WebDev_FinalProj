
class cell {
    constructor(TF) {
        this.mine = TF;
        this.revealed = false;
    }
}

class minesweeper {

    getMineNum(i, j) {
        let counter = 0;
        console.log(i + " " + j);
        if (this.cells[j][i].mine == true) {
            return "bomb";
        }

        if (i > 0) {
            if (j > 0) {
                //top left
                if (this.cells[j - 1][i - 1].mine == true) {
                    counter++;
                }    
            }
            //middle left
            if (this.cells[j][i - 1].mine == true) {
                counter++;
            }
            if (j < this.y - 1) {
                //bottom left
                if (this.cells[j + 1][i - 1].mine == true) {
                    counter++;
                }
            }
        }

        if (i < this.x - 1) {
            if (j > 0) {
                //top right
                if (this.cells[j - 1][i + 1].mine == true) {
                    counter++;
                }
            }
            //middle right
            if (this.cells[j][i + 1].mine == true) {
                counter++;
            }
            if (j < this.y - 1) {
                //bottom right
                if (this.cells[j + 1][i + 1].mine == true) {
                    counter++;
                }
            }
        }
        
        if (j > 0) {
            //top middle
            if (this.cells[j - 1][i].mine == true) {
                counter++;
            }
        }
        if (j < this.y - 1) {
            //bottom middle
            if (this.cells[j + 1][i].mine == true) {
                counter++;
            }   
        }
        return counter;
    }

    create2DArray() {
        for (let i = 0; i < this.y; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.x; j++) {
                let num = Math.random();
                if (num >= .33333) {
                    this.cells[i][j] = new cell(false);
                }
                else {
                    this.cells[i][j] = new cell(true);
                }
            }
        }
        console.log(this.cells);
    }
    
    constructor(width, heigth) {
        this.x = width;
        this.y = heigth;
        this.cells = [];
        this.create2DArray();
        this.addHTML();
    }

    addHTML() {
        let script = document.querySelector('script[src="Minesweeper.js"]');
        let parent = script.parentElement;
        let div = document.createElement('div');
        div.setAttribute("style", `background-color: lightgray; border: solid 4px grey; padding: 0 0 0 0; margin: auto auto; height: calc(${this.y} *  20px + 50px); width: calc(${this.x} *  20px); display: grid; grid-template-rows: 50px repeat(${this.y}, 20px); grid-template-columns: repeat(${this.x}, 20px);`);
        
        
        
        for (let i = 0; i < this.y; i++) {
            for (let j = 0; j < this.x; j++) {
                let box = document.createElement('div');
                box.setAttribute("x", `${j}`);
                box.setAttribute("y", `${i}`);
                box.setAttribute("style", `background-image: url("Minesweeper_tile_hidden.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${i + 2}; grid-row-end: ${i + 3}; grid-column-start: ${j + 0}; grid-column-start: ${j + 1};`);
                box.setAttribute("class", `minesweeper_tile`);
                div.insertBefore(box, null);
                // this.cells[i][j] = new cell(false);
            }
        }
        parent.insertBefore(div, null);
    }



}






let game = new minesweeper(10,9);
let selectedTileX = 0;
let selectedTileY = 0;
let onTileClick = function() {
    selectedTileX = parseInt(this.getAttribute("x"));
    selectedTileY = parseInt(this.getAttribute("y"));
    let temp = document.querySelector(`[x="${selectedTileX}"][y="${selectedTileY}"]`)
    let num; 
    if (game.cells[selectedTileY][selectedTileX].revealed == false) {
        num = game.getMineNum(selectedTileX, selectedTileY);
        game.cells[selectedTileY][selectedTileX].revealed = true;
    }
    console.log(num);
    switch(num) {
        case 0:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile_empty.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);
            
            break;
        case 1:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile1.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case 2:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile2.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case 3:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile3.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case 4:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile4.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case 5:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile5.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case 6:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile6.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case 7:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile7.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case 8:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile8.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        case "bomb":
            temp.setAttribute("style", `background-image: url("Minesweeper_tile_mine.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);

            break;
        
    }
}
let tiles = document.getElementsByClassName("minesweeper_tile");
for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', onTileClick);
}









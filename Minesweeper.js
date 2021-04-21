let onTileClick = function() {
    selectedTileX = parseInt(this.getAttribute("x"));
    selectedTileY = parseInt(this.getAttribute("y"));
    let temp = document.querySelector(`[x="${selectedTileX}"][y="${selectedTileY}"]`)
    let num; 
    if (game.cells[selectedTileY][selectedTileX].revealed == false) {
        num = game.getMineNum(selectedTileX, selectedTileY);
        game.cells[selectedTileY][selectedTileX].revealed = true;
    }
    switch(num) {
        case 0:
            temp.setAttribute("style", `background-image: url("Minesweeper_tile_empty.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${selectedTileY + 2}; grid-row-end: ${selectedTileY + 3}; grid-column-start: ${selectedTileX + 0}; grid-column-start: ${selectedTileX + 1};`);
            
            if (selectedTileX > 0) {
                if (selectedTileY > 0) {
                    //top left
                    game.tileRecursion(selectedTileY - 1, selectedTileX - 1);  
                }
                //middle left
                game.tileRecursion(selectedTileY, selectedTileX - 1);
                if (selectedTileY < game.y - 1) {
                    //bottom left
                    game.tileRecursion(selectedTileY + 1, selectedTileX - 1);
                }
            }
    
            if (selectedTileX < game.x - 1) {
                if (selectedTileY > 0) {
                    //top right
                    game.tileRecursion(selectedTileY - 1, selectedTileX + 1);
                }
                //middle right
                game.tileRecursion(selectedTileY, selectedTileX + 1);
                if (selectedTileY < game.y - 1) {
                    //bottom right
                    game.tileRecursion(selectedTileY + 1, selectedTileX + 1);
                }
            }
            
            if (selectedTileY > 0) {
                //top middle
                game.tileRecursion(selectedTileY - 1, selectedTileX);
            }
            if (selectedTileY < game.y - 1) {
                //bottom middle
                game.tileRecursion(selectedTileY + 1, selectedTileX);  
            }
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
            game.loseGame();
            break;
        
    }
}

class cell {
    constructor(TF) {
        this.mine = TF;
        this.revealed = false;
    }
}

class minesweeper {

    getMineNum(i, j) {
        let counter = 0;
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
                if (num >= .17) {
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
        let tiles = document.getElementsByClassName("minesweeper_tile");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('click', onTileClick);
        }
    }


    removeHTML() {
        let div = document.getElementById("minesweeper-id-for-removal");
        div.remove();
        this.cells = null;
        this.cells = [];
    }

    addHTML() {
        let script = document.querySelector('script[src="Minesweeper.js"]');
        let parent = script.parentElement;
        let div = document.createElement('div');
        div.setAttribute("style", `background-color: lightgray; border: solid 4px grey; padding: 0 0 0 0; margin: auto auto; height: calc(${this.y} *  20px + 50px); width: calc(${this.x} *  20px); display: grid; grid-template-rows: 50px repeat(${this.y}, 20px); grid-template-columns: repeat(${this.x}, 20px);`);
        div.setAttribute("id", "minesweeper-id-for-removal");
        let box = document.createElement('div')
        box.setAttribute("style", `display: inline-grid; padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${1}; grid-row-end: ${2}; grid-column-start: ${1}; grid-column-end: ${this.x + 1};`);
        box.setAttribute("class", `minesweeper_header`);
        box.innerHTML =  `<button>Reset</button>`
        box.addEventListener('click', reset);
        div.insertBefore(box, null);

        for (let i = 0; i < this.y; i++) {
            for (let j = 0; j < this.x; j++) {
                box = document.createElement('div');
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

    tileRecursion(y, x) {
        let temp = document.querySelector(`[x="${x}"][y="${y}"]`)
        let num; 
        if (game.cells[y][x].revealed == false) {
            num = game.getMineNum(x, y);
            game.cells[y][x].revealed = true;
        }
        switch(num) {
            case 0:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile_empty.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
                
                if (x > 0) {
                    if (y > 0) {
                        //top left
                        this.tileRecursion(y - 1, x - 1);  
                    }
                    //middle left
                    this.tileRecursion(y, x - 1);
                    if (y < this.y - 1) {
                        //bottom left
                        this.tileRecursion(y + 1, x - 1);
                    }
                }
        
                if (x < this.x - 1) {
                    if (y > 0) {
                        //top right
                        this.tileRecursion(y - 1, x + 1);
                    }
                    //middle right
                    this.tileRecursion(y, x + 1);
                    if (y < this.y - 1) {
                        //bottom right
                        this.tileRecursion(y + 1, x + 1);
                    }
                }
                
                if (y > 0) {
                    //top middle
                    this.tileRecursion(y - 1, x);
                }
                if (y < this.y - 1) {
                    //bottom middle
                    this.tileRecursion(y + 1, x);  
                }
                break;
            case 1:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile1.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case 2:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile2.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case 3:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile3.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case 4:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile4.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case 5:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile5.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case 6:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile6.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case 7:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile7.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case 8:
                temp.setAttribute("style", `background-image: url("Minesweeper_tile8.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            case "bomb":
                temp.setAttribute("style", `background-image: url("Minesweeper_tile_mine.png"); padding: 0 0 0 0; margin: 0 0 0 0; height: 1fr; width: 1fr; grid-row-start: ${y + 2}; grid-row-end: ${y + 3}; grid-column-start: ${x + 0}; grid-column-start: ${x + 1};`);
    
                break;
            
        }
    }

    loseGame() {
        let tiles = document.getElementsByClassName("minesweeper_tile");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].removeEventListener('click', onTileClick);
        }
        // for (let i = 0; i < this.y; i++) {
        //     for (let j = 0; j < this.x; j++) {
        //         if (this.cells[i][j].mine == true) {
        //              new cell(false);
        //         }
        //         else {
        //             this.cells[i][j] = new cell(true);
        //         }
        //     }
        // }
        // console.log(this.cells);
    }

}


let reset = function() {
    // console.log(this);
    // game.removeHTML();
    // game.create2DArray();
    // game.addHTML();
    // tiles = document.getElementsByClassName("minesweeper_tile");
    // for (let i = 0; i < tiles.length; i++) {
    //     tiles[i].addEventListener('click', onTileClick);
    // }
    game.removeHTML();
    game = new minesweeper(width,height);
}



let width = 30;
let height = 20;
let game = new minesweeper(width,height);
let selectedTileX = 0;
let selectedTileY = 0;











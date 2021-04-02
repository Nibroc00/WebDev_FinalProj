
class cell {
    constructor(TF) {
        this.mine = TF;
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
            //bottom right
            if (this.cells[j + 1][i + 1].mine == true) {
                counter++;
            }
            if (j < this.y - 1) {
                //middle right
                if (this.cells[j][i + 1].mine == true) {
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
    }

}

let game = new minesweeper(5,20);
console.log(game.getMineNum(4,19));
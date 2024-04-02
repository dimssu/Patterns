function printpattern(r,c){

    for (let i = 0; i < r; i++) {
        let row = ''
        for (let j = 0; j < c; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

const r = 5;
const c = 5;

printpattern(r,c);

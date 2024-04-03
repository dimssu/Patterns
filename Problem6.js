function printpattern(r){

    for (let i = 0; i < r; i++) {
        let row = ''
        for(let k = 0; k<i; k++){
            row+="    "
        }
        for(let j = 0; j<r-i; j++){
            row+=" *"
        }
        console.log(row);
    }
}

const r = 5;

printpattern(r);
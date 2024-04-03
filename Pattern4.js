function printpattern(r){

    for (let i = 1; i <= r; i++) {
        let row = ''
        for(let j = 1; j<=r-i; j++){
            row+="  "
        }
        for(let k = 1; k<=i; k++){
            row+="* "
        }
        console.log(row);
    }
}

const r = 5;

printpattern(r);
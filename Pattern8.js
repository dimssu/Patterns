function printpattern(r) {

    for (let i = 1; i <= r; i++) {
        let row = '';
        for (let j = 1; j <= r; j++) {
            if (j === i || j === (r - i + 1)) {
                row += "* "
            }
            else {
                row += "  "
            }
        }
        console.log(row)
    }
}

const r = 5;

printpattern(r);
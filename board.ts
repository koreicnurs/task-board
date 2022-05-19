const createChessBoard = (number:number) => {
    let chessBoard = '';
    for (let i = 1; i < number * number; i += 1) {
        if ((i % (number +1)) === 0) {
            chessBoard += '\n';
        } else if (i % 2 !== 0) {
            chessBoard += '██';
        } else {
            chessBoard += '  ';
        }
    }
    return chessBoard;
}

console.log(createChessBoard(16));
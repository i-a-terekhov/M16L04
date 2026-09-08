export default {
    botMoving(board) {
        const availableCells = this.checkAvailableCells(board);
        if (availableCells.length > 0) {
            const botMoveNumber = this.getRandomMove(availableCells.length - 1);
            return {
                i: availableCells[botMoveNumber].i,
                j: availableCells[botMoveNumber].j,
            }
        }

        return null;
    },
    getRandomMove(max) {
        return Math.floor(Math.random() * max);
    },
    checkAvailableCells(board) {
        let cells = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '') {
                    cells.push({ i, j });
                }
            }
        }
        return cells;
    }
};

export const validateGame = (board) => {
    
    //horizontal
    if(board[0] === board[1] && board[1] === board[2] && board[0] === board[2] && board[0] != null && board[1] != null && board[2] != null)
    {
        return true;
    }
    else if(board[3] === board[4] && board[3] === board[5] && board[4] === board[5] && board[3] != null && board[4] != null && board[5] != null)
    {
        return true;
    }
    else if(board[6] === board[7] && board[6] === board[8] && board[7] === board[8] && board[6] != null && board[7] != null && board[8] != null)
    {
        return true;
    }
    // vertical
    else if(board[0] === board[3] && board[0] === board[6] && board[3] === board[6] && board[0] != null && board[3] != null && board[6] != null)
    {
        return true;
    }
    else if(board[1] === board[4] && board[1] === board[7] && board[4] === board[7] && board[1] != null && board[4] != null && board[7] != null)
    {
        return true;
    }
    else if(board[2] === board[5] && board[2] === board[8] && board[5] === board[8] && board[2] != null && board[5] != null && board[8] != null)
    {
        return true;
    }
    // Diagonal
    else if(board[0] === board[4] && board[0] === board[8] && board[4] === board[8] && board[0] != null && board[4] != null && board[8] != null)
    {
        return true;
    }
    else if(board[2] === board[4] && board[2] === board[6] && board[4] === board[6] && board[2] != null && board[4] != null && board[6] != null)
    {
        return true;
    }

    return false
}
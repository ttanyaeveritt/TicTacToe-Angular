import { Component, OnInit } from '@angular/core';

@Component({// this board component is a smart component as it can manipulate its own state
  selector: 'app-board',// name of component
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any; //represents the nine moves on the game board; array of strings
  xIsNext: boolean; //determine the current player
  winner: string; //can be "X" and "O"

  constructor() { }//this runs first but we dont really do anything in this

  ngOnInit() { //lifecycle hook --- inital setup needed for component
    this.newGame();// set up the values at a new game
  }

  newGame(){// user clicks on square, these values will be spliced with either X or O
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext= true;
  }

  get player(){
    return this.xIsNext? 'X':'O';//determine which palyer is using the gameboard and show player as a string
  }

  makeMove(idx:number){//player clicks square button to make move; finding click event
    if(!this.squares[idx]){//checks the index that user clicked on 
      this.squares.splice(idx,1, this.player);//replace index with X or O
      this.xIsNext=!this.xIsNext;//toggle next player
    }
    this.winner=this.calculateWinner();
  }

  calculateWinner(){// algorithm of all the different ways to win
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let i=0; i < lines.length; i++){
      const[a,b,c]= lines[i];
      if(//Winner!
        this.squares[a] &&//if first one is e.g. X
        this.squares[a] === this.squares[b]&& //and first and second is e.g. X
        this.squares[a] === this.squares[c]// first and third is e/g/ X
      ){
        return this.squares[a];//return the winner, either X or O
      
      }
    }return null;
  }

}

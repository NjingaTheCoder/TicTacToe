
const outerblockObject = {
    sign : ""
}


const TickTacToe = (blockObject , action) =>{

    const WinningArray = ['012','345','678','036','147','258','246','048'];
    let increment = blockObject.usedBlockNumber;

    switch(action.type){
  
      case 'initialiseObject' : let initialArray  = [];
                                for(let i = 0 ; i < 9 ; i++){
  
                                  initialArray[i] = outerblockObject;
                                }
                                return { ...blockObject , blockArray : initialArray};
                                break;
      case 'addSign' : let currentPlayer = blockObject.blockPlayer;
                       let currentGameStatus = blockObject.gameOver;
                       const updateArray =  blockObject.blockArray.map((block , icount) => {
  
                                              if(icount === action.payload && block.sign.length === 0){
                                                
                                                let updateSign = "X";
                                                if(blockObject.blockPlayer){
                                                  updateSign = 'O'
                                                }
  
                                                currentPlayer = !blockObject.blockPlayer;

                                                if(blockObject.usedBlockNumber < 9){
                                                    increment = blockObject.usedBlockNumber + 1;
                                                }
                                                if(blockObject.usedBlockNumber === 8){
                                                    currentGameStatus =  true;
                                                }
  
                                                return {...block , sign : updateSign}
                                            }
                                              return block;
                                            });
                        return { ...blockObject , blockPlayer : currentPlayer , blockArray : updateArray  ,  usedBlockNumber : increment , gameOver : currentGameStatus};
                        break;
      case 'cleanBlocks' : return {...blockObject , blockArray : [] , usedBlockNumber : 0 , blockPlayer : true , gameOver : false , winner : false}
                           break;

      case 'checkWinner' : const arrayBlock = blockObject.blockArray;
                           let updateSign = "X";
                           if(!blockObject.blockPlayer){
                               updateSign = 'O'
                           }

                           let counter = 0;
                           let checkList;
                           for(let i = 0; i < WinningArray.length;i++){

                               checkList = WinningArray[i].split("");
                               counter = 0;
                               for(let j = 0 ; j < checkList.length; j++){

                    
                                   if(arrayBlock[parseInt(checkList[j])].sign === updateSign){

                                       counter = counter + 1;
                                   }
                               }
                               
                               console.log(counter);

                               
                               if(counter === 3){
                                   return {...blockObject , winner : true ,  gameOver : true }
                               }
                           }

                           return blockObject
                     break;
      default: return blockObject;
  
    }
  }
  
  export default TickTacToe;
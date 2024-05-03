import './App.css';
import { useEffect , useReducer } from 'react';
import TickTacToe from './TickTacToe';



const tickTacToeObject =  {

  blockArray : [] , 
  usedBlockNumber : 0 , blockPlayer : true , 
  gameOver : false,
  winner : false

}


function App() {

  const [block , dispatch] = useReducer(TickTacToe , tickTacToeObject);

  useEffect(() => {

    dispatch({type : 'initialiseObject'});
  },[]);

  const setSignBlockNumber = (icount) =>{

    dispatch({type : 'addSign' , payload : icount});
    dispatch({type : 'checkWinner'});
  }

  const restartBlocks = () => {
    dispatch({type : 'cleanBlocks'});
    dispatch({type : 'initialiseObject'});
  }

  return (

    <div className='main-container'>

        <h1>Tic Tac Toe</h1>
        <div className='grid'>

           {block.blockArray?.map( (innerblock , icount) => {
              return(
               
                <div key={icount} className='block'>
 
                    <button onClick={() =>{setSignBlockNumber(icount)}} >{innerblock.sign}</button>
                </div>
              )
           })}
        </div>

        {block.winner ? (!block.blockPlayer === true) ? <h2>O Whooped Your Ass</h2>  : <h2>X Whooped Your Ass</h2> : <h2>Whoop Ass</h2>}
        { block.gameOver ? <button className='restart' onClick={() => {restartBlocks()}}>Restart</button> : <></>}
    </div>
  )
}

export default App

/* eslint-disable no-undef */
import './Column.scss'
import Card from '../Card/Card'
import { mapOrder } from '../../utilities/sorts';
import {Container,Draggable} from 'react-smooth-dnd';
import Dropdown from 'react-bootstrap/Dropdown';
import ConfirmModal from '../Common/ConfirmModal';
import {useEffect, useState} from 'react'
import {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';


const Column = (props) =>{

    const {column,onCardDrop} = props;
    const cards = mapOrder(column.cards,column.cardOrder,'id');

    const [isShowModalDelete,setShowModalDelete] = useState(false);
    const toggleModal = () =>{
      setShowModalDelete(!isShowModalDelete);
    }
     
    const [isShowAddNewCard,setIsShowAddNewCard] = useState(false);
    const [valueTextArea,setValueTextArea] = useState("");
    const textAreaRef = useRef(null); 

    useEffect(() =>{
      if(isShowAddNewCard === true && textAreaRef && textAreaRef.current){
        textAreaRef.current.focus();
      }
    },[isShowAddNewCard])
    
    const onModalAction = (type) =>{
      console.log(type);
      toggleModal();
    }

   const handleAddNewCard = () =>{
    //validate 
    if(!valueTextArea){
      textAreaRef.current.focus();
      return;
    }

    const onUpdateColumn = (newColumn) =>{
      const columnIdUpdate = newColumn.id;
      let ncols = [...column];
      let index =ncols.findIndex(item => item.id === columnIdUpdate);
      if(newColumn._destroy){
          ncols.splice(index,1);
      }
      else{
          ncols[index] = newColumn;
      }
      setColumns(ncols);
  }

    const newCard ={
      id: uuidv4(),
      boardId: column.boardId,
      columnId : column.id,
      title : valueTextArea,
      image : null
    }

    let newColumn = {...column};
    newColumn.cards = [...newColumn.cards, newCard]
    newColumn.cardOrder = newColumn.cards.map(card=> card.id);

    onUpdateColumn(newColumn);
    
   }

    return (
        <>
           <div className="Column">
        <header className='column-drag-handle'>
          <div className='column-title'>
           {column.title}
          </div>
          <div className='column-dropdown'>
           <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" size='sm'>
       
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Add card...</Dropdown.Item>
        <Dropdown.Item onClick={toggleModal}>Remove column</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </div>
           </header>
        <div className="card-list"> 
        <Container
                    groupName="col"
                    onDrop={(dropResult) => onCardDrop(dropResult,column.id)}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{                      
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'cards-drop-preview' 
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >

             {cards && cards.length > 0 && cards.map((card,index) =>{
            return (
                <Draggable key={card.id}>
                <Card card={card}/>
                </Draggable>
            )
          })}
       </Container>   
        
  {isShowAddNewCard === true  &&
         <div className='add-new-card'>
                <textarea 
                 rows="2" 
                className='form-control' 
                placeholder='Enter a title for this card....'
                ref={textAreaRef}
                value={valueTextArea}
                onChange={(event) => setValueTextArea(event.target.value)}
                ></textarea>
                <div className='group-btn'>
                    <button className='btn btn-primary'
                     onClick={() => handleAddNewCard()}
                    >Add card </button>
                    <i className='fa fa-times icon'  onClick={()=>setIsShowAddNewCard(false)}></i>
                </div>
         </div> 
}
         </div>
        
  {isShowAddNewCard === false  &&
 
        <footer>
          <div className='footer-action'  onClick={()=>setIsShowAddNewCard(true)}>
          <i className='fa fa-plus icon'>
            </i>  
            Add another card
          </div>
          </footer>
}
      </div>
      <ConfirmModal
        show ={isShowModalDelete}
        title={"Remove a column"}
        content={`Are you sure to remove this column: <b> ${column.title}</b>`}
        onAction = {onModalAction}
      />
      </>
    )
}

export default Column;
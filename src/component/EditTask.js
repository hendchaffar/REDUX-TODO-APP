import React,{useState} from 'react'
import { useDispatch } from "react-redux"
import { edittask } from '../const/Action'
import {Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function EditTask({el}) {
    
    const [show,setShow]=useState(false)
    
    const [editedText,seteditedText]=useState(el.description)
    
    const dispatch = useDispatch()
    
    const handleClose = () => setShow(false)
    
    const handleShow = () => setShow(true)
    
    const modifier=()=>{
        dispatch(edittask({index:el.id, editedText:editedText}))
        handleClose()
    }

    return (
        <div>
                
      <Button style={{width:'90px', height:'30px', backgroundColor:'FF5733', textAlign:'center',border:'none', fontWeight:'bold'}}  onClick={handleShow}>
        Edit
      </Button>
<br/>
      <Modal show={show} onHide={handleClose}>
        <input style={{border:'bold', height:'50px'}} value={editedText} onChange={(e) => seteditedText(e.target.value)} />
        <Modal.Footer>
          <Button style={{backgroundColor:'FF5733'}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'FF5733'}} onClick={modifier}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    )
}

export default EditTask

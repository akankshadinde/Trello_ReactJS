import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import parse from 'html-react-parser';


const ConfirmModal= (props) => {
    
    const {title,content,show,onAction} = props;

  
    return (
      <>
        <Modal show={show} onHide={()=>onAction('close')} backdrop={"static"}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{parse(content)} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>onAction('close')}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>onAction('confirm')}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ConfirmModal;
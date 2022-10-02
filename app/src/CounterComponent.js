import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Image, Form, Modal, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faPlus, faMinus, faMagic, faLongArrowAltLeft, faMitten, faTshirt, faSocks } from '@fortawesome/free-solid-svg-icons'

class CounterComponent extends Component {

  constructor(props) {
      super();
      this.props = props;

      this.state = {
        counter1: this.props.project.counter1,
        counter2: this.props.project.counter2,
        notes: this.props.project.notes,
        title: this.props.project.title,
        icon: this.props.project.icon,
        showModal: false,
        tempTitle: "",
        tempIcon: ""
      }
  }

  increaseCounter1 = () => {
    var counter1 = this.state.counter1;
    counter1 ++
    this.setState({counter1: counter1}, () => {
        this.update()
    });
  }

  decreaseCounter1 = () => {
    var counter1 = this.state.counter1;
    if (counter1 > 0) {
      counter1 --
      this.setState({counter1: counter1}, () => {
          this.update()
      });
    }
  }

  resetCounter1 = () => {
    this.setState({counter1: 0}, () => {
        this.update()
    });
  }

  increaseCounter2 = () => {
    var counter2 = this.state.counter2;
    counter2 ++
    this.setState({counter2: counter2}, () => {
        this.update()
    });
  }

  decreaseCounter2 = () => {
    var counter2 = this.state.counter2;
    if (counter2 > 0) {
      counter2 --
      this.setState({counter2: counter2}, () => {
          this.update()
      });
    }

  }

  resetCounter2 = () => {
    this.setState({counter2: 0}, () => {
        this.update()
    });
  }

  handleNotesChanged = (e) => {
      this.setState({notes: e.target.value}, () => {
          this.update()
      });
  }

  handleTitleChanged = (e) => {
    this.setState({tempTitle: e.target.value})
  }

  handleIconUpdated = (icon) => {
    console.log(icon)
    this.setState({tempIcon: icon})
  }

  update = () => {
    let project = {
      counter1: this.state.counter1,
      counter2: this.state.counter2,
      notes: this.state.notes,
      title: this.state.title,
      icon: this.state.icon
    }
    this.props.onItemUpdated(project)
  }

  backPressed = () => {
    this.props.onBackPressed()
  }

 handleModalCancel = () => {
   this.setState({showModal: false})
 }

 handleModalSave = () => {
   let title = this.state.tempTitle
   let icon = this.state.tempIcon
   this.setState({showModal: false, title: title, icon: icon}, () => {
       this.update()
   });
 }

 handleShow = () => {
   let title = this.state.title
   let icon = this.state.icon
   this.setState({showModal: true, tempTitle: title, tempIcon: icon})
}

  render() {
    let icon = faMagic

    if (this.state.icon === "faMitten") {
      icon = faMitten
    } else if (this.state.icon === "faSocks") {
      icon = faSocks
    } else if (this.state.icon === "faTshirt") {
      icon = faTshirt
    }


  return (
    <Container style={{'padding': "0px"}}>
      <Row style={{'margin': "0px"}}>

      <Button
        variant="dark"
        onClick={this.backPressed}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} /> back
      </Button>

      <Row style={{'paddingTop':'20px',
                   'paddingBottom': '10px',
                   'background': '#FFCE54',
                   'margin': "0px"}}>

        <div className="d-grid gap-2">
          <Button variant="outline-dark" onClick={this.handleShow} size="lg">
          <FontAwesomeIcon icon={icon}/> {this.state.title}</Button>{' '}
        </div>

        <Row>
          <p style={{'fontSize': '5em'}}>

          <Button variant="outline-dark"
                  style={{'width': '40px', 'marginLeft': '10px'}}
                  onClick={this.resetCounter1}><FontAwesomeIcon icon={faRedo} /></Button>{'  '}

          <Button variant="outline-dark"
                  style={{'marginRight': '10px', 'width': '40px', 'marginLeft': '10px'}}
                  onClick={this.decreaseCounter1}><FontAwesomeIcon icon={faMinus} /></Button>{'  '}
          {this.state.counter1}
          <Button variant="outline-dark" size="lg"
                  style={{'fontSize': '0.5em', 'marginLeft': '30px', 'width': '70px'}}
                  onClick={this.increaseCounter1}><FontAwesomeIcon icon={faPlus} /></Button>
          </p>
        </Row>

      </Row>

      <Row style={{'paddingTop':'20px',
                   'paddingBottom': '10px',
                   'background': '#E6E9ED',
                   'margin': "0px"}}>

        <p style={{'fontSize': '2em'}}>
        <Button variant="outline-dark"
                style={{'width': '40px', 'marginLeft': '10px', 'marginRight': '10px'}}
                onClick={this.resetCounter2}><FontAwesomeIcon icon={faRedo} /></Button>{'  '}
        <Button variant="outline-dark"
                style={{'marginRight': '10px', 'width': '40px', 'marginLeft': '10px'}}
                onClick={this.decreaseCounter2}><FontAwesomeIcon icon={faMinus} /></Button>{'  '}
        {this.state.counter2}
        <Button variant="outline-dark" size="lg"
                style={{'fontSize': '1em', 'marginLeft': '10px', 'width': '60px'}}
                onClick={this.increaseCounter2}><FontAwesomeIcon icon={faPlus} /></Button>{'  '}


        </p>
      </Row>

      <Row style={{'paddingTop':'20px',
                   'paddingBottom': '10px',
                   'margin': "0px"}}>

                   <Form>
                     <Form.Group className="mb-3" >
                       <Form.Label>Notes</Form.Label>
                       <Form.Control as="textarea" rows={10} onChange={this.handleNotesChanged}
                       value={this.state.notes} />
                     </Form.Group>
                   </Form>

      </Row>

      </Row>

      <Modal show={this.state.showModal} onHide={this.handleModalCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" onChange={this.handleTitleChanged}
            placeholder="title" value={this.state.tempTitle}/>
          </Form.Group>

          <br/>

          <ToggleButtonGroup
            type="radio"
            name="options"
            onChange={this.handleIconUpdated}
            defaultValue={this.state.tempIcon}
            value={this.state.tempIcon}>

            <ToggleButton id="tbg-radio-1" variant="outline-primary" value={"faMagic"}>
              <FontAwesomeIcon icon={faMagic} />
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" variant="outline-primary" value={"faMitten"}>
              <FontAwesomeIcon icon={faMitten} />
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" variant="outline-primary" value={"faSocks"}>
              <FontAwesomeIcon icon={faSocks} />
            </ToggleButton>
            <ToggleButton id="tbg-radio-4" variant="outline-primary" value={"faTshirt"}>
              <FontAwesomeIcon icon={faTshirt} />
            </ToggleButton>
          </ToggleButtonGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleModalCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleModalSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )}


}

export default CounterComponent;

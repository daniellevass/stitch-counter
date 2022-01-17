import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Image, Form} from 'react-bootstrap';

class CounterComponent extends Component {

  constructor(props) {
      super();
      this.props = props;

      this.state = {
        counter1: 0,
        counter2: 0,
        notes: ""
      }
  }

  componentDidMount() {
    this.readFromStorage();
  }

  increaseCounter1 = () => {
    var counter1 = this.state.counter1;
    counter1 ++
    this.setState({counter1: counter1}, () => {
        this.saveToStorage()
    });
  }

  decreaseCounter1 = () => {
    var counter1 = this.state.counter1;
    if (counter1 > 0) {
      counter1 --
      this.setState({counter1: counter1}, () => {
          this.saveToStorage()
      });
    }
  }

  increaseCounter2 = () => {
    var counter2 = this.state.counter2;
    counter2 ++
    this.setState({counter2: counter2}, () => {
        this.saveToStorage()
    });
  }

  decreaseCounter2 = () => {
    var counter2 = this.state.counter2;
    if (counter2 > 0) {
      counter2 --
      this.setState({counter2: counter2}, () => {
          this.saveToStorage()
      });
    }

  }

  handleNotesChanged = (e) => {
      this.setState({notes: e.target.value}, () => {
          this.saveToStorage()
      });

  }

  saveToStorage = () => {
    let item = {
      counter1: this.state.counter1,
      counter2: this.state.counter2,
      notes: this.state.notes
    }
    localStorage.setItem("counter_component_1", JSON.stringify(item) );
  }

  readFromStorage = () => {
    let json = localStorage.getItem("counter_component_1");
    let item = JSON.parse(json);

    if (item != null) {
      this.setState({
        counter1: item.counter1,
        counter2: item.counter2,
        notes: item.notes
      })
    }
  }

  render() {
  return (
    <Container style={{'padding': "0px"}}>
      <Row style={{'margin': "0px"}}>

      <Row style={{'paddingTop':'20px',
                   'paddingBottom': '10px',
                   'background': '#FFCE54',
                   'margin': "0px"}}>
        <h1>Sweater</h1>

        <Row>
          <p style={{'fontSize': '5em'}}>
          <Button variant="outline-dark"
                  style={{'marginRight': '30px', 'width': '40px', 'marginLeft': '30px'}}
                  onClick={this.decreaseCounter1}>-</Button>{'  '}
          {this.state.counter1}
          <Button variant="outline-dark" size="lg"
                  style={{'fontSize': '0.5em', 'marginLeft': '30px', 'width': '70px'}}
                  onClick={this.increaseCounter1}>+</Button>
          </p>
        </Row>

      </Row>

      <Row style={{'paddingTop':'20px',
                   'paddingBottom': '10px',
                   'background': '#E6E9ED',
                   'margin': "0px"}}>

        <p style={{'fontSize': '2em'}}>
        <Button variant="outline-dark"
                style={{'fontSize': '1em', 'marginRight': '10px', 'width': '60px'}}
                onClick={this.decreaseCounter2}>-</Button>{'  '}
        {this.state.counter2}
        <Button variant="outline-dark" size="lg"
                style={{'fontSize': '1em', 'marginLeft': '30px', 'width': '60px'}}
                onClick={this.increaseCounter2}>+</Button>{'  '}


        </p>
      </Row>

      <Row style={{'paddingTop':'20px',
                   'paddingBottom': '10px',
                   'margin': "0px"}}>

                   <Form>
                     <Form.Group className="mb-3" >
                       <Form.Label>Notes</Form.Label>
                       <Form.Control as="textarea" rows={3} onChange={this.handleNotesChanged}
                       value={this.state.notes} />
                     </Form.Group>
                   </Form>

      </Row>

      </Row>

    </Container>
  )}


}

export default CounterComponent;

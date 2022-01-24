import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Image, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic, faPlus, faSun, faMitten, faTshirt, faSocks } from '@fortawesome/free-solid-svg-icons'

class ProjectList extends Component {

  constructor(props) {
      super();
      this.props = props;

      this.state = {

      }
  }

  btnAddPressed = () => {
    this.props.onAddItem()
  }

  onItemSelected = (project) => {
    this.props.onItemSelected(project)
  }

  render() {
  return (
    <Container style={{'padding': "0px"}}>
      <Row style={{'margin': "0px"}}>

      <h1 style={{'marginTop' : "20px",'marginBottom' : "20px"}}>
        <FontAwesomeIcon icon={faSun} /> Danielle's Stitch Counter</h1>

      <Row>
      </Row>

      {
            this.props.projects.map( (project, index) => {

              let icon = faMagic

              if (project.icon === "faMitten") {
                icon = faMitten
              } else if (project.icon === "faSocks") {
                icon = faSocks
              } else if (project.icon === "faTshirt") {
                icon = faTshirt
              }

                return <Button
                  style={{'marginBottom' : "10px"}}
                  key={index}
                  variant="light"
                  onClick={() => this.onItemSelected(project)}>
                    <FontAwesomeIcon icon={icon} /> {project.title}
                </Button>
            })

      }

      <Button
        variant="primary"
        onClick={this.btnAddPressed}>
          <FontAwesomeIcon icon={faPlus} /> Add Project
      </Button>

      </Row>

    </Container>
  )}


}

export default ProjectList;

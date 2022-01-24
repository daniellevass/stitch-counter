import React, { Component } from 'react';
import ProjectList from './ProjectList.js'
import CounterComponent from './CounterComponent.js'

class Application extends Component {

  constructor(props) {
      super();
      this.props = props;

      this.state = {
        projects: [],
        selectedProject: null,
        selectedKey: null
      }
  }

  saveToStorage = () => {
    localStorage.setItem("counter_component", JSON.stringify(this.state.projects) );
  }

  readFromStorage = () => {
    let json = localStorage.getItem("counter_component");
    if (json != undefined) {
      this.setState({projects: JSON.parse(json)})
    }
  }

  onAddItem = () => {
    let project = {
      counter1: 0,
      counter2: 0,
      notes: "",
      title: "new project",
      icon: "faMagic"
    }

    let projects = this.state.projects
    projects.push(project)

    this.setState({projects: projects}, () => {
        this.saveToStorage()
    });
  }

  onItemUpdated = (project) => {
    let projects = this.state.projects
    projects[this.state.selectedKey] = project
    this.setState({projects: projects}, () => {
        this.saveToStorage()
    });
  }

  onItemSelected = (project) => {
    let key = this.state.projects.indexOf(project)
    this.setState({selectedProject: project, selectedKey: key})
  }

  onBackPressed = () => {
    this.setState({selectedProject: null})
  }

  componentDidMount() {
    this.readFromStorage();
  }

  render() {

    let node = <ProjectList
        projects={this.state.projects}
        onItemSelected={this.onItemSelected}
        onAddItem={this.onAddItem} />

    if (this.state.selectedProject != undefined) {
      node = <CounterComponent
        project={this.state.selectedProject}
        onBackPressed={this.onBackPressed}
        onItemUpdated={this.onItemUpdated}
        />
    }

  return (
    <div className="Application">
    {node}
    </div>
  )}


}

export default Application;

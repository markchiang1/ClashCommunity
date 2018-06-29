import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../Components/List";
import Jumbotron from "../../Components/Jumbotron";
import NavBar from '../../Components/NavBar';
import './Teams.css';

class Teams extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    this.loadTeams();
  }

  loadTeams = () => {
    API.getTeams()
      .then(res => this.setState({ teams: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
      <NavBar />
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            <h1>Clash Teams</h1>
            </Jumbotron>

            {this.state.teams.length ? (
              <List>
                {this.state.teams.map(team => (
                    <ListItem key={team._id}>
                    {/* <a href={"/teams/" + team._id}> */}
                    <Link to={"/team/" + team._id}>
                      <strong>
                        {team.name} 
                      </strong>
                    {/* </a> */}
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3></h3>
            )}
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default teams;

import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../Components/Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../Components/List";
import Jumbotron from "../../Components/Jumbotron";


class Players extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    this.loadPlayers();
  }

  loadPlayers = () => {
    API.getPlayers()
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            <h1>Build Your Team!</h1>
            
              <h3>Player List</h3>
            </Jumbotron>
            {this.state.players.length ? (
              <List>
                {this.state.players.map(player => (
                    <ListItem key={player._id}>
                    {/* <a href={"/players/" + player._id}> */}
                    <Link to={"/player/" + player._id}>
                      <strong>
                        {player.name} 
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

export default Players;

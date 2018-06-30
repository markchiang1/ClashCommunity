import React from "react";
import './Matchlist.css';
import './container';

class Matchlist = extends component {
    constructor() {
        super()
        this.state = {
            summoner: '',
            kills: '',
            deaths: '',
            assists: '',
        }
    }
}

render() {
    return (
    <Fragment>
<div class="container">
  <div class="match-details-container">
    <div class="match-details">
      <!--       <div class="match-date">1993.12.02</div> -->
      <img src="http://vignette2.wikia.nocookie.net/leagueoflegends/images/6/69/BardSquare.png/revision/latest?cb=20150402215420" width="50px" height="50px">
      <div class="match-stats">54 - 32</div>
    </div>
  </div>

  <div class="match-container">
    <div class="champion-row">
      <div class="champion">
        <div class="champion-data">
          <div class="summoner-name">
            <img src="http://vignette4.wikia.nocookie.net/leagueoflegends/images/e/ef/KledSquare.png/revision/latest?cb=20160725201637" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
      <div class="champion">
        <div class="champion-data reverse">
          <div class="summoner-name reverse">
            <img src="http://vignette3.wikia.nocookie.net/leagueoflegends/images/a/a7/IllaoiSquare.png/revision/latest?cb=20151111024020" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
    </div>

    <div class="champion-row">
      <div class="champion">
        <div class="champion-data">
          <div class="summoner-name">
            <img src="http://vignette2.wikia.nocookie.net/leagueoflegends/images/6/6e/KindredSquare.png/revision/latest?cb=20160526213008" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
      <div class="champion">
        <div class="champion-data reverse">
          <div class="summoner-name reverse">
            <img src="http://vignette2.wikia.nocookie.net/leagueoflegends/images/9/9d/IvernSquare.png/revision/latest?cb=20160920193322" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
    </div>


    <div class="champion-row">
      <div class="champion">
        <div class="champion-data">
          <div class="summoner-name">
            <img src="http://vignette1.wikia.nocookie.net/leagueoflegends/images/c/c3/Aurelion_SolSquare.png/revision/latest?cb=20160308215107" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
      <div class="champion">
        <div class="champion-data reverse">
          <div class="summoner-name reverse">
            <img src="http://vignette2.wikia.nocookie.net/leagueoflegends/images/9/90/DianaSquare.png/revision/latest?cb=20160526212149" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
    </div>


    <div class="champion-row">
      <div class="champion">
        <div class="champion-data">
          <div class="summoner-name">
            <img src="http://vignette4.wikia.nocookie.net/leagueoflegends/images/c/c3/EzrealSquare.png/revision/latest?cb=20150402220010" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
      <div class="champion">
        <div class="champion-data reverse">
          <div class="summoner-name reverse">
            <img src="http://vignette4.wikia.nocookie.net/leagueoflegends/images/1/1e/LucianSquare.png/revision/latest?cb=20150402220529" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
    </div>


    <div class="champion-row">
      <div class="champion">
        <div class="champion-data">
          <div class="summoner-name">
            <img src="http://vignette2.wikia.nocookie.net/leagueoflegends/images/6/69/BardSquare.png/revision/latest?cb=20150402215420" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
      <div class="champion">
        <div class="champion-data reverse">
          <div class="summoner-name reverse">
            <img src="http://vignette2.wikia.nocookie.net/leagueoflegends/images/4/4f/KarmaSquare.png/revision/latest?cb=20150402220251" width="50px" height="50px">
            <div>test name</div>
          </div>
          <div class="stat"><span class="kills">10</span> / <span class="deaths">4</span> / <span class="assissts">13</span></div>
        </div>
      </div>
    </div>
  </div>

</div>
    </Fragment>
    )
} 

export default Matchlist;
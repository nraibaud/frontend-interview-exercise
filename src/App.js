import React, { Component } from 'react';

import './styles';

import PROFILES from './profiles.json';

import Ranking from './components/Ranking';
import Modal from './components/Modal';
import UserInfo from './components/UserInfo';


class App extends Component {
  state = {
    profiles: [],
    selectedProfile: null
  };

  componentWillMount() {
    this.setState({
      profiles: PROFILES,
    });
  }

  render() {
    return (
      <div>
        <Ranking
          profiles={this.state.profiles}
          onSelectProfile={(selectedProfile) => {
              this.setState({selectedProfile});
          }}
        />
        <Modal show={this.state.selectedProfile ? true : false}onHide={() => {
            this.setState({selectedProfile: null});
        }}>
          <UserInfo
            {...this.state.selectedProfile}
          />
        </Modal>
      </div>
    );
  }
}

export default App;

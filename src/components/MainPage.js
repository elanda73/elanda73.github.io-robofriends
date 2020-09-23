import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './MainPage.css'
import CounterButton from './CounterButton';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = robots => {
    return robots.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(this.props.searchField.toLowerCase()) 
      });
  }


  render() {
    const {robots, onSearchChange, isPending} = this.props;

    return isPending ? <h1 className="tc f1">Loading...</h1>
        : (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <CounterButton color="white"/>
            <SearchBox SearchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
    
  }


export default MainPage;

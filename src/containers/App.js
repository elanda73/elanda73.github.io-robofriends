import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchfield, requestRobots } from '../actions';
import './App.css'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchfield(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {


  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const {robots, searchField, onSearchChange, isPending,} = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return isPending ? <h1 className="tc f1">Loading...</h1>
        : (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox SearchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
    
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);

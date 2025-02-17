import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {
    console.log(this.props);
    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);

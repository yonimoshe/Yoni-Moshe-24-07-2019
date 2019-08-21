import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import Search from '../../containers/Search/Search';
import WeatherTitle from '../../components/weatherTitle/weatherTitle';
import CurrentWeather from '../../containers/CurrentWeather/CurrentWeather';
import Forecast from '../../containers/Forecast/Forecast';
import _ from "lodash";

class HomeGrid extends Component {

constructor(props){
  super(props);
  this.state = {
    isFavorite: false
  }
  this.addToFavorites = this.addToFavorites.bind(this);
  this.removeFromFavorites = this.removeFromFavorites.bind(this);
}
componentWillMount(){
  if (this.props.currentWeather.city === 'Tel-Aviv') {
    this.props.onSearchCurrent(this.props.currentWeather.city,this.props.currentWeather.key)
    this.props.onSearchForcast(this.props.currentWeather.key)
  }
}

componentDidMount(){
    let favs = JSON.parse(localStorage.getItem("favorites"));
    const fav = _.find(favs,{city:this.props.currentWeather.city});
    this.setState({isFavorite:fav? true:false});
}

componentDidUpdate(prev){
  if(this.props.currentWeather !== prev.currentWeather){
    let favs = JSON.parse(localStorage.getItem("favorites"));
    const fav = _.find(favs,{city:this.props.currentWeather.city});
    this.setState({isFavorite:fav? true:false});
  }
}

addToFavorites(){
      try{
        let favs = JSON.parse(localStorage.getItem("favorites"))
        favs =  favs ? favs:[];
        favs.push(this.props.currentWeather)
        localStorage.setItem("favorites", JSON.stringify(favs))
        this.setState({isFavorite: true});
      }catch(e){
        alert("ERR insert in to favorites")
      }
    }

removeFromFavorites(){
      try{
        let favs = JSON.parse(localStorage.getItem("favorites"))
        favs =  favs ? favs:[];
        favs =  favs.filter((item)=>{
        return item.city !==this.props.currentWeather.city;
      })
        localStorage.setItem("favorites", JSON.stringify(favs))
        this.setState({isFavorite: false});
      }catch(e){
        alert("ERR removing from favorites")
      }
    }

  render() {
    const isFavorite = this.state.isFavorite;
    return (
      <div className="container-fluid">
        <Search />
          <div className="row mt-5 justify-content-between">
             <CurrentWeather />
                <div className="col-4 text-right  mt-4">
                   {!isFavorite && <button onClick={this.addToFavorites} type="button" className="btn btn-success border 1px solid: black">Add to favorites</button>}
                   {isFavorite && <button onClick={this.removeFromFavorites} type="button" className="btn btn-light border 1px solid: black">Remove from favorites</button>}
                 </div>
           </div>
           <div className="row mt-4 justify-content-center">
              <WeatherTitle />
           </div>
           <div className="row justify-content-between mt-4" style={{height: '200px'}}>
              <Forecast />
           </div>
      </div>
    )}
}

const mapStateToProps = state => {
    return {
        currentWeather:state.current
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchCurrent: (cityName,key) => dispatch(actionCreators.getCurretWeather(cityName,key)),
        onSearchForcast: (key) => dispatch(actionCreators.getForecast(key))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeGrid);

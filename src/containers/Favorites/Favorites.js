import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import { Redirect } from 'react-router-dom';

class Favorites extends Component {

// redux is not steeky
  constructor(props){
    super(props)
     this.state = {
       favorites: [],
       redirect:false
     }
     this.updateCurrent = this.updateCurrent.bind(this)
  }

  updateCurrent(item){
    this.setState({redirect:true});
    this.props.onChangeCurrent(item.city, item.key)
    this.props.onChangeForcast(item.key)
  }

  componentWillMount(){
    const favs = JSON.parse(localStorage.getItem("favorites"))
    this.setState({favorites: favs})
  }

  render() {
    const {redirect, favorites} = this.state;
    if(redirect){
      return     <Redirect to="/"/>
    }
    return (
            <div className="container mt-5">
              <ul>
                 <div className="row">
                   {favorites.map( el => {
                        return (
                            <li onClick={()=>{this.updateCurrent(el)}} className="card bg-light mb-3 mx-1" style={{fontSize: '20px',width:'200px' ,height: '200px',cursor: 'pointer'}}>
                              <h6 className="card-header text-center">{el.city}</h6>
                                <div className="card-body">
                                 <p className="card-text text-center">{el.temperature}</p>
                                 <p className="card-text text-center">{el.weatherText}</p>
                              </div>
                            </li>
                          )
                      })
                   }
                 </div>
              </ul>
            </div>
    );}
}
        const mapStateToProps = state => {
            return {
                city: state.current.city,
                temp: state.current.temperature,
                weatherText: state.current.weatherText
            }
        };

        const mapDispatchToProps = dispatch => {
            return {
                onChangeCurrent: (cityName,key) => dispatch(actionCreators.getCurretWeather(cityName,key)),
                onChangeForcast: (key) => dispatch(actionCreators.getForecast(key))
            }
        };

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

class Localizacion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:-6.23,
      cordLongitude:106.75,

    };
    this.mergeLot = this.mergeLot.bind(this);
  }



  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }



  mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       this.setState({
         concat: concatLot
       }, () => {
         this.getDirections(concatLot, "-6.270565,106.759550");
       });
     }
   }



   async getDirections(startLoc, destinationLoc) {
         try {

             let coords = points.map((point, index) => {
                 return  {
                     latitude : point[0],
                     longitude : point[1]
                 }
             })

             this.setState({coords: coords})
             this.setState({x: "true"})
             return coords

         } catch(error) {
             this.setState({x: "error"})
             return error
         }
     }

  render() {
    return (
      <MapView style={styles.map} >
      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Tu ubicación"}
       />}

      </MapView>

    );

  }

}



const styles = StyleSheet.create({

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },

});



export default Localizacion;

import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import {IndicadorActividad} from '../componentes/IndicadorActividadComponent';
import {baseUrl,colorGaztaroaOscuro,colorGaztaroaClaro} from '../comun/comun';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';


const mapStateToProps=state=>{
  return{
    actividades:state.actividades,
    cabeceras:state.cabeceras,
    excursiones:state.excursiones
  }
}



function RenderItem(props) {

        const item = props.item;
        if (props.isLoading) {
            return(
                <IndicadorActividad />
            );
        }

        else if (props.errMess) {
            return(
                <View>
                    <Text>{props.errMess}</Text>
                </View>
            );
        }

                  else {


                  if (item != null) {
                      return(
                          <Card
                              featuredTitle={item.nombre}
                              image={{uri:item.imagen}}>

                                  <Animatable.Text animation="slideInDown" iterationCount={3} direction="alternate">{item.descripcion}</Animatable.Text>
                          </Card>
                      );
                  }
                  else {
                      return(<View></View>);
                  }
        }
}

class Home extends Component {



    render() {

        return(
            <ScrollView>
                <RenderItem item={this.props.cabeceras.cabeceras.filter((cabecera) => cabecera.destacado)[0]} />
                <RenderItem item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]}
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
                />

                <RenderItem item={this.props.actividades.actividades.filter((actividad) => actividad.destacado)[0]} />

            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);

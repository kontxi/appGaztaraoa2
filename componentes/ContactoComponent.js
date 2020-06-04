import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import { colorGaztaroaOscuro } from '../comun/comun';
import TextAnimator from '../componentes/TextAnimator';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';



class Contacto extends Component {

  sendMail(){
    MailComposer.composeAsync({
        recipients:['gaztaroa@gaztaroa.com'],
        subject:'Parte hartu / Participar',
        body:'Kaixo gaztaroa! Email hau idazten dut... '
    });
  }

  handleViewRef = ref => this.view = ref;


    render(){
        const { navigate } = this.props.navigation;


            return (

               <View style={styles.container}>
               <Card
                   title='Información de contacto'
                   featuredTitle="Contacto">
                   <StatusBar hidden/>

                       <TextAnimator
                         content="Kaixo Mendizale!"
                         textStyle={styles.textStyle}
                         style={styles.containerStyle}
                         timing={1000}
                         onFinish={ this._onFinish }
                       />
                   <Text style={{margin: 10}}>
                       Si quieres participar en las salidas de montaña que organizamos o quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a través de diferentes medios. Puedes llamarnos por teléfono los jueves de las semanas que hay salida (de 20:00 a 21:00). También puedes ponerte en contacto con nosotros escribiendo un correo electrónico, o utilizando la aplicación de esta página web. Y además puedes seguirnos en Facebook.{'\n'}{'\n'}
                       Para lo que quieras, estamos a tu disposición!{'\n'}{'\n'}
                       Tel: +34 948 277151{'\n'}{'\n'}
                       Email: gaztaroa@gaztaroa.com
                    </Text>
                    <Button
                      title=' Bidali mezua / Enviar correo'
                      buttonStyle={{backgroundColor:colorGaztaroaOscuro}}
                      icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                      onPress={this.sendMail}
                    />
                </Card>


              </View>
            );



    };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerStyle: {},
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 14
  },
});

export default Contacto;

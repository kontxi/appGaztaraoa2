import React, { Component, useEffect, useState } from 'react';
import Home from './HomeComponent';
import Calendario from './CalendarioComponent';
import QuienesSomos from './QuienesSomosComponent';
import PruebaEsfuerzo from './PruebaEsfuerzoComponent';
import Contacto from './ContactoComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import VistaFavoritos from './VistaFavoritosComponent';
import VistaFotos from './Galeria';
import Localizacion from './Localizacion';
import { View, StyleSheet, Image, Text, Platform} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,   DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { colorGaztaroaClaro, colorGaztaroaOscuro } from '../comun/comun';
import { connect } from 'react-redux';
import NetInfo,{useNetInfo} from "@react-native-community/netinfo";


import { postFavorito, postComentario } from '../redux/ActionCreators';
import { fetchExcursiones, fetchComentarios, fetchCabeceras, fetchActividades } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    excursiones: state.excursiones,
    comentarios: state.comentarios,
    cabeceras: state.cabeceras,
    actividades: state.actividades
  }
}

const mapDispatchToProps = dispatch => ({
  fetchExcursiones: () => dispatch(fetchExcursiones()),
  fetchComentarios: () => dispatch(fetchComentarios()),
  fetchCabeceras: () => dispatch(fetchCabeceras()),
  fetchActividades: () => dispatch(fetchActividades()),
})

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavegador({ navigation }) {
  const netInfo=useNetInfo();
  const [isInternetReachable, setIsInternetReachable]=useState(false);
  useEffect(()=>{
      const unsubscribe=NetInfo.addEventListener(state=>{
        setIsInternetReachable(state.isInternetReachable);
      });
 return()=>{
   unsubscribe();
 };


},[]);
if(isInternetReachable){

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
        headerRight: ()=>(<Text style={styles.drawerConexiontext}> {netInfo.type}</Text> )
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Campo Base'
        }}
      />
    </Stack.Navigator>
  );
}
return(

  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: 'red'},
      headerTitleStyle: { color: '#fff' },
      headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Sin conexion a Internet'
      }}
    />
  </Stack.Navigator>

);

}

function QuienesSomosNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="QuienesSomos"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
      }}
    >
      <Stack.Screen
        name="QuienesSomos"
        component={QuienesSomos}
        options={{
          title: 'Quiénes somos',
        }}
      />
    </Stack.Navigator>
  );
}

function CalendarioNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },

      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
          headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
        }}
      />
    </Stack.Navigator>
  );
}

function ContactoNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contacto"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
      }}
    >
      <Stack.Screen
        name="Contacto"
        component={Contacto}
        options={{
          title: 'Contacto',
        }}
      />
    </Stack.Navigator>
  );
}
function PruebaEsfuerzoNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="PruebaEsfuerzo"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
      }}
    >
      <Stack.Screen
        name="PruebadeEsfuerzo"
        component={PruebaEsfuerzo}
        options={{
          title: 'PruebaEsfuerzo',
        }}
      />
    </Stack.Navigator>
  );
}
function VistaFavoritosNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="VistaFavoritos"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
      }}
    >
      <Stack.Screen
        name="VistaFavoritos"
        component={VistaFavoritos}
        options={{
          title: 'Excusiones favoritas',
        }}
      />
    </Stack.Navigator>
  );
}

function GaleriaNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Fotos"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
      }}
    >
      <Stack.Screen
        name="Fotos"
        component={VistaFotos}
        options={{
          title: 'Mi galeria de fotos',
        }}
      />
    </Stack.Navigator>
  );
}
function LocationNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Location"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>),
      }}
    >
      <Stack.Screen
        name="Location"
        component={Localizacion}
        options={{
          title: 'Localización',
        }}
      />
    </Stack.Navigator>
  );
}




function CustomDrawerContent(props) {
  const [isInternetReachable, setIsInternetReachable]=useState(false);
  useEffect(()=>{
      const unsubscribe=NetInfo.addEventListener(state=>{
        setIsInternetReachable(state.isInternetReachable);
      });
 return()=>{
   unsubscribe();
 };


},[]);
if(isInternetReachable){

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source = {{uri:'https://firebasestorage.googleapis.com/v0/b/appgaztaroa.appspot.com/o/imagenes%2Flogo.png?alt=media&token=5483ecc5-bcc9-43be-a075-17a2850e1e4a'}}
            style={styles.drawerImage}
          />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}> Gaztaroa</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}
return(

  <SafeAreaView style={{backgroundColor:'red'}}>
    <Text style={{
      color:'white',
      fontSize:Platform.OS==='android'? 12:16,
      padding:10,
      textAling:'center',
      fontWeight:'500',
      letterSpacing:2,
    }}>
    Sin conexión a Internet
    </Text>
  </SafeAreaView>

);
};



function DrawerNavegador() {
  return (
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: colorGaztaroaClaro,
        }}
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Campo base" component={HomeNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='home'
              type='font-awesome'
              size={24}
              color={tintColor}
              />
            )
            }}
        />
        <Drawer.Screen name="Quiénes somos" component={QuienesSomosNavegador}
          options={{
              drawerIcon: ({ tintColor}) => (
                <Icon
                name='info-circle'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
              )
              }}
          />
        <Drawer.Screen name="Calendario" component={CalendarioNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='calendar'
              type='font-awesome'
              size={24}
              color={tintColor}
              />
            )
            }}
        />
        <Drawer.Screen name="Contacto" component={ContactoNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='address-card'
              type='font-awesome'
              size={22}
              color={tintColor}
              />
            )
            }}
        />
        <Drawer.Screen name="Excursiones favoritas" component={VistaFavoritosNavegador}
          options={{
              drawerIcon: ({ tintColor}) => (
                <Icon
                name='thumbs-up'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
              )
              }}
          />
          <Drawer.Screen name="Mi galeria de fotos" component={GaleriaNavegador}
            options={{
              drawerIcon: ({ tintColor}) => (
                <Icon
                name='image'
                type='font-awesome'
                size={22}
                color={tintColor}
                />
              )
              }}
          />
        <Drawer.Screen name="Prueba de Esfuerzo" component={PruebaEsfuerzoNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='heartbeat'
              type='font-awesome'
              size={22}
              color={tintColor}
              />
            )
            }}
        />
        <Drawer.Screen name="Localización" component={LocationNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='map-marker'
              type='font-awesome'
              size={24}
              color={tintColor}
              />
            )
            }}
        />


      </Drawer.Navigator>
  );
}

class Campobase extends Component {

  componentDidMount() {
    this.props.fetchExcursiones();
    this.props.fetchComentarios();
    this.props.fetchCabeceras();
    this.props.fetchActividades();
  }

  render() {

    return (
      <NavigationContainer>
        <View style={{flex:1 }}>
          <DrawerNavegador />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: colorGaztaroaOscuro,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  },
  drawerConexiontext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Campobase);

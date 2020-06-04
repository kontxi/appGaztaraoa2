import React, { Component } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { IndicadorActividad } from './IndicadorActividadComponent';
import { baseUrl } from '../comun/comun';
import Swipeout from 'react-native-swipeout';
import { borrarFavorito } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      excursiones: state.excursiones,
      favoritos: state.favoritos
    }
  }

const mapDispatchToProps = dispatch => ({
    borrarFavorito: (excursionId) => dispatch(borrarFavorito(excursionId))
})

class VistaFavoritos extends Component {

    render() {

        const { navigate } = this.props.navigation;

        const renderFavoritoItem = ({item, index}) => {
            function alertaBorrarFavorito (props) {
                Alert.alert(
                    'Borrar excursión favorita?',
                    'Confirme que desea borrar la excursión: ' + item.nombre,
                    [
                        {
                            text: 'Cancelar',
                            onPress: () => console.log(item.nombre + ' Favorito no borrado'),
                            style: ' cancel'
                        },
                        {
                            text: 'OK',
                            onPress: () => {console.log(item.id); props.borrarFavorito(item.id)}
                        }
                    ],
                    { cancelable: false }
                );
                };

            const rightButton = [
                {
                    text: 'Borrar',
                    type: 'delete',
                    onPress: () => alertaBorrarFavorito(this.props)

                }
            ];

            return (
                <Swipeout right={rightButton} autoClose={true}>
                    <ListItem
                        key={index}
                        title={item.nombre}
                        subtitle={item.descripcion}
                        hideChevron={true}
                        onPress={() => navigate('DetalleExcursion', { excursionId: item.id })}
                        onLongPress={() => alertaBorrarFavorito(this.props)}
                        leftAvatar={{ source: {uri:item.imagen}}}
                    />
                </Swipeout>
            );
        };

        if (this.props.excursiones.isLoading) {
            return(
                <IndicadorActividad />
            );
        }
        else if (this.props.excursiones.errMess) {
            return(
                <View>
                    <Text>{this.props.excursiones.errMess}</Text>
                </View>
            );
        }
        else {
            return (
                <FlatList
                    data={this.props.excursiones.excursiones.filter(favorito => this.props.favoritos.some(el => el === favorito.id))}
                    renderItem={renderFavoritoItem}
                    keyExtractor={item => item.id.toString()}
                    />
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VistaFavoritos);

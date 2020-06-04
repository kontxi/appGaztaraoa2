import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../comun/comun';


export const fetchComentarios = () => (dispatch) => {
    return fetch('https://appgaztaroa.firebaseio.com/comentarios.json')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error comentarios ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comentarios => dispatch(addComentarios(comentarios)))

    .catch(error => dispatch(comentariosFailed(error.message)));
};

export const comentariosFailed = (errmess) => ({
    type: ActionTypes.COMENTARIOS_FAILED,
    payload: errmess
});

export const addComentarios = (comentarios) => ({
    type: ActionTypes.ADD_COMENTARIOS,
    payload: comentarios
});

export const postComentario = (comentario)  => (dispatch) => {
    dispatch(addComentario(comentario));
        fetch('https://appgaztaroa.firebaseio.com/comentarios/'+comentario.id+'.json', {
          method: 'PUT',
          body: JSON.stringify(
          comentario



          ), // data can be `string` or {object}!
        }).then(res=> res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));


}

export const addComentario = (comentario) => ({

    type: ActionTypes.ADD_COMENTARIO,
    payload: comentario
});

export const fetchExcursiones = () => (dispatch) => {

    dispatch(excursionesLoading());

    return fetch('https://appgaztaroa.firebaseio.com/excursiones.json')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error excursiones ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(excursiones => dispatch(addExcursiones(excursiones)))
    .catch(error => dispatch(excursionesFailed(error.message)));
};

export const excursionesLoading = () => ({
    type: ActionTypes.EXCURSIONES_LOADING
});

export const excursionesFailed = (errmess) => ({
    type: ActionTypes.EXCURSIONES_FAILED,
    payload: errmess
});

export const addExcursiones = (excursiones) => ({
    type: ActionTypes.ADD_EXCURSIONES,
    payload: excursiones
});

export const fetchCabeceras = () => (dispatch) => {

    dispatch(cabecerasLoading());

    return fetch('https://appgaztaroa.firebaseio.com/cabeceras.json')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error cabeceras' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(cabeceras => dispatch(addCabeceras(cabeceras)))
    .catch(error => dispatch(cabecerasFailed(error.message)));
};

export const cabecerasLoading = () => ({
    type: ActionTypes.CABECERAS_LOADING
});

export const cabecerasFailed = (errmess) => ({
    type: ActionTypes.CABECERAS_FAILED,
    payload: errmess
});

export const addCabeceras = (cabeceras) => ({
    type: ActionTypes.ADD_CABECERAS,
    payload: cabeceras
});

export const fetchActividades = () => (dispatch) => {

    dispatch(actividadesLoading());

    return fetch('https://appgaztaroa.firebaseio.com/actividades.json')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error actividades ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(actividades => dispatch(addActividades(actividades)))
    .catch(error => dispatch(actividadesFailed(error.message)));
};

export const actividadesLoading = () => ({
    type: ActionTypes.ACTIVIDADES_LOADING
});

export const actividadesFailed = (errmess) => ({
    type: ActionTypes.ACTIVIDADES_FAILED,
    payload: errmess
});

export const addActividades = (actividades) => ({
    type: ActionTypes.ADD_ACTIVIDADES,
    payload: actividades
});

export const fetchFavoritos = () => (dispatch) => {
    return fetch(baseUrl + 'favoritos')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(favoritos => dispatch(addFavorito(favoritos)))
    .then(favoritos => dispatch(borrarFavorito(favoritos)))
    .catch(error => dispatch(favoritosFailed(error.message)));
};
export const postFavorito = (excursionId)  => (dispatch) => {
    setTimeout(() => {
        dispatch(addFavorito(excursionId));
    }, 2000);
    console.log(excursionId)
};

export const addFavorito = (excursionId) => ({
    type: ActionTypes.ADD_FAVORITO,
    payload: excursionId
});
export const borrarFavorito = (excursionID) => ({

    type: ActionTypes.BORRAR_FAVORITO,
    payload: excursionID
});

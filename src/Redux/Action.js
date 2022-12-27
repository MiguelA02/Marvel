export const GET_DETAILS = 'GET_DETAILS';
export const GET_ALL_COMICS = 'GET_ALL_COMICS';
export const GET_COMICS_DETAILS = 'GET_COMICS_DETAILS'


export const getDetails = (name) =>{
    return function(dispatch){
        return fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=def82f5587f86444a30303d7fa48a68c`)
        .then(res => res.json())
        .then(res => dispatch({type: GET_DETAILS, payload: res}))
    }
}
export const getAllComics = (id) =>{
    return function(dispatch){
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=def82f5587f86444a30303d7fa48a68c`)
        .then(res => res.json())
        .then(res => dispatch({type: GET_ALL_COMICS, payload: res}))
    }
}
export const getComicsDetails = (id) => {
    return function(dispatch){
        return fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=def82f5587f86444a30303d7fa48a68c`)
        .then(res => res.json())
        .then(res => dispatch({type: GET_COMICS_DETAILS, payload: res}))
    }
}

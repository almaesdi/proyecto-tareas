import axios from 'axios'

const AuthService = {
    login,
    register
}

function login(username, password) {

    const formData = new FormData();

    formData.set('email', username);
    formData.set('password', password);

    return axios.post("/login", formData)
        .then(
            resp => {
                console.log(resp);
                if(resp.data){
                    return resp.data    //Devuelve user
                }
                return null;
            })
        .catch(error => {
            if (error.response.status == 422){
                console.log(error.response.data.errors);
                return error.response.data.errors;
            }
        });
    //return axios.post("/login", formData);


    /*return axios.get("/login", {

        email: this.username,
        password: this.password
    })*/
    /*.then(
        user => {
            commit('loginSuccess', user);
            router.push('/');
        },
        error => {
            commit('loginFailure', error);
            dispatch('alert/error', error, { root: true });
        }
    );*/

    /*.then(function(response) {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
      return "error";
    });*/

}

function register(name,username, password) {

    const formData = new FormData();

    formData.set('name', name);
    formData.set('email', username);
    formData.set('password', password);
    formData.set('password_confirmation', password);

    return axios.post("/register", formData)
        .then(
            resp => {
                if(resp.data){
                    return resp.data    //Devuelve user
                }
                return null;
            })
        .catch(
            err => {
                return err.response
            });
}

/*
function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
*/
export default AuthService

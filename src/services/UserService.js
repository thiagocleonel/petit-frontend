
import axios from 'axios';
import { PanResponder } from 'react-native';

const host = "https://br-petit.herokuapp.com";

export const login = () => {
    axios
        .post(host+"/api/login",
            {"user": {
                "email":"thiagocleonel3245@gmail.com",
                "password":"1234356"
            }})
        .then(data => { console.log(data) })
        .catch(error => { console.log(error)});
}

export const signup = (email, name, lastname, password) => {
    axios
        .post(host+"/api/signup", 
            {"user": {
                "email":"inferno@gmail.com",
                "name":"lorde",
                "last_name": "das trevas",
                "password": "maçom1234"
            }})
            .then(data => { 
                console.log(data)
                if(data.status == 200){
                    //[TODO]
                    }
            })
            .catch(error => { console.log(error)});
}

export const logout = () => {

}




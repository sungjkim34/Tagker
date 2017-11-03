import * as firebase from 'firebase';
import { firebaseConfig } from './config';

export default class AuthService {

    static getListOfUsers = () => {
        const firebaseApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
        const ref = firebaseApp.database().ref('users');
        return new Promise((resolve, reject)=> {
            ref.orderByChild('username').on('value', snapshot => {
                snapshot.exists() ? resolve(Object.values(snapshot.val())) : reject('No users exists');
            })
        });
    }

    static getUserInfoFromUsername = (username) => {
        const firebaseApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
        const ref = firebaseApp.database().ref('users');
        return new Promise((resolve, reject)=> {
            ref.orderByChild('username').equalTo(username).on('value', snapshot => {
                snapshot.exists() ? resolve(snapshot.val()[Object.keys(snapshot.val())[0]]) : reject('User not found');
            })
        });
    }

    static getUserInfoFromUserId = (userId) => {
        const firebaseApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
        const ref = firebaseApp.database().ref('users');
        return new Promise((resolve, reject)=> {
            ref.orderByChild('userId').equalTo(usderId).on('value', snapshot => {
                snapshot.exists() ? resolve(snapshot.val()[Object.keys(snapshot.val())[0]]) : reject('User not found');
            })
        });
    }

    static updateUserCarInfo = (userId, carInfo) => {
        const firebaseApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
        return firebaseApp.database().ref('users/' + userId).update({
            carInfo: carInfo
        }).then(res => console.log(res)).catch(err => console.log(err));
    }
}
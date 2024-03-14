import {getUsers} from "./user";
import login from "./login";
import loggedIn from "./loggedIn";
import "jquery"

loggedIn();

document.getElementById('loginButton')!.addEventListener('click',function(e){
    e.preventDefault();
    
let username= (<HTMLInputElement>document.getElementById('username')).value;
let password= (<HTMLInputElement>document.getElementById('password')).value;

login(getUsers()[0],{username,password});;
});

console.log($('#loginButton'));
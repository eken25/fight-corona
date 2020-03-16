// import Cookie from './cookie.js';
import Config from './config.js';

//Global Statistics API
const getGlobalStatus = async()=>{
    let response = await fetch(`${Config.urls.free_api}?global=stats`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json.results;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

//Country Statistics API
const getCountryStatus = async(cc)=>{
    let response = await fetch(`${Config.urls.free_api}?countryTotal=${cc}`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json.countrydata;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

//Full Timeline API
const getGlobalTimeline = async()=>{
    let response = await fetch(`${Config.urls.free_api}?countryTotal=IN`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        console.log(json.countrydata);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

//Country Timeline API
const getCountryTimeline = async(cc)=>{
    let response = await fetch(`${Config.urls.free_api}?countryTimeline=${cc}`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json.timelineitems;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export default { getGlobalStatus, getGlobalTimeline, getCountryStatus, getCountryTimeline };
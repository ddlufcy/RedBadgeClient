export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'https://redbadgeserver.herokuapp.com' :
        // this is the full url of your deployed API
        APIURL = 'https://redbadgeserver.herokuapp.com'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:4200';
}
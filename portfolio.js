// DEFINE VARIABLES
var website_projects = document.getElementById("website-projects");
var web_apps = document.getElementById("web-apps");

// FUNCTIONS USED FOR ONCLICK
function showAll(){
  web_apps.style.display = 'initial';
  website_projects.style.display = 'initial';}

function showWebsites() {
  web_apps.style.display = 'none';
  website_projects.style.display = 'initial';
}

function showApps () {
  website_projects.style.display = 'none';
  web_apps.style.display = 'initial';

}
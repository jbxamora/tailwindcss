/*!

=========================================================
* Soft UI Dashboard Pro Tailwind - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (site.license)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var page_path = window.location.pathname.split("/");
var current_page = page_path.pop();
var parent_page = page_path.pop();
var root_page = page_path.pop();
var root = page_path.pop();

if (current_page == "documentation.html") {
  var to_build = "../";
} else if (current_page == "index.html" || current_page == "") {
  var to_build = "./";
} else if(root == "pages"){
  var to_build = "../../../";
}
 else {
  var to_build = "../../";
}

if (document.querySelector("[multisteps-form]")) {
  loadJS("assets/js/multisteps-form.js", true);
}

function loadStylesheet(FILE_URL) {
  let dynamicStylesheet = document.createElement("link");

  dynamicStylesheet.setAttribute("href", FILE_URL);
  dynamicStylesheet.setAttribute("type", "text/css");
  dynamicStylesheet.setAttribute("rel", "stylesheet");

  document.head.appendChild(dynamicStylesheet);
}

function loadJS(FILE_URL, async) {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async);

  document.head.appendChild(dynamicScript);
}

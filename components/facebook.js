import { useEffect } from "react";

/**
 *
 */
export function init() {
  var chatbox = document.getElementById("fb-customer-chat");
  chatbox.setAttribute("page_id", "100029087148874"); // TODO: move to args
  chatbox.setAttribute("attribution", "setup_tool");

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v11.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

export function Facebook1() {
  useEffect(() => {
    console.log("Facebook1");
    init();
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
import { createBrowserHistory } from "history";

export default createBrowserHistory({
  forceRefresh: true,
  getUserConfirmation: (message, callback) => {
    window.alert("Session has expired. Please login.");

    return setTimeout(callback(true), 100000);
  }
});

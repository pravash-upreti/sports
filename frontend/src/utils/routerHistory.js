import createBrowserHistory from 'history/createBrowserHistory';

export default createBrowserHistory({
  forceRefresh: false,
  getUserConfirmation: (message, callback) => {
    window.alert('Session has expired. Please login.');

    return setTimeout(callback(true), 100000);
  }
});

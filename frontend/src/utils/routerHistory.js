import createBrowserHistory from 'history/createBrowserHistory';

/**
 * Create a history object to use with react-router.
 *
 * @export
 * @returns {object}
 */
export default createBrowserHistory({
  forceRefresh: false,
  getUserConfirmation: (message, callback) => {
    window.alert('Session has expired. Please login.');

    return setTimeout(callback(true), 100000);
  }
});

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
import { CLIENT_ID } from '../config';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, method, headers) {
  const headersData = headers || [];
  headersData.push({
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${CLIENT_ID}`,
  });

  const combinedHeaders = headersData.reduce(
    (acc, item) => ({ ...acc, ...item }),
    {},
  );
  const options = { method, headers: combinedHeaders };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

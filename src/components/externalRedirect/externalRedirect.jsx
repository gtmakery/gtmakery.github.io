// import React from 'react';
// import { Redirect } from 'react-router-dom';

export default function ExternalRedirect({ target }) {
  // console.log(target);
  window.location.replace(target);
  return null;
  // return (
  //   <Redirect to={{ pathname: target }} target="_blank" />
  // );
}

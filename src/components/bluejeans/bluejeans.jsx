import React from 'react';
import { Redirect } from 'react-router-dom';

const target = "https://bluejeans.com/172056840";

export default function About() {
  window.location.replace(target);
  // return (
  //   <Redirect to={{ pathname: target }} target="_blank" />
  // );
}

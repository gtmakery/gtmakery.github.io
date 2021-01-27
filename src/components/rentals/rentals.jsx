import React from 'react';
import { Redirect } from 'react-router-dom';

const target = "https://gatech.co1.qualtrics.com/jfe/form/SV_6xo6Al2j4TEWru6";

export default function Rentals() {
  window.location.replace(target);
  return (
    <Redirect to={{ pathname: target }} target="_blank" />
  );
}

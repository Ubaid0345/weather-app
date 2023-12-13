import React from 'react';
import LoaderCss from '../Assests/Loader.Module.css'

export default function Loader() {
  return (
    <div id={LoaderCss.preloader}>
    <div id={LoaderCss.loader}></div>
    </div>
  )
}

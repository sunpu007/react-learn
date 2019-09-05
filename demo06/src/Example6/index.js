import React, { Fragment } from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttens';
import { Color } from './Color';

function Example6 () {
  return (
    <Fragment>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </Fragment>
  )
}

export default Example6

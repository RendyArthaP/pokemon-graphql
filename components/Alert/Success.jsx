import React from 'react';
import {
  SectionSuccess,
  TextDescriptionSuccess,
  WrapperSuccess
} from '../../styled/components/Alert';
import { css } from '@emotion/css';

export default function Success({ name }) {
  return(
    <WrapperSuccess>
      <SectionSuccess>
        <h1 
          className={css`${TextDescriptionSuccess}`} 
          data-test='success-alert'
        >
          You succeed catch {name}. See at your pokemon list!
        </h1>
      </SectionSuccess>
    </WrapperSuccess>
  )
};
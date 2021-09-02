import React from 'react';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';
import styled from '@emotion/styled';

expect.extend(matchers)

test('Render with correct styles', () => {
  const BackgroundNavbar = styled('div')`
    background-color: #FFDE00;
    height: 5rem;
  `;

  const tree = renderer.create(
    <BackgroundNavbar />
  ).toJSON()
  
  expect(tree).toHaveStyleRule('background-color', '#FFDE00');
  expect(tree).toHaveStyleRule('height', '5rem');
})
import React, { Component } from 'react';
import styled from 'styled-components'
import PieChart from './PieChart';

const Main = styled.div`
  display: flex;
`;

const Inputs = styled.div`
  display: flex;
  flex-grow: 2;
`;

export default class extends Component {
  render() {
    return (
      <Main>
        <PieChart />
        <Inputs>Inputs</Inputs>
      </Main>
    );
  }
}
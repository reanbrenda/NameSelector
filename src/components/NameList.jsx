import React from 'react';
import styled from 'styled-components';
import { slideIn } from '../animation';

const ListContainer = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
`;

const NameListh = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 45%;
  min-height: 200px;
`;

const NameListTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const NameItem = styled.div`
  animation: ${slideIn} 0.3s ease-out;
  margin: 5px 0;
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const NameList = ({ title, items }) => (
  <ListContainer>
    <NameListh>
      <NameListTitle>{title}</NameListTitle>
      {items.map((item, index) => (
        <NameItem key={`${title}-${index}`}>{item}</NameItem>
      ))}
    </NameListh>
  </ListContainer>
);

export default NameList;

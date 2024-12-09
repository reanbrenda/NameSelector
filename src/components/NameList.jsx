import React from 'react';
import styled from 'styled-components';
import { slideIn } from '../animation';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const NameListContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  min-height: 200px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NameListTitle = styled.h3`
  text-align: center;
  margin-bottom: 15px;
  color: #333;
  font-size: 20px;
`;

const NameItem = styled.div`
  animation: ${slideIn} 0.3s ease-out;
  margin: 8px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const NameList = ({ title, items }) => {
if (items.length === 0) return null;
   
return(
  <ListContainer>
    
    <NameListContainer>
      <NameListTitle>{title}</NameListTitle>
      {items.map((item, index) => (
        <NameItem key={`${title}-${index}`}>{item}</NameItem>
      ))}
    </NameListContainer>
  </ListContainer>
);}

export default NameList;
import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../animation';


const NameCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
`;

const NameDisplay = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const CardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const CardButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &.yes-button {
    background-color: #4caf50;
    color: white;
  }

  &.maybe-button {
    background-color: #ffa500;
    color: white;
  }

  &.no-button {
    background-color: #f44336;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const NameCard = ({ name, details, onYes, onMaybe, onNo }) => (
 
    <NameCardContainer>
      <NameDisplay>{name}</NameDisplay>
      <div>{details}</div>
      <CardButtonContainer>
        <CardButton className="yes-button" onClick={onYes}>
          Yes
        </CardButton>
        <CardButton className="maybe-button" onClick={onMaybe}>
          Maybe
        </CardButton>
        <CardButton className="no-button" onClick={onNo}>
          No
        </CardButton>
      </CardButtonContainer>
    </NameCardContainer>
  
);

export default NameCard;

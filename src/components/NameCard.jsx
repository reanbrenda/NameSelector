import React from 'react';
import styled from 'styled-components';
import { fadeIn, pulse } from '../animation';

const NameCardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
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
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-image: linear-gradient(white, white), 
                    linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  background-origin: padding-box, border-box;
  backdrop-filter: blur(10px);

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    animation: ${pulse} 0.5s ease-in-out;
  }
`;

const NameDisplay = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-out;
  font-weight: bold;
  color: #2575fc;
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
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: all 0.3s;
  }

  &:hover::before {
    left: 100%;
  }

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
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const NameCard = ({ name, details, onYes, onMaybe, onNo }) => (
  <NameCardContainer>
    <NameDisplay>{name}</NameDisplay>
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
import React from 'react';
import styled from 'styled-components';

const NavigateButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const NavigateButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const NavigateButtons = ({ onPrev, onNext, disablePrev, disableNext }) => (
  <NavigateButtonContainer>
    <NavigateButton onClick={onPrev} disabled={disablePrev}>
      Prev
    </NavigateButton>
    <NavigateButton onClick={onNext} disabled={disableNext}>
      Next
    </NavigateButton>
  </NavigateButtonContainer>
);

export default NavigateButtons;
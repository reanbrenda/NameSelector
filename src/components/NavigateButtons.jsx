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

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const NavigateButtons = ({ onPrev, onNext, disablePrev, disableNext }) => (
  <NavigateButtonContainer>
    <NavigateButton onClick={onPrev} disabled={disablePrev}>
      Pre
    </NavigateButton>
    <NavigateButton onClick={onNext} disabled={disableNext}>
      Next
    </NavigateButton>
  </NavigateButtonContainer>
);

export default NavigateButtons;

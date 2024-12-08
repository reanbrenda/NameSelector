import React, { useState } from 'react';
import styled from 'styled-components';
import NameCard from './components/NameCard';
import NameList from './components/NameList';
import NavigateButtons from './components/NavigateButtons';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px; 
  box-sizing: border-box;
  text-align: center; 
`;


const namelist = [
  "Sophia", "Jackson", "Olivia", "Liam", "Emma",
  "Noah", "Ava", "Lucas", "Isabella", "Oliver",
  "Mia", "Ethan", "Amelia", "Aiden", "Harper",
  "Elijah", "Evelyn", "James", "Charlotte", "Benjamin",
  "Abigail", "William", "Emily", "Alexander", "Madison",
  "Michael", "Elizabeth", "Mason", "Sofia", "Logan",
  "Avery", "Matthew", "Ella", "Daniel", "Scarlett",
  "Henry", "Grace", "Joseph", "Lily", "Samuel",
  "Chloe", "David", "Victoria", "Carter", "Riley",
  "Wyatt", "Aria", "Jayden", "Zoey", "Gabriel",
];

const App = () => {
  const [names, setNames] = useState(namelist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNames, setSelectedNames] = useState([]);
  const [maybeNames, setMaybeNames] = useState([]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, names.length - 1));
  };

  const handleYes = () => {
    const currentName = names[currentIndex];
    setSelectedNames((prev) => [...prev, currentName]);
    handleRemoveCurrent();
  };

  const handleMaybe = () => {
    const currentName = names[currentIndex];
    setMaybeNames((prev) => [...prev, currentName]);
    handleRemoveCurrent();
  };

  const handleNo = () => {
    handleRemoveCurrent();
  };

  const handleRemoveCurrent = () => {
    const updatedNames = names.filter((_, i) => i !== currentIndex);

    if (updatedNames.length === 0) {
      setNames([]);
      setCurrentIndex(0);
    } else {
      setNames(updatedNames);
      setCurrentIndex((prev) => Math.min(prev, updatedNames.length - 1));
    }
  };

  return (
    <AppContainer>
      {names.length > 0 ? (
        <>
          <NameCard
            name={names[currentIndex]}
            onYes={handleYes}
            onMaybe={handleMaybe}
            onNo={handleNo}
          />
          <NavigateButtons
            onPrev={handlePrev}
            onNext={handleNext}
            disablePrev={currentIndex === 0}
            disableNext={currentIndex === names.length - 1}
          />
        </>
      ) : (
        <div>No more names to select!</div>
      )}
      <NameList title="Selected Names" items={selectedNames} />
    </AppContainer>
  );
};

export default App;

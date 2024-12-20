import React, { useState } from 'react';
import styled from 'styled-components';
import { backgroundGradient } from './animation';
import NameCard from './components/NameCard';
import NameList from './components/NameList';
import NavigateButtons from './components/NavigateButtons';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: Arial, sans-serif;
  background-image: url('https://cdn.pixabay.com/photo/2020/06/20/19/15/the-blue-flower-5322087_1280.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center
  animation: ${backgroundGradient} 15s ease infinite;
  padding: 20px; 
  box-sizing: border-box;
  text-align: center;
  min-height: 100vh;
`;

const EmptyState = styled.div`
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
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
  "Whiskers", "Mittens", "Shadow", "Simba", "Luna",
  "Oliver", "Leo", "Chloe", "Bella", "Lucy",
  "Max", "Milo", "Tiger", "Cleo", "Smokey",
  "Daisy", "Ginger", "Oreo", "Toby", "Pumpkin",
  "Nala", "Loki", "Mochi", "Pepper", "Sassy",
  "Snowball", "Buddy", "Garfield", "Patches", "Tigger",
  "Maggie", "Sushi", "Midnight", "Cinnamon", "Marble",
  "Hazel", "Penny", "Jasper", "Oscar", "Ash",
  "Coco", "Kitty", "Pixie", "Sylvester", "Boots",
  "Sunny", "Socks", "Prince", "Princess", "Zoe"
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
    setCurrentIndex((prev) => (prev + 1) % names.length);
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
        <EmptyState>No more names to select!</EmptyState>
      )}
      <NameList title="Selected Names" items={selectedNames} />
    </AppContainer>
  );
};

export default App;
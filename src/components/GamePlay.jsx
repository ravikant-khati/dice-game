import styled from "styled-components";
import TotalScore from "./TotalScore";
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("you have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === currentDice) {
      setScore((prev) => prev + currentDice);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber();
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice roleDice={roleDice} currentDice="3" />
      <div className="btns">
        <OutlineButton onClick={resetScore}>reset score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {!showRules ? "show" : "hide"} rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;

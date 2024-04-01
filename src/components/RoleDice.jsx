import styled from "styled-components";
const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/public/dice_1.png`} alt="n" />
      </div>
      <p>click on dice to role</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

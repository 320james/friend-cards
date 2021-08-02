import styled from 'styled-components';
import background from './Images/background.jpg';
import JoeCard from './Components/JoeCard';
import BrianCard from './Components/BrianCard';
import JoshCard from './Components/JoshCard';
import WillCard from './Components/WillCard';
import AlexCard from './Components/AlexCard';
import NoahCard from './Components/NoahCard';
import KyleCard from './Components/KyleCard';
import ThomasCard from './Components/ThomasCard';


function App() {
  return (
    <AppStyled>
      <JoeCard />
      <BrianCard />
      <JoshCard />
      <WillCard />
      <AlexCard />
      <NoahCard />
      <KyleCard />
      <ThomasCard />
    </AppStyled>
  );
}

const AppStyled = styled.div`

  // Background
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  // Display
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export default App;

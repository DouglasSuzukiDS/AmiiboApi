import * as Style from './App.styles'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Test } from './components/test';
import MagnifyingGlass from './assets/icons/MagnifyingGlass';
import Linkedin from './assets/icons/Linkedin';
import GithubSquare from './assets/icons/GithubSquare';
import ControllLeft from './assets/icons/ControllLeft';
import ControllRight from './assets/icons/ControllRight';
import { Amiibo } from './components/Amiibo/Amiibo';


function App() {
  return (
    <Style.FullScreen>
      <Style.Container>
        <Header />

        <Amiibo />

        <Main />

        <Footer />
      </Style.Container>
    </Style.FullScreen>
  );
}

export default App;

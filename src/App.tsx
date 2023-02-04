import * as Style from './App.styles'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';

function App() {
  return (
    <Style.FullScreen>
      <Style.Container>
        <Header />

        <Main />

        <Footer />
      </Style.Container>
    </Style.FullScreen>
  );
}

export default App;

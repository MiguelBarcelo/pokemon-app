//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// Components
import NavBar from './components/NavBar'
import AppContainer from './components/AppContainer';
// Styles
import CssBaseline from '@mui/material/CssBaseline';
// Global State
import PokemonProvider from './Context/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <CssBaseline />
      <NavBar />
      <AppContainer />
    </PokemonProvider>
  )
}

export default App

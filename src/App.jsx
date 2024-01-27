//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// Components
import Search from './components/Search'
import Pokemon from './components/Pokemon'
import NavBar from './components/NavBar'
// Styles
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <div style={{marginTop: '30px'}}>
        <Container maxWidth="sm">
          <Search />
          <Pokemon />
        </Container>
      </div>
    </>
  )
}

export default App

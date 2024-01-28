// Components
import Search from './Search'
import PokemonContainer from './PokemonContainer'
// Styles
import Container from '@mui/material/Container';

export default function AppContainer() {
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Search />
      <PokemonContainer />
    </Container>
  )
}

// Context
import usePokemonContext from '../hooks/usePokemonContext';
// Components
import PokemonCard from './PokemonCard';
import NotFound from './NotFound';
import Loading from './Loading';
// MUI
import { Box } from '@mui/material';

export default function PokemonContainer() {

  const { state: { pokemon, loading, error } } = usePokemonContext();

  const renderContent = () => {
    if (!pokemon) {
      return;
    }

    if (loading) {
      return <Loading />
    }

    if (error) {
      return (
        <Box sx={{ mt: 2 }}>
          <NotFound message={error} />
        </Box>
      )
    }

    return <PokemonCard pokemon={pokemon} />
  }

  return renderContent()
}

import { useForm } from 'react-hook-form';
// Context
import { TypeActions } from '../Context/reducer';
import usePokemonContext from '../hooks/usePokemonContext';
// Api
import { getPokemon, getColor } from '../api/pokemon';
// MUI Components
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Search() {

  const { dispatch } = usePokemonContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async ({ search }) => {
    try {
      dispatch({ type: TypeActions.SEARCH_REQUEST });

      const { error: pokemonError, data: pokemonData } = await getPokemon(search);

      if (pokemonError) {
        throw new Error(pokemonError);
      }

      const { error: pokemonColorError, data: pokemonColorData } = await getColor(pokemonData?.species?.url);

      if (pokemonColorError) {
        throw new Error(pokemonError);
      }

      const payload = {
        ...pokemonData,
        color: pokemonColorData?.color?.name
      };

      dispatch({ type: TypeActions.SEARCH_SUCCESS, payload });
    } catch (err) {
      dispatch({ type: TypeActions.SEARCH_FAIL, payload: err.message });
    }
  }

  const searchButton = (
    <Button type="submit" variant="contained" >
      Search
    </Button>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={ 2 }>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Pokemon"
              fullWidth
              InputProps={{ endAdornment: searchButton}}
              {...register('search', {
                required: {
                  value: true,
                  message: "Pokemon name is required"
                }
              })}
              helperText={errors?.search?.message}
              error={Boolean(errors?.search)}
            />
          </form>
        </Grid>
      </Grid>
      <form>
      </form>
    </Box>
  )
}

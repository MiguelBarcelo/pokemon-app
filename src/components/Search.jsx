import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Search() {

  const searchButton = (
    <Button
      type="button"
      variant="contained"
    >
      Search
    </Button>
  )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            label="Search"
            defaultValue="clefairy"
            fullWidth
            InputProps={{ endAdornment: searchButton}}
          />
        </Grid>
      </Grid>
      <form>
      </form>
    </Box>
  )
}

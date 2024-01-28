import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Chip from '@mui/material/Chip';

export default function PokemonCard({ pokemon }) {

  const descriptions = [
    `Base experience ${pokemon.base_experience}`,
    `Heigth ${pokemon.height}`,
    `Order ${pokemon.order}`,
  ]

  return (
    <Card sx={{ mt: 2 }}>
      <CardMedia
        sx={{ minHeight: 400 }}
        image={pokemon.sprites?.front_default}
        title={pokemon.name}
      />
      <CardContent
        sx={{
          backgroundColor: pokemon?.color ? pokemon.color : "#fff"
        }}
      >
        <Typography gutterBottom variant='h5' component="div" textAlign="center">
          { pokemon.name }
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {descriptions.map((description, idx) => (
            <Chip key={idx} label={description} sx={{m: 1}} />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

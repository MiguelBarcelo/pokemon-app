import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Pokemon({ title, description, image }) {
  return (
    <Card sx={{ mt: 2 }}>
      <CardMedia
        sx={{ minHeight: 400 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component="div">
          { title }
        </Typography>
        <Typography variant='body2' color="text.secondary">
          { description }
        </Typography>
      </CardContent>
    </Card>
  )
}

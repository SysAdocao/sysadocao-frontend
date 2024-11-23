import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

function PetCard({ pet }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pets/${pet.id}`);
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 364, height: 261 }}>
      <CardActionArea sx={{ height: 261 }} onClick={handleClick}>
        <CardMedia
            component="img"
            height="140"
            image={pet.image}
            alt={pet.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Espécie: {pet.species}
          </Typography>
          <Typography noWrap variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
            {pet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PetCard;

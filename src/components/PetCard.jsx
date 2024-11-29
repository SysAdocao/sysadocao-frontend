import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, CardActions } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "@/lib/axios";
import { useAuth } from "@/contexts/AuthContext";

function PetCard({ pet }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { userId, isLogged } = useAuth();
  const navigate = useNavigate();
  const [favoriteId, setFavoriteId] = useState(null);

  useEffect(() => {
    async function checkFavorite() {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await api.get(`/favorites/${userId}/${pet.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.data) return;
        setIsFavorite(true);
        setFavoriteId(response.data.id);
      } catch (error) {
        console.error("Erro ao verificar favorito:", error);
      }
    }
    checkFavorite();
  }, [pet.id, userId, isLogged]);

  const handleFavorite = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      await api.post(
        `/favorites/${userId}/${pet.id}`, 
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsFavorite(true);
      setFavoriteId(response.data.id);
    } catch (error) {
      console.error("Erro ao atualizar favorito:", error);
    }
  };
  
  const handleUnfavorite = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      await api.delete(`/favorites/${favoriteId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsFavorite(false);
      setFavoriteId(null);
    } catch (error) {
      console.error("Erro ao atualizar favorito:", error);
    }
  };

  const handleClick = () => {
    navigate(`/pets/${pet.id}`);
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 364, height: 309 }}>
      <CardActionArea sx={{ height: 261 }} onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={pet.imageUrl}
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
      <CardActions>
        {isFavorite ? (
          <Button onClick={handleUnfavorite} size="small" color="primary">
            Desfavoritar
            <FavoriteIcon color="error" sx={{ ml: 1 }} />
          </Button>
        ) : (
          <Button onClick={handleFavorite} size="small" color="primary">
            Favoritar
            <FavoriteIcon color="action" sx={{ ml: 1 }} />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default PetCard;

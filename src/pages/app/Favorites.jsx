import { Box, Typography, Grid2} from "@mui/material";
import PetCard from "../../components/PetCard";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useAuth } from "../../contexts/AuthContext";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { userId, isLogged } = useAuth();

  const fetchFavorites = async () => {
    const token = localStorage.getItem("jwtToken");

    try {
      const response = await api.get(`/favorites/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(response.data);
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [isLogged]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, padding: 2, height: "100%" }}>
      <div>
        <Typography variant="h3">Favoritos</Typography>
      </div>
      <Grid2 container spacing={4} columns={12}>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <Grid2 key={favorite.id} size={{ xs: 12, sm: 6, md: 4 }} display={"flex"} justifyContent={"center"}>
              <PetCard pet={favorite.pet} />
            </Grid2>
          ))
        ) : (
          <Typography variant="h6">Você não possui favoritos ainda.</Typography>
        )}
      </Grid2>
    </Box>
  );
}

export default Favorites;

import { Box, Grid2, Typography } from "@mui/material"
import PetCard from "../../components/PetCard"
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import PetSearchForm from "../../components/PetSearchForm";


function Pets() {
  const [pets, setPets] = useState([]);

  const fetchPets = (filters = {}) => {
    const token = localStorage.getItem("jwtToken");
    const query = new URLSearchParams(filters).toString(); // Converte os filtros para query string
    api
      .get(`/pets?${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPets(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPets(); // Busca inicial sem filtros
  }, []);

  const handleSearch = (filters) => {
    fetchPets(filters); // Busca com os filtros selecionados
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 2, height: "100%" }}>
      <div>
        <Typography variant="h3">
          Pets
        </Typography>
      </div>
      <Box
        sx={{
          display: { sm: 'flex' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <PetSearchForm onSearch={handleSearch} />
      </Box>
      <Grid2 container spacing={4} columns={12}>
        {pets && pets.map((pet) => (
          <Grid2 key={pet.id} size={{ xs: 12, sm: 6, md: 4 }} display={"flex"} justifyContent={"center"}>
            <PetCard pet={{...pet}} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default Pets;
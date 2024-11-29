import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "@/lib/axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

function PetDetail() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await api.get(`/pets/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPet(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do pet:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  if (loading) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (!pet) {
    return (
      <Container>
        <Typography variant="h5" color="text.secondary" align="center">
          Pet não encontrado.
        </Typography>
      </Container>
    );
  }

  return (
    <Container style={{ padding: "20px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 800,
          margin: "auto",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={pet.imageUrl || "https://via.placeholder.com/300"}
          alt={pet.name}
          sx={{ borderRadius: "8px", marginBottom: "20px" }}
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            {pet.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Espécie:</strong> {pet.species}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Data de Nascimento:</strong>{" "}
            {new Date(pet.birthDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            <strong>Status:</strong>{" "}
            {pet.status === "AVAILABLE" ? "Disponível" : "Adotado"}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            <strong>Descrição:</strong> {pet.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PetDetail;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FormControl, Select, Box, Button, Container, TextField, Typography, Alert, Grid2 } from "@mui/material";
import { InputLabel, MenuItem } from "@mui/material";

function AddPet() {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    birthDate: "",
    description: "",
    status: "AVAILABLE", // Valor padrão
    isVacinated: "false",
    isCastrated: "false",
    size: "MEDIUM",
    imageUrl: ""
    },);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { petRegister } = useAuth();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      await petRegister(
        formData.name,
        formData.species,
        formData.birthDate,
        formData.description,
        formData.status,
        formData.isVacinated,
        formData.isCastrated,
        formData.size,
        formData.imageUrl
      );

      
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Erro ao realizar cadastro. Tente novamente mais tarde."
      );
    }
    setSuccess(true);
  };
  
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        {/* Título */}
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Cadastro de Pets
        </Typography>

        {/* Mensagens de erro e sucesso */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Cadastro realizado com sucesso!
          </Alert>
        )}

        {/* Dados Pessoais */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Dados do Pet
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Especie"
              name="species"
              value={formData.species}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Data de nascimento"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Descrição"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <MenuItem value="AVAILABLE">Disponível</MenuItem>
                <MenuItem value="ADOPTED">Adotado</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="isVacinated-label">Vacinado</InputLabel>
              <Select
                labelId="isVacinated-label"
                name="isVacinated"
                value={formData.isVacinated}
                onChange={handleChange}
                style={{ width: "100%"}}
              >
                <MenuItem value="true">Verdairo</MenuItem>
                <MenuItem value="false">Falso</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={12} sm={6}>
          <FormControl fullWidth required>
              <InputLabel id="isCastrated-label">Castrado</InputLabel>
              <Select
                labelId="isCastrated-label"
                name="isCastrated"
                value={formData.isCastrated}
                onChange={handleChange}
                style={{ width: "100%"}}
              >
                <MenuItem value="true">Verdadeiro</MenuItem>
                <MenuItem value="false">Falso</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="size-label">Tamanho</InputLabel>
              <Select
                labelId="size-label"
                name="size"
                value={formData.size}
                onChange={handleChange}
                style={{ width: "100%"}}
              >
                <MenuItem value="SMALL">Pequeno</MenuItem>
                <MenuItem value="MEDIUM">Médio</MenuItem>
                <MenuItem value="BIG">Grande</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          {/* <Grid2 item xs={12} sm={6}>
            <TextField
              label="Upload de imagem"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2> */}
        </Grid2>

        {/* Botão de cadastro */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Cadastrar
        </Button>
      </Box>
    </Container>
  );
}

export default AddPet;

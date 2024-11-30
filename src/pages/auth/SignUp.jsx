import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Box, Button, Container, TextField, Typography, Alert, Grid2 } from "@mui/material";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER", // Valor padrão
    phone: "",
    address: {
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
      complement: "",
    },
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

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

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    try {
      await register(
        formData.name,
        formData.email,
        formData.password,
        formData.role,
        formData.phone,
        formData.address,
        formData.Adoption,
        formData.Favorite
      );
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Erro ao realizar cadastro. Tente novamente mais tarde."
      );
    }
    setSuccess(true);
    setTimeout(() => navigate("/sign-in"), 2000); // Redireciona após 2 segundos
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
          Cadastro
        </Typography>

        {/* Mensagens de erro e sucesso */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Cadastro realizado com sucesso! Redirecionando...
          </Alert>
        )}

        {/* Dados Pessoais */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Dados Pessoais
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
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Telefone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Senha"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Confirmar Senha"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
        </Grid2>

        {/* Endereço */}
        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Endereço
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <TextField
              label="Rua"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Número"
              name="address.number"
              value={formData.address.number}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Bairro"
              name="address.neighborhood"
              value={formData.address.neighborhood}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Cidade"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="Estado"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              label="CEP"
              name="address.zipCode"
              value={formData.address.zipCode}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              label="Complemento"
              name="address.complement"
              value={formData.address.complement}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>
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

export default SignUp;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/axios";
import { useAuth } from "../../contexts/AuthContext";
import { Box, Button, TextField, Typography, Container, Alert } from "@mui/material"


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api({
        method: "post",
        url: "/login",
        data: { email, password }
      });

      // Chama a função de login do contexto para atualizar o estado global
      await login(response.data.token);

      // Redireciona para a página principal ou dashboard
      navigate("/pets");
    } catch (err) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Erro ao realizar login. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        {/* Título */}
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Login
        </Typography>

        {/* Mensagem de erro */}
        {error && (
          <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
            {error}
          </Alert>
        )}

        {/* Campo de e-mail */}
        <TextField
          id="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />

        {/* Campo de senha */}
        <TextField
          id="password"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />

        {/* Botão de login */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Entrar
        </Button>
      </Box>
    </Container>
  );
}

export default SignIn;

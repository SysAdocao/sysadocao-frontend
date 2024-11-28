import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid2 } from "@mui/material";
import { api } from "../../lib/axios";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
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

  const [isEditing, setIsEditing] = useState(false);
  const { userId } = useAuth();

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setUserData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSaveChanges = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      await api.put(`/users/${userId}`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 2, height: "100%" }}>
      <Typography variant="h3" gutterBottom>
        Perfil do usuário
      </Typography>

      <Grid2 container spacing={2}>
        {/* User Information */}
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Nome"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={userData.email}
            disabled
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Telefone"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
      </Grid2>
      <Typography variant="h5" gutterBottom>
        Endereço
      </Typography>
      <Grid2 container spacing={2}>
        {/* Address Information */}
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Rua"
            name="address.street"
            value={userData.address.street}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Número"
            name="address.number"
            value={userData.address.number}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Bairro"
            name="address.neighborhood"
            value={userData.address.neighborhood}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Cidade"
            name="address.city"
            value={userData.address.city}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Estado"
            name="address.state"
            value={userData.address.state}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="CEP"
            name="address.zipCode"
            value={userData.address.zipCode}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Complemento"
            name="address.complement"
            value={userData.address.complement}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </Grid2>
      </Grid2>

      {/* Actions */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        {isEditing ? (
          <>
            <Button variant="contained" color="primary" onClick={handleSaveChanges}>
              Salvar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={() => setIsEditing(true)}>
            Editar Perfil
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Profile;

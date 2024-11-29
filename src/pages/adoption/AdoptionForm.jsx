// src/pages/adoption/AdoptionForm.jsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, FormControlLabel, Checkbox, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

function AdoptionForm({ isLoggedIn }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data); 
    setSuccessMessage('Adoção realizada com sucesso!');
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {isLoggedIn ? 'Formulario de Adoção (Logado)' : 'Formulario de Adoção'}
      </Typography>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoggedIn ? (
          <>
            <TextField
              label="E-mail"
              {...register('email', { required: 'E-mail é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Senha"
              type="password"
              {...register('password', { required: 'Senha é obrigatória' })}
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </>
        ) : (
          <>
            <TextField
              label="Nome Completo"
              {...register('fullName', { required: 'Nome completo é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
            <TextField
              label="E-mail"
              {...register('email', { required: 'E-mail é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Senha"
              type="password"
              {...register('password', { required: 'Senha é obrigatória' })}
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              label="Confirmar Senha"
              type="password"
              {...register('confirmPassword', {
                validate: value => value === watch('password') || 'As senhas não coincidem'
              })}
              fullWidth
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
            <TextField
              label="Telefone"
              {...register('phone', { required: 'Telefone é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              label="Rua/Avenida"
              {...register('street', { required: 'Rua/Avenida é obrigatória' })}
              fullWidth
              margin="normal"
              error={!!errors.street}
              helperText={errors.street?.message}
            />
            <TextField
              label="Número"
              {...register('number', { required: 'Número é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.number}
              helperText={errors.number?.message}
            />
            <TextField
              label="Bairro"
              {...register('neighborhood', { required: 'Bairro é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.neighborhood}
              helperText={errors.neighborhood?.message}
            />
            <TextField
              label="Cidade"
              {...register('city', { required: 'Cidade é obrigatória' })}
              fullWidth
              margin="normal"
              error={!!errors.city}
              helperText={errors.city?.message}
            />
            <TextField
              label="Estado"
              {...register('state', { required: 'Estado é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.state}
              helperText={errors.state?.message}
            />
            <TextField
              label="CEP"
              {...register('zipCode', { required: 'CEP é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.zipCode}
              helperText={errors.zipCode?.message}
            />
            <TextField
              label="Complemento"
              {...register('complement', { required: false })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Motivo da Adoção"
              {...register('adoptionReason', { required: 'Motivo da adoção é obrigatório' })}
              fullWidth
              margin="normal"
              error={!!errors.adoptionReason}
              helperText={errors.adoptionReason?.message}
            />
            <FormControlLabel
              control={
                <Checkbox
                  {...register('terms', { required: 'Você deve aceitar os termos e condições' })}
                />
              }
              label="Aceito os termos e condições de adoção"
              sx={{ mt: 2 }}
            />
            {errors.terms && (
              <Typography color="error" sx={{ mt: 1 }}>
                {errors.terms.message}
              </Typography>
            )}
          </>
        )}

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Confirmar Adoção
        </Button>
      </form>

      {successMessage && (
        <Typography color="success.main" sx={{ mt: 3 }}>
          {successMessage}
        </Typography>
      )}
    </Box>
  );
}

export default AdoptionForm;
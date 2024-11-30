import { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Box,
} from '@mui/material';

const SIZE_OPTIONS = [
  { value: 'SMALL', label: 'Pequeno' },
  { value: 'MEDIUM', label: 'Médio' },
  { value: 'BIG', label: 'Grande' },
];
const BOOLEAN_OPTIONS = [
  { value: '', label: 'Todos' },
  { value: "true", label: 'Sim' },
  { value: "false", label: 'Não' },
];

const PetSearchForm = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    name: "",
    species: "",
    size: "",
    isVacinated: "",
    isCastrated: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters); // Chama a função passada via prop com os filtros
  };

  const handleClear = () => {
    setFilters({
      name: "",
      species: "",
      size: "",
      isVacinated: "",
      isCastrated: "",
    });
    onSearch({}); // Reseta os filtros no componente pai
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "row", gap: 2, paddingY: 1 }}
    >
      <TextField
        label="Nome"
        name="name"
        value={filters.name}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Espécie"
        name="species"
        value={filters.species}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
      <FormControl fullWidth>
        <InputLabel id="size-label">Tamanho</InputLabel>
        <Select
          labelId="size-label"
          label="Tamanho"
          name="size"
          value={filters.size}
          onChange={handleInputChange}
        >
          <MenuItem value="">Todos</MenuItem>
          {SIZE_OPTIONS.map((size) => (
            <MenuItem key={size.value} value={size.value}>
              {size.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="isVacinated-label">Vacinado</InputLabel>
        <Select
          labelId="isVacinated-label"
          label="Vacinado"
          name="isVacinated"
          value={filters.isVacinated}
          onChange={handleInputChange}
        >
          {BOOLEAN_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="isCastrated-label">Castrado</InputLabel>
        <Select
          labelId="isCastrated-label"
          label="Castrado"
          name="isCastrated"
          value={filters.isCastrated}
          onChange={handleInputChange}
        >
          {BOOLEAN_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Buscar
        </Button>
        <Button type="button" variant="outlined" color="secondary" onClick={handleClear}>
          Limpar
        </Button>
      </Box>
    </Box>
  );
};

export default PetSearchForm;

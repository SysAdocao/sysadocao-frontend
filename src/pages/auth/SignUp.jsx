import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const { password, confirmPassword, ...data } = formData;

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users", data);
      setSuccess(true);
      setTimeout(() => navigate("/sign-in"), 2000); // Redireciona após 2 segundos
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao realizar cadastro. Tente novamente mais tarde.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", width: "100%" }}>
        <h1>Cadastro</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>Cadastro realizado com sucesso! Redirecionando...</p>}

        {/* Dados Pessoais */}
        <div style={{ marginBottom: "20px" }}>
          <label>Nome:</label>
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>E-mail:</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Telefone:</label>
          <input name="phone" type="text" value={formData.phone} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Senha:</label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Confirmar Senha:</label>
          <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
        </div>

        {/* Endereço */}
        <h3>Endereço</h3>
        <div style={{ marginBottom: "20px" }}>
          <label>Rua:</label>
          <input name="address.street" type="text" value={formData.address.street} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Número:</label>
          <input name="address.number" type="text" value={formData.address.number} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Bairro:</label>
          <input name="address.neighborhood" type="text" value={formData.address.neighborhood} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Cidade:</label>
          <input name="address.city" type="text" value={formData.address.city} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Estado:</label>
          <input name="address.state" type="text" value={formData.address.state} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>CEP:</label>
          <input name="address.zipCode" type="text" value={formData.address.zipCode} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Complemento:</label>
          <input name="address.complement" type="text" value={formData.address.complement} onChange={handleChange} />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default SignUp;

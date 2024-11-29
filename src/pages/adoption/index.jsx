import React from 'react';
import AdoptionForm from './AdoptionForm'; 

function AdoptionPage() {
  const isLoggedIn = Boolean(localStorage.getItem("jwtToken"));

  return (
    <div>
      <h1>Página de Adoção</h1>
      <AdoptionForm isLoggedIn={isLoggedIn} /> {}
    </div>
  );
}

export default AdoptionPage;
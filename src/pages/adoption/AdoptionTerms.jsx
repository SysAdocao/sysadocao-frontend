import { Box, Typography } from '@mui/material';

function AdoptionTerms() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Termos e Condições de Adoção
      </Typography>
      <Typography variant="body1" paragraph>
        Este documento estabelece os termos e condições para a adoção de animais. Ao aceitar este termo, você concorda com as seguintes disposições:
      </Typography>
      <Typography variant="body1" paragraph>
        1. **Responsabilidade do Adotante**: Você se compromete a fornecer cuidados adequados ao animal, incluindo alimentação, água, abrigo e assistência veterinária quando necessário.
      </Typography>
      <Typography variant="body1" paragraph>
        2. **Compromisso de Bem-Estar**: O adotante compromete-se a tratar o animal com respeito e amor, garantindo seu bem-estar físico e emocional.
      </Typography>
      <Typography variant="body1" paragraph>
        3. **Proibição de Venda ou Abandono**: O animal adotado não poderá ser vendido, doado ou abandonado em qualquer circunstância. Se você não puder mais cuidar do animal, deve entrar em contato com a instituição de adoção para tomar as devidas providências.
      </Typography>
      <Typography variant="body1" paragraph>
        4. **Direito de Fiscalização**: A instituição de adoção reserva-se o direito de realizar visitas periódicas para garantir que as condições de adoção estão sendo atendidas.
      </Typography>
      <Typography variant="body1" paragraph>
        Ao clicar em "Aceito os termos e condições de adoção", você confirma que leu, compreendeu e concorda com todas as cláusulas deste termo.
      </Typography>
    </Box>
  );
}

export default AdoptionTerms;
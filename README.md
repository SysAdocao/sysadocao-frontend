# SysAdoção

## Descrição

**SysAdoção** é uma aplicação web desenvolvida para modernizar e organizar o processo de adoção em um abrigo de animais. A plataforma permite ao abrigo cadastrar pets disponíveis para adoção, registrar adotantes e acompanhar todo o processo de adoção, tornando o fluxo mais rápido, eficiente e acessível.

## Contexto

Atualmente, o abrigo controla manualmente todas as informações dos pets e adotantes, o que resulta em atrasos e falta de organização. Com o **SysAdoção**, o abrigo poderá gerenciar informações de forma digital, facilitando o cadastro de pets e a conexão com possíveis adotantes.

## Objetivo

- Permitir o cadastro e visualização de pets disponíveis para adoção.
- Facilitar o registro e gerenciamento de adotantes.
- Acompanhar o processo de adoção de forma eficiente.

## Funcionalidades  
- **Listagem de pets disponíveis para adoção** com detalhes completos.  
- **Cadastro e gerenciamento de adotantes**.  
- **Busca filtrada** por características dos pets.  
- **Favoritar pets** para fácil acesso posterior.  
- **Acompanhamento do processo de adoção** em tempo real.  

## Tecnologias Utilizadas  
- **React**: Biblioteca JavaScript para construção da interface do usuário.  
- **Material UI**: Biblioteca de componentes React com design moderno e responsivo.  
- **react-router-dom**: Gerenciamento de rotas na aplicação.  
- **react-hook-form**: Gerenciamento eficiente de formulários.  
- **axios**: Cliente HTTP para comunicação com o backend.  
- **zod**: Biblioteca para validação de schemas.  
- **Firebase Storage**: Armazenamento de imagens dos pets.  

## Como Iniciar o Projeto  

### Pré-requisitos  
- Node.js instalado (versão recomendada: 16 ou superior).  
- Gerenciador de pacotes npm instalado.  

### Passos para executar o projeto:  

1. **Clone o repositório**:  
   ```bash  
   git clone https://github.com/SysAdocao/sysadocao-frontend.git
   cd sysadocao-frontend  
   ```  

2. **Instale as dependências**:  
 
   ```bash  
   npm install  
   ```  

3. **Configuração de ambiente**:  
   Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias para a integração com o backend e o Firebase Storage. Exemplo:  
   ```env  
   VITE_API_URL="http://localhost:3000" 
   ```  

4. **Execute o projeto**:  

   ```bash  
   npm run dev  
   ```  
   A aplicação estará disponível em [http://localhost:5173/](http://localhost:5173/).  

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
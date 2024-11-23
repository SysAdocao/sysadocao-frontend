import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { Box, Container, CssBaseline } from '@mui/material'

function AppLayout() {
  return (
    <Box component="section" sx={{ display: "flex" }}>
      <Header />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
          <Outlet />
      </Container>
    </Box>
  )
}

export default AppLayout
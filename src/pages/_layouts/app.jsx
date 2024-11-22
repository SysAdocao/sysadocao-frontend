import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { Box, Container } from '@mui/material'

function AppLayout() {
  return (
    <Box component="section" sx={{ display: "flex" }}>
      <Header />
      <Container>
          <Outlet />
      </Container>
    </Box>
  )
}

export default AppLayout
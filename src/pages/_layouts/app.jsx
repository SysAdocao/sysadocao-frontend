import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <h1>App Layout</h1>
      <div>
          <Outlet />
      </div>
    </>
  )
}

export default AppLayout
import { Outlet } from 'react-router-dom'

function RegisterLayout() {
  return (
    <>
      <h1>Register Layout</h1>
      <div>
          <Outlet />
      </div>
    </>
  )
}

export default RegisterLayout
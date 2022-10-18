import Sidebar from "./Sidebar"

const Layout = ({ children }: React.PropsWithChildren ) => {
  return (
    <div className="mx-auto min-h-screen grid grid-cols-[250px_1fr]">
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
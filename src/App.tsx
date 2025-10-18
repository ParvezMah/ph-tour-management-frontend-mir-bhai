import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import { generatesRoutes } from "./utils/generateRoutes";
import { adminSidebarItems } from "./routes/adminSidebarItems";

function App() {

  console.log(generatesRoutes(adminSidebarItems))

  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;

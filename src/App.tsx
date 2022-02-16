import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components";
import OctomizePage from "./pages/Octomize";
import { API_PREFIX } from "@/constant";
import { ROUTES } from "./routes";

console.log(API_PREFIX);

const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.OCTOMIZE} />} />
        <Route path={ROUTES.OCTOMIZE} element={<OctomizePage />} />
      </Routes>
    </Layout>
  );
};

export default App;

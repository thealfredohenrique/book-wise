import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app.page";
import Layout from "@/components/Layout";

const Home: NextPageWithLayout = () => {
  return <h1>Home</h1>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

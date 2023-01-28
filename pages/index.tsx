import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold">Welcome</h1>
      <Footer />
    </>
  );
};

export default Home;

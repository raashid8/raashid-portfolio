import Head from "next/head";
import React from "react";
import router from "next/router";

const Main = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      this is the main home page

      <button onClick={()=>{router.push("/home/blog");}}>BLOGS</button>
    </>
  );
};

export default Main;

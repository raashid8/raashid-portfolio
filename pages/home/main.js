import Head from "next/head";
import React from "react";
import router from "next/router";

const Main = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>sd
      </Head>
      this is the main home page  ee e  ee e e

      <button onClick={()=>{router.push("/home/blog");}}>BLOGS</button>
    </>
  );
};

export default Main;

import Head from "next/head";
import React from "react";

const Main = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      This is the main page
      {/* <button onClick={()=>{router.push("/home/blog");}}>BLOGS</button> */}
    </>
  );
};

export default Main;

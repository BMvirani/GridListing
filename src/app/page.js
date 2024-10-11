"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";

const Home = () => {
  const[loader,setLoader] = useState(true);

  // set initial loader 
  useEffect(()=>{
    setLoader(false);
  },[])

  return (
    <>
      {!loader && <div className="common-space">
        <UserList />
      </div>}
      </>
  );
};

export default Home;

import Image from "next/image";
import React from "react";
import logo from "../app/assets/04.jpg";
import { Avatar, Grid, Item } from "@mui/material";
import HomeCard from "@/utils/HomeCard/HomeCard";
const page = () => {
  return (
    <div className="grid grid-cols-3 gap-4 text-center justify-center">
      <div className="col-span-2 row-span-4">
        <HomeCard></HomeCard>
      </div>
      <div>
        {" "}
        <h2>as</h2>
      </div>
      <div>
        {" "}
        <h2>as</h2>
      </div>
      <div className="col-span-2">
        {" "}
        <h2>as</h2>
      </div>
    </div>
  );
};

export default page;

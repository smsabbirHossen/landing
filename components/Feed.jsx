"use client";
import React, { useState } from "react";
import Reval from "./Reval";

const Feed = () => {
  const [searchValue, setsearchValue] = useState("");
  const handleSearch = (e) => {};
  return (
    <Reval>
      <section className="feed ">
        <form action="" className="relative w-full flex-center">
          <input
            type="text "
            placeholder="Search for a tag or a username"
            value={searchValue}
            onChange={handleSearch}
            required
            className="search_input peer"
          />
        </form>
      </section>
    </Reval>
  );
};

export default Feed;

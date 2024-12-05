"use client";
import { useState, useEffect } from "react";

// cms
import { client } from "@/libs/client";

// types
import { Work } from "@/types/works";

function useGetAllWorks() {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    // データ取得
    client
      .get({ endpoint: "works" })
      .then((data) => setWorks(data.contents))
      .catch((error) => console.error("Error fetching GetAllWorks: ", error));
  }, []);

  return works;
}

export default useGetAllWorks;

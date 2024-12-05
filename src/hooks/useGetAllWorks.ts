"use client";
import { useState, useEffect } from "react";

// types
import { Work } from "@/types/works";

function useGetAllWorks() {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    fetch("/api/works")
      .then((res) => res.json())
      .then((data) => setWorks(data))
      .catch((error) => console.error("Error fetching works:", error));
  }, []);

  return works;
}

export default useGetAllWorks;

"use client";

import { useState, useEffect } from "react";

// type
import { Work } from "@/types/works";

export function useGetWorkById(id: string | undefined) {
  const [work, setWork] = useState<Work | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/works/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch work");
        return res.json();
      })
      .then((data) => setWork(data))
      .catch((err) => {
        console.error("Error fetching work:", err);
        setError(err.message);
      });
  }, [id]);

  return { work, error };
}

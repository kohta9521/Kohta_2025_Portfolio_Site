"use client";

import { useGetWorkById } from "@/hooks/useGetWorkById";

import { useParams } from "next/navigation";

import Image from "next/image";

const WorkDetailPage = () => {
  const { id } = useParams();
  const workId = Array.isArray(id) ? id[0] : id;
  const { work, error } = useGetWorkById(workId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!work) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Image src={work.top_image.url} width={1280} height={700} alt="image" />
      <h1>{work.title}</h1>
      <p>{work.genre}</p>
      <div dangerouslySetInnerHTML={{ __html: work.content }} />
    </div>
  );
};

export default WorkDetailPage;

"use client";
import React from "react";

// next
import { useParams } from "next/navigation";

// hooks
import { useGetWorkById } from "@/hooks/useGetWorkById";

// components
import CaseTemp from "@/components/template/CaseTemp";
import ScrollTopButton from "@/components/atoms/ScrollTopButton";

const WorksDetail = () => {
  const { id } = useParams();
  const workId = Array.isArray(id) ? id[0] : id;
  const { work, error } = useGetWorkById(workId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!work) {
    return <p>Loading ...</p>;
  }

  return (
    <CaseTemp
      id={work.id}
      link={`/works/${work.id}`}
      image={work.top_image.url}
      category={work.category.name}
      date={work.createdAt}
      title={work.title}
    >
      <div
        className="w-full prose mb-32 lg:prose-lg max-w-none sm:mb-40"
        dangerouslySetInnerHTML={{ __html: work.content }}
      />

      <ScrollTopButton />
    </CaseTemp>
  );
};

export default WorksDetail;

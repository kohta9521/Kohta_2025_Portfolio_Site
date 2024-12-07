"use client";

// next
import { useParams } from "next/navigation";

// hooks
import { useGetWorkById } from "@/hooks/useGetWorkById";

// components
import WorkTemp from "@/components/template/WorkTemp";
import LoadingScreen from "@/components/template/LoadingScreen";

const WorkDetailPage = () => {
  const { id } = useParams();
  const workId = Array.isArray(id) ? id[0] : id;
  const { work, error } = useGetWorkById(workId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!work) {
    return <LoadingScreen />;
  }

  return (
    <>
      <WorkTemp
        id={work.id}
        client={work.client}
        title={work.title}
        desc={work.short_desc}
        link={work.site_link}
        img={work.top_image.url}
      >
        <div dangerouslySetInnerHTML={{ __html: work.content }} />
      </WorkTemp>
    </>
  );
};

export default WorkDetailPage;

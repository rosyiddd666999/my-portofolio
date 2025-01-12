"use client";

import projects from "@/data/projects";
import { useParams, useRouter } from "next/navigation";

export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const projectId = Array.isArray(params.projectId)
    ? params.projectId[0]
    : params.projectId;
  const id = parseInt(projectId || "0", 10);
  const project = projects.find((cert) => cert.id === id);

  if (!project) {
    return (
      <div className="container h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="h-full relative">
      <div className="container !max-w-full py-24 md:py-28 lg:py-32 xl:py-36 flex flex-col items-start justify-starts">
        <div className="fixed h-20 top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10"></div>
        <button
          className="fixed top-8 lg:top-12 xl:top-14 left-6 md:left-8 lg:left-16 xl:left-32 flex items-center justify-center z-10"
          onClick={() => router.push("/#projects")}
        >
          <svg
            width="9"
            height="18"
            viewBox="0 0 9 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 17.67C7.81 17.67 7.62 17.6 7.47 17.45L0.949999 10.93C-0.110001 9.87002 -0.110001 8.13002 0.949999 7.07002L7.47 0.55002C7.76 0.26002 8.24 0.26002 8.53 0.55002C8.82 0.84002 8.82 1.32002 8.53 1.61002L2.01 8.13002C1.53 8.61002 1.53 9.39002 2.01 9.87002L8.53 16.39C8.82 16.68 8.82 17.16 8.53 17.45C8.38 17.59 8.19 17.67 8 17.67Z"
              fill="#1C1917"
            />
          </svg>
        </button>
        <h1 className="fixed top-6 lg:top-10  xl:top-12 left-1/2 transform -translate-x-1/2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold z-10">
          Project Detail
        </h1>
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <img
              src={project.imageDetail1.src}
              alt={project.name}
              className="object-cover w-full h-full"
            />
            <img
              src={project.imageDetail2.src}
              alt={project.name}
              className="object-cover w-full h-full"
            />
          </div>
          <img
            src={project.imageDetail3.src}
            alt={project.name}
            className="lg:col-span-2 object-cover w-full h-full"
          />
        </div>
        {project.framework && (
          <div className="text-base md:text-lg lg:text-xl xl:text-2xl text-left mt-10 flex flex-col gap-4">
            <div>
              <div className="font-bold">FrameWork:</div>
              <div>{project.framework}</div>
            </div>
            <div>
              <div className="font-bold">Programming Language:</div>
              <div>{project.language}</div>
            </div>
            <div>
              <div className="font-bold">Devlopment Method:</div>
              <div>{project.method}</div>
            </div>
            <div>
              <div className="font-bold">Description:</div>
              <div>{project.description}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

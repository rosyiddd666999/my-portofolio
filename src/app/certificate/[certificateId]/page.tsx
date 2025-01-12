"use client";

import { useRouter, useParams } from "next/navigation";
import certificates from "@/data/certificate";
import Image from "next/image";

const CertificateDetail = () => {
  const router = useRouter();
  const params = useParams();
  const certificateId = Array.isArray(params.certificateId)
    ? params.certificateId[0]
    : params.certificateId;

  const id = parseInt(certificateId || "0", 10);
  const certificate = certificates.find((cert) => cert.id === id);

  if (!certificate) {
    return (
      <div className="container h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Certificate Not Found</h1>
      </div>
    );
  }

  return (
    <div className="h-full relative">
      <div className="container !max-w-full py-24 md:py-28 lg:py-32 xl:py-36 flex flex-col items-start justify-starts">
        <div className="fixed h-20 top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10"></div>
        <button
          className="fixed top-8 lg:top-12 xl:top-14 left-6 md:left-8 lg:left-16 xl:left-32 flex items-center justify-center z-10"
          onClick={() => router.push("/#certificates")}
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
          Certificate Detail
        </h1>
        <div className="text-left">
          <Image
            src={certificate.image.src}
            alt={certificate.name}
            className="justify-center w-full"
          />
          <Image
            src={certificate.subImage1.src}
            alt={certificate.name}
            className="justify-center mt-4 w-full"
          />
          {certificate.subImage2 && (
            <Image
              src={certificate.subImage2.src}
              alt={certificate.name}
              className="justify-center mt-4 w-full"
            />
          )}

          <p className="text-m md:text-lg lg:text-xl xl:text-2xl mt-4 md:mt-6 lg:mt-8">
            By {certificate.name}, {certificate.role} at {certificate.company}
          </p>
          <div className="text-xl md:text-2xl lg:text-4xl xl:text-6xl mt-4  md:mt-6 lg:mt-8">
            <span>&ldquo;</span>
            {certificate.quote}
            <span>&rdquo;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetail;

// src/components/LoadingSkeleton.jsx
import React from "react";
// Si instalaste “react-loading-skeleton” puedes usarlo; sino, comento esa parte abajo.
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeleton() {
  // Si usaras react-loading-skeleton, podrías hacer:
  // return (
  //   <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  //     {Array.from({ length: 8 }).map((_, i) => (
  //       <div key={i} className="p-4 bg-white rounded-lg shadow">
  //         <Skeleton height={80} width={80} circle={true} />
  //         <Skeleton count={2} />
  //       </div>
  //     ))}
  //   </div>
  // );

  // O bien, sin librerías, un placeholder manual:
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-white p-4 rounded-lg shadow"
        >
          <div className="h-20 w-20 bg-gray-300 rounded-full mb-4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
        </div>
      ))}
    </div>
  );
}

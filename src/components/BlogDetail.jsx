import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogDetail({
  title,
  author,
  headingImageUrl,
  contents,
  handleCloseModal,
}) {
  return (
    <>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
      <div className="modal">
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 p-2 rounded-full w-10 h-10 bg-slate-200 hover:bg-slate-700 hover:text-yellow-500"
        >
          X
        </button>
        <div className="w-full w-full mx-auto ">
          <div className="mb-10 rounded-xl bg-white p-6">
            <h3 className="mb-3 block truncate text-2xl md:text-3xl lg:text-5xl text-dark hover:text-primary font-bold justify-stretch">
              {title}
            </h3>
            <p className="mb-6 text-sm font-medium text-secondary">{author}</p>
            <img
              src={headingImageUrl}
              alt="Blog Header"
              className="w-full h-40 lg:h-72 object-cover"
            />
            <div className="py text-justify">
              {contents.map((content, index) => (
                <div key={index}>
                  {content.contentType === "text" ? (
                    <p className="mt-6 mb-6 text-base font-medium text-slate-600">
                      {content.content}
                    </p>
                  ) : (
                    <img
                      src={content.content}
                      alt="Content"
                      className="lg:w-1/2 w-full lg:mx-auto h-52 lg:h-72 mb-6 px-10 py-3 object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

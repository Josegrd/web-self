export default function ProjectDetail({
  title,
  startDate,
  endDate,
  description,
  headingImageUrl,
  urlProject,
  handleCloseModal,
  stack,
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
            <h3 className="mb-3 block truncate  text-2xl lg:text-5xl text-dark hover:text-primary font-bold justify-stretch">
              {title}
            </h3>
            <p className="mb-6 text-base font-medium text-secondary">
              {startDate} - {endDate}
            </p>
            <div>
              <ul className="mb-6 text-sm truncate font-medium text-slate-400 flex">
                {stack.map((stack, index) => (
                  <li key={index} className="mr-4">
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={headingImageUrl}
              alt="Blog Header"
              className="h-72 object-cover"
            />
            <div className="py text-justify">
              <p className="mt-6 mb-6 text-base font-medium text-slate-600">
                {description}
              </p>
            </div>
            {urlProject && (
              <div>
                <a
                  href={urlProject}
                  target="_blank"
                  className="cursor-pointer rounded-lg bg-primary py-2 text-sm font-medium text-slate-300 hover:opacity-80"
                >
                  See Live Demo
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

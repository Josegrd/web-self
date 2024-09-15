export default function BlogCard({ title, startDate, endDate, stack }) {
  return (
    <>
      <div className="px-4 w-full">
        <div className="mb-10 rounded-xl bg-white shadow-lg">
          <a href="#">
            <div className="py-8 px-6">
              <h3>
                <a
                  href="#"
                  className="mb-3 block truncate text-2xl md:text-3xl lg:text-4xl  font-bold text-dark hover:text-primary"
                >
                  {title}
                </a>
              </h3>
              <p className="mb-6 truncate text-sm text-base font-medium text-slate-800 ">
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
              <a
                href="#"
                className="rounded-lg bg-primary py-2 text-sm font-medium text-slate-300 hover:opacity-80"
              >
                Baca Selengkapnya...
              </a>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

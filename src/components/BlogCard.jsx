import { useNavigate } from "react-router-dom";

export default function BlogCard({ title, author, headingImageUrl }) {
  return (
    <>
      <div className="px-4 w-full blog-card group-hover:[&:not(:hover)]:opacity-30">
        <div className="mb-10 rounded-xl bg-white shadow-lg">
          <a href="#">
            <img
              src={headingImageUrl}
              alt="Programming"
              className="w-full h-72 object-cover"
            />
            <div className="py-8 px-6">
              <h3>
                <a
                  href="#"
                  className="mb-3 block truncate text-2xl lg:text-4xl font-bold text-dark hover:text-primary"
                >
                  {title}
                </a>
              </h3>
              <p className="mb-6 text-base font-medium text-slate-800 ">
                {author}
              </p>
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

import ImageAbout from "../assets/images.jpeg";

export default function About() {
  return (
    <>
      <div className="container pb-56 pt-24">
        <div className="flex flex-wrap">
          <div className="image-profile w-full self-end px-4 lg:w-1/2 md:w-1/2   ">
            <div className="relative mt-19 lg:mt-9 lg:right-0">
              <img
                src={ImageAbout}
                alt="about pict"
                className="mx-auto w-full h-72 lg:w-80 lg:h-96 rounded-e-3xl rounded-s-3xl scale-95 object-cover"
              />
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 lg:mb-16 mt-10 md:text-left md:w-1/2 md:mb-9">
            <h1 className="font-sans lg:text-[30px] text-[20px] md:text-[20px] font-bold">
              <span className="text-slate-500">@</span>EnginePlanner |{" "}
              <span className="text-slate-400 text-[13px] md:text-[16px] lg:text-[25px]">
                From Code to Creation
              </span>
              <span className="block -mt-1">Semarang, Indonesia ⛳</span>
            </h1>
            <p className="font-sans text-slate-400 mt-2 text-[14px] lg:text-[20px]">
              Hey, my name is Jose, and I'm a versatile Developer. I have a
              passion for building robust and scalable applications, always
              focused on delivering a seamless user experience.
              <span className="block mt-3">
                I adapt quickly to new technologies and am always eager to learn
                and grow with different stacks.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

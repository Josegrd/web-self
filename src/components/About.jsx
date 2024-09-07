import ImageAbout from "../assets/WhatsApp Image 2024-09-03 at 21.57.51.jpeg";

export default function About() {
  return (
    <>
      <div className="container pb-48">
        <div className="flex flex-wrap">
          <div className="image-profile w-full  self-end px-4 lg:w-1/2">
            <div className="relative mt-19 lg:mt-9 lg:right-0">
              <img
                src={ImageAbout}
                alt="about pict"
                className="mx-auto  w-80 h-96 rounded-e-3xl rounded-s-3xl scale-95"
              />
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 lg:mb-28">
            <h1 className="font-sans text-[40px] font-bold">
              Fullstack Developer
              <span className="block -mt-3">from Semarang, Indonesia ⛳</span>
            </h1>
            <p className="font-sans text-slate-400 mt-2">
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

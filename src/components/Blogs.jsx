import Blog from "./Blog";

export default function Blogs() {
  return (
    <>
      <div className="container mt-36">
        <div className="font-sans ">
          <h1 className="lg:text-[50px] text-[35px] md:text-[50px] font-bold pb-3 text-center ">
            🖊️ Latest Writings
          </h1>
          <p className="lg:max-w-[650px] max-w-[400px] md:max-w-[550px] text-center mx-auto text-slate-500 text-[14px]">
            I share my process, experiences, tips, and resources related to
            development in my blog to help others on their journey. Besides my
            programming experiences, I also write about my personal interests,
            such as music and travel, offering a mix of technical insights and
            personal passions.
          </p>
        </div>
        <div className="flex flex-wrap pt-24">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </>
  );
}

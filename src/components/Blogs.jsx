import Blog from "./Blog";

export default function Blogs() {
  return (
    <>
      <div className="container lg:h-[600px] mt-36">
        <div className="font-sans ">
          <h1 className="text-[50px] font-bold pb-3 text-center ">
            🖊️ Latest Writings
          </h1>
          <p className="max-w-[650px] text-center mx-auto text-slate-500">
            I share my process, experiences, tips, and resources related to
            development in my blog to help others on their journey. Besides my
            programming experiences, I also write about my personal interests,
            such as music and travel, offering a mix of technical insights and
            personal passions.
          </p>
        </div>
        <div className="flex flex-wrap pt-24 pb-36">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </>
  );
}

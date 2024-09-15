import React, { useState, useEffect } from "react";
import BlogDetail from "./BlogDetail";
import BlogCard from "./BlogCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleBlogs(1);
      } else if (window.innerWidth < 1024) {
        setVisibleBlogs(2);
      } else {
        setVisibleBlogs(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <div id="blog" className="container my-64">
        <div className="font-sans mb-20">
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

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={visibleBlogs}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="my-[30px]"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} onClick={() => handleOpenModal(blog)}>
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                author={blog.author}
                headingImageUrl={blog.headingImageUrl}
                contents={blog.contents}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {selectedBlog && (
          <BlogDetail
            title={selectedBlog.title}
            author={selectedBlog.author}
            headingImageUrl={selectedBlog.headingImageUrl}
            contents={selectedBlog.contents}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}

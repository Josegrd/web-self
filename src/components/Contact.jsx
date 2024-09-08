export default function Contact({ icon, url, username }) {
  return (
    <>
      <div className="flex flex-wrap mb-2">
        <img
          src={icon}
          alt=""
          className=" inline-block mr-3 lg:w-5 lg:h-5 md:w-5 md:h-5 w-3 h-3"
        />
        <a href={url} target="_blank">
          {username}
        </a>
      </div>
    </>
  );
}

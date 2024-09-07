export default function Contact({ icon, url, username }) {
  return (
    <>
      <div className="flex flex-wrap mb-2">
        <img src={icon} alt="" className=" inline-block mr-3 w-5 h-5" />
        <a href={url} target="_blank">
          {username}
        </a>
      </div>
    </>
  );
}

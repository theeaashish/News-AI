import React from "react";

const NewsBox = ({ title, image, url, content }) => {
  return (
    <div className="w-[495px] flex flex-col gap-4 bg-zinc-200 p-4 rounded-2xl">
      <div className="max-w-[495px] max-h-[300px] overflow-hidden rounded-t-3xl">
        <img
          className="w-full min-h-[300px] object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <span className="text-[#5F71F1]">September 23th, 2024</span>

        <h2 className="text-[1.8rem] font-extrabold">
          {title}
        </h2>
        <p className="text-sm">
          {content}
        </p>
      </div>
    </div>
  );
};

export default NewsBox;

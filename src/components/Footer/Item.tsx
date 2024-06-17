import React from "react";

interface LinkItem {
  name: string;
  link: string;
}

interface ItemProps {
  Links: LinkItem[];
  title: string;
}

const Item: React.FC<ItemProps> = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-2 font-bold text-4xl text-center">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;

import React from 'react';
import { Link } from 'react-router-dom';






const InfoComponent = ({ title, informations }) => {
  return (
    <div className="card border-none bg-transparent p-3">
      <h3 className="text-xl font-bold text-color mb-3 m-0">
        {title}
      </h3>
      
      
      <ul className="list-none p-0 m-0 flex flex-column gap-2">
        {informations.map((item, index) => (
          <li key={index} className="flex align-items-center">
            <Link 
              to={item.link} 
              className="text-primary no-underline hover:text-primary transition-colors transition-duration-200 w-full py-1 block"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoComponent;
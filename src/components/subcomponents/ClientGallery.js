import React from "react";
import lakshay from "../../assets/lakshay.png";
import nmurail from "../../assets/nmurail.png";
import sankhakun from "../../assets/sankhakun.png";
import ankit from "../../assets/ankit.png";
import quickbits from "../../assets/quickbits.png";

const ClientGallery = () => {
  const Pics = [
    { id: 1, name: "Lakshay Thakur", path: lakshay },
    { id: 2, name: "N Murali", path: nmurail },
    { id: 3, name: "Sankho Kun", path: sankhakun },
    { id: 4, name: "Ankit Gupta", path: ankit },
    { id: 5, name: "QuickBits", path: quickbits },
  ];
  return (
      <div className="flex flex-wrap md:gap-8 justify-center w-full">
        {Pics.map((item) => ( 
          <div className="flex flex-col items-center justify-center text-2xl">
            <img src={item.path} alt={item.name} className=" h-40 md:h-64"/>
            {item.name}
          </div>
        ))}
      </div>
  );
};

export default ClientGallery;

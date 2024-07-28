import React, { useState, useEffect } from "react";
import Axios from "axios";

const ClientGallery = () => {
  const [clientsData, setClientsData] = useState([]);
  //const [isLoading, setLoading] = useState([]);

  const getClientsData = async () => {
    try {
      const response = await Axios.get(
        `https://api.cloudfixmedia.com/api/clients`
      );
      setClientsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClientsData();
  }, []);

  return (
      <div className="flex flex-wrap md:gap-8 justify-center w-full">
        {clientsData.map((item) => ( 
          <div className="flex flex-col items-center justify-center text-2xl">
            <img src={item.image} alt={item.name} className=" h-40 md:h-64"/>
            {item.name}
          </div>
        ))}
      </div>
  );
};

export default ClientGallery;

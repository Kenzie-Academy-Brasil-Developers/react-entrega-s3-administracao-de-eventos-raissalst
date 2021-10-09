import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const BeerListContext = createContext([]);

export const BeerListProvider = ({ children }) => {
  const [beerList, setBeerList] = useState([]);

  const getBeerList = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => {
        res.data.map((item) => (item.quantity = 0));
        setBeerList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBeerList();
  }, []);

  return (
    <BeerListContext.Provider value={{ beerList, getBeerList }}>
      {children}
    </BeerListContext.Provider>
  );
};

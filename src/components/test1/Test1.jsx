import { useEffect, useState } from "react";
import { getData } from "../../constant/constant";

const Test1 = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getData().then((res) => setAllData(res));
  }, []);

  const title = allData.map((item, index) => {
    let url = item.sellerCollection[0];
    console.log(url ? (url.image ? url.image : "") : "");
    return (
      <li key={index}>
        {item.title}
        <img src={url ? (url.image ? url.image : "") : ""} />
      </li>
    );
  });

  return (
    <div>
      test1
      <ul>{title}</ul>
    </div>
  );
};

export default Test1;

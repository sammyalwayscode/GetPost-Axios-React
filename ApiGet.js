import React from "react";
import axios from "axios";
const ApiGet = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const res = await axios.get("https://olorunda-car.herokuapp.com/api");

    console.log(res.data.data);
    setData(res.data.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((props) => (
        <div key={props._id}>
          {" "}
          <h1>{props.name}</h1>
          <p>{props.type}</p>
          <img src={props.avatar} style={{ height: "100px", width: "100px" }} />
        </div>
      ))}
    </div>
  );
};

export default ApiGet;

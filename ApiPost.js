import React from "react";
import axios from "axios";
const ApiPost = () => {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  const [previewImage, setPreviewImage] = React.useState("");

  const imageUnchage = async (e) => {
    const file = e.target.files[0];
    const blodUrl = URL.createObjectURL(file);
    setAvatar(file);
    setPreviewImage(blodUrl);
  };

  const uploadData = async () => {
    const formdata = new FormData();

    formdata.append("name", name);
    formdata.append("type", type);
    formdata.append("avatar", avatar);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await axios
      .post("https://olorunda-car.herokuapp.com/api", formdata, config)
      .then((data) => {
        console.log("upload successfull", data);
      })
      .catch(() => {
        console.log("an erro occured");
      });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="enter car name"
      />
      <input
        onChange={(e) => {
          setType(e.target.value);
        }}
        placeholder=" enter car type"
      />
      <input onChange={imageUnchage} type="file" />
      <button onClick={uploadData}>Submit</button>
    </div>
  );
};

export default ApiPost;

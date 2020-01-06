import axios from "axios";

const getAllDogsBreed = async () => {
  const res = await axios.get("https://dog.ceo/api/breeds/list/all");
  return res.data.message;
};

const getDogBreed = async name => {
  const res = await axios.get(
    `https://dog.ceo/api/breed/${name}/images/random`
  );
  return res.data.message;
};

const getRandom = async () => {
  const res = await axios.get("https://dog.ceo/api/breeds/image/random");
  return res.data.message;
};

export { getAllDogsBreed, getDogBreed, getRandom };

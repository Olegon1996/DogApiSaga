

const getDogBreed = breed => ({
  type: "GET_DOG_BREED",
  payload: breed
});

const getUserName = name => ({
  type: "GET_NAME_BREED",
  payload: name
})

export { getDogBreed, getUserName };

import pets from "../APIS/pets";
import history from "../history";
import { projectFirestore, projectStorage } from "../firebase/config";
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createAd = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const collectionRef = projectFirestore.collection("ads");
  const description = formValues.description;
  const found = formValues.found;
  const lat = formValues.lat;
  const lng = formValues.lng;
  const url = formValues.fileUpload;
  const contact = formValues.contact;
  await collectionRef.add({
    description,
    found,
    lat,
    lng,
    url,
    userId,
    contact,
  });
  alert("ad was posted");
};
export const fetchAds = () => async (dispatch) => {
  const response = await pets.get("/pets");

  dispatch({ type: "FETCH_ADS", payload: response.data });
};

export const fetchAd = (id) => async (dispatch) => {
  const response = await pets.get(`/pets/${id}`);

  dispatch({ type: "FETCH_AD", payload: response.data });
};

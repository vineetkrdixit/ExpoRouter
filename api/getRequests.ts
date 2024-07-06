import AxiosInstance from "./interseptor";

export const getAllProductData = () => {
  AxiosInstance.get("/products").then((res) => {
    console.log(res, "res from req");
    return res;
  });
};

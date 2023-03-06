// import {useQuery} from "@transtack/react-query";
import {useQuery} from "@tanstack/react-query"
import {instance} from "../Utils/axiosInstance" 

export const useDataFetch = (keys, url, options) =>{
  return  useQuery (keys, () => instance.get(url).then(res => res?.data) , {...options });
};

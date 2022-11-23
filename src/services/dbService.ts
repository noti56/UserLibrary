import axios from "axios";
import { IUser } from "../types/userType";

module DbService {
  const apiUrl = "https://randomuser.me/api";

  export const getUsers = async (): Promise<{ err: boolean; users: IUser[] }> => {
    try {
      const res = await axios.get(apiUrl + "/?results=10");
      if (!res || !res.data || typeof res.data.results != "object")
        return { err: false, users: [] };

      const filteredData: IUser[] = res.data.results?.map((user: any): IUser => {
        const { title, first, last } = user.name;
        const { city, country, street } = user.location;

        return {
          id: user?.login?.uuid,
          name: `${title} ${first} ${last}`,
          location: `${country} ${city} ${street.name} ${street.number}`,
          userImage: user.picture.medium,
          email: user.email,
        };
      });

      return { err: false, users: filteredData };
    } catch (error) {
      return { err: false, users: [] };
    }
  };
}
export default DbService;

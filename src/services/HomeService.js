import { useAxiosServices } from "lib/api";

// how to use home service , import useHomeService and then , write code like this : const { Home } = useHomeService();
const useHomeService = () => {
  const { apiService } = useAxiosServices();

  const Home = {
    firstOrDefault: async (id) => {
      try {
        const response = await apiService.get(`home/${id}`);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    toList: async () => {
      try {
        const response = await apiService.get(`home`);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    add: async (id, formData) => {
      try {
        const response = await apiService.post(`home/${id}`, formData);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    update: async (id, formData) => {
      try {
        const response = await apiService.put(`home/${id}`, formData);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    delete: async (id) => {
      try {
        const response = await apiService.delete(`home/${id}`);
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  };

  return { Home };
};

export default useHomeService;

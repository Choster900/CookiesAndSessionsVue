import { ref } from "vue";
import axios from "axios";

const getUsers = () => {
  const isLoading = ref(false);
  const users = ref([]);
  const currentPage = ref(1);
  const errorMessage = ref();

  const fetchUsers = async (page = 1) => {
    isLoading.value = true;

    try {
      const { data } = await axios.get("https://reqres.in/api/users", {
        params: { page },
      });

      if (data.data.length > 0) {
        users.value = data.data;
        currentPage.value = page;
      } else if (currentPage.value > 0) {
        errorMessage.value = "Error no hay mas paginas";
      }
    } catch (error) {
      errorMessage.value = "Error al cargar usuarios";
    } finally {
      isLoading.value = false;
    }
  };

  // Llamada inicial para obtener los usuarios
  fetchUsers();

  return {
    isLoading,
    users,
    currentPage,
    errorMessage,
    nextPage: () => fetchUsers(currentPage.value + 1),
    previousPage: () => fetchUsers(currentPage.value - 1),
  };
};

export default getUsers;

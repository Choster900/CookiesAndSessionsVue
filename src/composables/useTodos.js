import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
    const store = useStore()
    const currentTab = ref('all')
    return {
        currentTab,
        pending: computed(() => store.getters['pendingTodos']),
        completed: computed(() => store.getters['completedTodos']),
        allTodos: computed(() => store.getters['allTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
        toggleTodo: ( id ) => store.commit("toggleTodo", id),
    }
};
export default useTodos;

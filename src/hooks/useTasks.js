import { ref } from "vue"
import axios from "axios"
import configAxios from "@/config/axios"
import useConfig from "@/config/useConfig"

const useTasks = (props) => {
  configAxios()

  const { API_URL } = useConfig()
  const tasks = ref([])

  const listTasks = async () => {
    try {
      const { data } = await axios.get(API_URL + `/tasks/`)
      tasks.value.length = 0
      data.results.forEach((task) => {
        tasks.value.push(task)
      })
    } catch (e) {
      console.log(e)
    }
  }
  const createTask = async () => {
    console.log("new task")
  }

  const deleteTask = async (task) => {
    console.log("delete task")
  }

  const updateTask = async (task) => {
    console.log("update task")
  }

  return {
    tasks,
    listTasks,
    createTask,
    deleteTask,
    updateTask,
  }
}

export default useTasks

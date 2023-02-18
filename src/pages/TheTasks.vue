<template>
    <v-expansion-panels variant="inset">
        <v-expansion-panel v-for="i in 3" :key="i">
            <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                        <v-col cols="4" class="d-flex justify-start">
                            Task date:
                        </v-col>
                        <v-col cols="8" class="text-grey">
                            <v-fade-transition leave-absolute>
                                <span v-if="expanded" key="0">
                                    Total number of tasks:
                                </span>
                                <span v-else key="1">

                                </span>
                            </v-fade-transition>
                        </v-col>
                    </v-row>
                </template>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
                <v-card class="overflow-auto mx-auto" height="300">
                    <v-card-item>
                        <v-row justify="start">
                            <v-col v-for="task in tasks" :key="task.id" cols="3">
                                <simple-task :task="task"></simple-task>
                            </v-col>
                        </v-row>
                    </v-card-item>
                </v-card>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
import { ref, provide, onMounted, onUpdated } from 'vue'
import SimpleTask from '../components/SimpleTask.vue'
import useTasks from '@/hooks/useTasks';
import configAxios from "@/config/axios"
import useConfig from '@/config/useConfig';

const props = defineProps(["session"])
const { API_URL } = useConfig()
const { tasks, listTasks, createTask, updateTask, deleteTask } = useTasks(props)

configAxios()

const showConfig = (task) => {
    console.log(task)
}


onUpdated(() => listTasks())
onMounted(() => listTasks())

</script>
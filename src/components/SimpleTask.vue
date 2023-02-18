<template>
    <v-card class="mx-auto my-2" max-width="300">
        <v-card-item>
            <v-card-title>{{ task.title }}</v-card-title>

            <v-card-subtitle>
                <span class="me-1">Task Category</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            {{ task.description }}
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Due Time</v-card-title>

        <div class="px-4">
            <v-chip size="x-small" variant="elevated" class="ma-1" color="pink-darken-2">
                {{ new Date(task.created_at).toLocaleTimeString() }}
            </v-chip>
        </div>

        <v-card-actions>
            <v-btn color="deep-purple-lighten-2" variant="text">
                Make it done
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(["task"])
const selection = ref(1)
</script>
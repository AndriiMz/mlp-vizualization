<template>
    <v-stage :config="layout">
        <v-layer>
            <v-line
                v-for="line in lines"
                :config="line"
            />
            <v-circle
                v-for="circle in circles"
                :config="circle"
            />
            <v-text
                v-for="number in numbers"
                :config="number"
            />
        </v-layer>
    </v-stage>
</template>

<script>
    export default {
        props: {
            layout: Object,
            circles: Array,
            lines: Array,
            numbers: Array,
        },
    };
</script>
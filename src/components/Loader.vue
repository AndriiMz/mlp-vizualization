<template>
    <div>
        <v-loading :loader='loaderName'>
            <template slot='loading'>
                <div class="loading-container">
                    <div class="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </template>
            <slot></slot>
        </v-loading>
    </div>
</template>

<script>

    export default {
        name: "Loader",
        props: {
            loaderName: {
                type: String,
                required: true
            }
        }
    };
</script>

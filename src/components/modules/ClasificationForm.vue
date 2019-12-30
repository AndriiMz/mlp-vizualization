<template>
    <b-card no-body class="p-2">
        <b-form>
            <h5><b>Klasyfikacja</b></h5>
            <b>Wejscia ({{ input }})</b>
            <b-row>
                <b-col v-for="(input, k) in dataSet.inputs" sm="1">
                    <b-input v-model="dataSet.inputs[k]"/>
                </b-col>
            </b-row>

            <b>Wektor prawdopodobieństwa</b>
            <b>{{ results.join(', ') }}</b>
            <br/>
            <b-button-group class="mt-2">
                <b-button
                    class="mt-2"
                    variant="success"
                    size="sm"
                    @click="doClas"
                >
                    Test
                </b-button>
            </b-button-group>
        </b-form>
    </b-card>
</template>

<script>
    export default {
        name: "ClasificationForm",
        props: {
            input: {
                type: String
            },
            results: {
                type: Array
            },
            dataSet: {
                type: Object
            }
        },
        methods: {
            doClas() {
                this.$emit('clas', {
                    ...this.dataSet
                });
            }
        }
    };
</script>

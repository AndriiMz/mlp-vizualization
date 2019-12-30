<template>
    <b-card no-body class="p-2">
        <b-form>
            <b>Wejścia ({{ input }})</b>
            <b-row>
                <b-col v-for="(input, k) in dataSet.inputs" sm="1">
                    <b-input v-model="dataSet.inputs[k]"/>
                </b-col>
            </b-row>

            <b>Wyjścia ({{ output }})</b>
            <b-row>
                <b-col v-for="(output, k) in dataSet.outputs" sm="1">
                    <b-input v-model="dataSet.outputs[k]"/>
                </b-col>
            </b-row>
            <span v-if="error.length > 0" class="ErrorTxt"> {{ error }}</span>
            <b-button
                class="mt-2"
                variant="success"
                size="sm"
                @click="addDataSet"
            >
                Dodaj
            </b-button>
        </b-form>
    </b-card>
</template>

<script>
    export default {
        name: "DataSetForm",
        props: {
            input: {
                type: [String, Number]
            },
            output: {
                type: [String, Number]
            },
            dataSet: {
                inputs: [],
                outputs: []
            }
        },
        data() {
            return {
                error: ''
            }
        },
        methods: {
            addDataSet() {
                if (
                    !this.dataSet.inputs.reduce((acc, cv) => acc && !isNaN(parseFloat(cv)), true) ||
                    !this.dataSet.outputs.reduce((acc, cv) => acc && !isNaN(parseFloat(cv)), true)
                ) {
                    this.error = 'Wybrano niepoprawne wartości';
                    return;
                } else {
                    this.error = '';
                }

                this.$emit('add:data:set', {
                    ...this.dataSet
                });
            }
        }
    };
</script>

<template>
    <b-card no-body >
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block size="sm" href="#" v-b-toggle.accordion-4 variant="info">Zbiór danych</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" visible accordion="dataset-acc" role="tabpanel">
            <b-card-body>
                <b-table striped hover :fields="fields" :items="items()"></b-table>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script>
    export default {
        name: "DataHistory",
        props: {
            dataSet: {
                type: Array
            }
        },
        data() {
            return {
                fields: [
                    {
                        key: 'i',
                        label: 'Wejście'
                    },
                    {
                        key: 'o',
                        label: 'Wyjście'
                    }
                ]
            }
        },
        methods: {
            items() {
                return this.dataSet.map((v) => {
                    return {
                        i: v.inputs.join(', '),
                        o: v.outputs.join(', ')
                    }
                });
            }
        }
    };
</script>

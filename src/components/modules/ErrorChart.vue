<template>
    <div>
        <b-button variant="primary" size="sm" v-b-modal.modal-1>Wykres blędu</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
            <v-chart :chartData="chartData()"></v-chart>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "ErrorChart",
        props: {
            errorSet: {
                type: Array
            }
        },
        methods: {
            chartData() {
                let i = 0;

                return {
                    chartType: "lineGraph",
                    title: "Wykres blędu",
                    width: 466,
                    height: 400,
                    metric: ["error"],
                    dim: "key",
                    selector: 'chart',
                    data: this.errorSet.map((v) => {
                            i++;

                            return {
                                key: i,
                                error: parseFloat(v) * 100
                            };
                        })
                };
            }
        }
    };
</script>
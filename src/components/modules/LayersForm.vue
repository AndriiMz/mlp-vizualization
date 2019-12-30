<template>
    <b-card no-body >
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block size="sm" href="#" v-b-toggle.accordion-2 variant="info">Warstwy ukryte</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="layers-acc" role="tabpanel">
            <b-card-body>
                <b-row>
                    <b-col cols="6">
                        <b-form-input size="sm" placeholder="Rozmiar" v-model="size"/>
                    </b-col>
                    <b-col cols="6">
                        <b-form-select
                                size="sm"
                            v-model="type"
                            :options="options"
                        ></b-form-select>
                    </b-col>
                </b-row>
                <span v-if="error.length > 0" class="ErrorTxt"> {{ error }}</span>
                <b-button-group class="mt-2">
                    <b-button
                        size="sm"
                        :disabled="disabled"
                        @click="addLayer"
                    >
                        Dodaj
                    </b-button>
                </b-button-group>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script>
    export default {
        name: "LayersForm",
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                size: null,
                type: null,
                error: '',
                options: [
                    {
                        value: 'smg',
                        text: 'Sigmoid'
                    },
                    {
                        value: 'sfmx',
                        text: 'Softmax'
                    }
                ]
            }
        },
        methods: {
            addLayer() {
                if (
                    parseInt(this.size) <= 0 ||
                    !this.type
                ) {
                    this.error = 'Wybrano niepoprawne wartości';
                    return;
                } else {
                    this.error = '';
                }

                this.$emit('add:layer', {
                    size: this.size,
                    type: this.type
                });
            }
        },
    };
</script>

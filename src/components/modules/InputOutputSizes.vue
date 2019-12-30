<template>
    <b-card no-body >
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block size="sm" href="#" v-b-toggle.accordion-1 variant="info">Rozmiary we/wy</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="io-acc" role="tabpanel">
            <b-card-body>
                <b-row>
                    <b-col cols="6">
                        <b-form-input size="sm" placeholder="We" v-model="input"/>
                    </b-col>
                    <b-col cols="6">
                        <b-form-input size="sm" placeholder="Wy" v-model="output"/>
                    </b-col>
                </b-row>
                <span v-if="error.length > 0" class="ErrorTxt"> {{ error }}</span>
                <b-button-group class="mt-2">
                    <b-button
                        size="sm"
                        :disabled="disabled"
                        @click="addDimensions"
                    >
                        Zapisz
                    </b-button>
                </b-button-group>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script>
    export default {
        name: "InputOutputSizes",
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                input: null,
                output: null,
                error: ''
            }
        },
        methods: {
            addDimensions() {
                if (
                    !(parseInt(this.input) > 0) ||
                    !(parseInt(this.output) > 0)
                ) {
                    this.error = 'Wybrano niepoprawne wartości';
                    return;
                } else {
                    this.error = '';
                }

                this.$emit('add:dim', {
                    input: this.input,
                    output: this.output
                });
            }
        },
    };
</script>

<template>
    <b-card no-body >
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block size="sm" href="#" v-b-toggle.accordion-3 variant="info">
                Współczynnik uczenia
            </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" visible accordion="rate-acc" role="tabpanel">
            <b-card-body>
                <b-form-group class="mb-0">
                    <b-form-input size="sm" v-model="rate"/>
                </b-form-group>

                <span v-if="error.length > 0" class="ErrorTxt"> {{ error }}</span>

                <b-button-group class="mt-2">
                    <b-button
                            size="sm"
                            :disabled="disabled"
                            @click="addRate"
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
        name: "LearningRateForm",
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                rate: null,
                error: '',
            }
        },
        methods: {
            addRate() {
                if (
                    parseInt(this.rate) !== 0
                ) {
                    this.error = 'Wybrano niepoprawne wartości';
                    return;
                } else {
                    this.error = '';
                }

                this.$emit('add:rate', {
                    rate: this.rate
                });
            }
        },
    };
</script>

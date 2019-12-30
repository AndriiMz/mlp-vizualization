<template>
    <div>
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block size="sm" href="#" v-b-toggle.accordion-5 variant="info">
                Przykładowe problemy
            </b-button>
        </b-card-header>
        <b-collapse id="accordion-5" visible accordion="presets-acc" role="tabpanel">
            <b-card no-body class="p-2">
                <b-tabs content-class="mt-2">
                    <b-tab title="Logiczny AND" active>
                        <p class="mt-2">
                            Problem polega na predykacji
                            wartości logicznej bramki AND.
                        </p>
                        <p>
                            Demonstracja polega na zbudowaniu sieci z jedną warstwą
                            ukrytą która zawiera 2 węzły, warstwa wejściowa - 2 węzły oraz 1 węzeł
                            warstwy wyjściowej. Współczynik uczenia równy 0.2.
                        </p>
                        <p>
                            Przykładowy zbiór danych:
                            <br/>
                            <i>We: 1,0 Wy: 0</i>
                            <br>
                            <i>We: 1,1 Wy: 1</i>
                        </p>
                        <b-button
                            variant="success"
                            size="sm"
                            @click="selectLogicAnd"
                        >
                            Demonstracja
                        </b-button>
                    </b-tab>
                    <b-tab title="Detekcja wieku">
                        <p class="mt-2">
                            Problem polega na predykacji
                            wieku osoby o podanych parametrach fiziologicznych:
                            waga mięśni, ostrość wzroku oraz obiętość płuc. Rozpatrywane są
                            trzy grupy wiekowych: młode osoby, osoby wieku średniego oraz
                            osoby starsze.
                        </p>
                        <p>
                            Demonstracja polega na zbudowaniu sieci z jedną warstwą
                            ukrytą która zawiera 4 węzły, warstwa wejściowa - 3 węzły oraz 3 węzły
                            warstwy wyjściowej. Współczynik uczenia równy 0.3.
                        </p>
                        <p>
                            Przykładowy zbiór danych:
                            <br/>
                            <i>We: 0.37, 0.66, 0.8  Wy: 0, 1, 0</i>
                            <br />
                            0.37 - procentowa waga mięśni osoby wieku średniego
                            <br />
                            0.66 - wzrok osoby wieku średniego (z tablicy Snellena)
                            <br />
                            0.8 - obiętość płuc (1.0 oznacza 3500 ml) osoby wieku średniego
                        </p>
                        <b-button
                                variant="success"
                                size="sm"
                                @click="selectAge"
                        >
                            Demonstracja
                        </b-button>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
    export default {
        name: "PresetSelect",
        props: {
        },
        methods: {
            selectLogicAnd() {
                this.$emit('preset:select', {
                    size: {
                        i: 2,
                        o: 1,
                    },
                    layers: [2],
                    rate: 0.2,
                    dataSet: [
                        {
                            i: [1, 1],
                            o: [1]
                        },
                        {
                            i: [0, 1],
                            o: [0]
                        },
                        {
                            i: [1, 0],
                            o: [0]
                        },
                        {
                            i: [0, 0],
                            o: [0]
                        },
                    ]
                });
            },
            selectAge() {
                this.$emit('preset:select', {
                    size: {
                        i: 3,
                        o: 3,
                    },
                    layers: [4],
                    rate: 0.3,
                    dataSet: [
                        {
                            i: [0.37, 0.66, 0.8],
                            o: [0, 1, 0]
                        },
                        {
                            i: [0.33, 0.63, 0.78],
                            o: [0, 1, 0]
                        },
                        {
                            i: [0.21, 0.4, 0.6],
                            o: [0, 0, 1]
                        },
                        {
                            i: [0.35, 0.67, 0.49],
                            o: [0, 1, 0]
                        },
                        {
                            i: [0.30, 0.5, 0.49],
                            o: [0, 0, 1]
                        },
                        {
                            i: [0.41, 0.81, 0.83],
                            o: [1, 0, 0]
                        },
                        {
                            i: [0.37, 0.72, 0.67],
                            o: [1, 0, 0]
                        },
                    ]
                });
            }
        }
    };
</script>

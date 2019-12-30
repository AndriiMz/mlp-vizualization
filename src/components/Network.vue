<template>
    <div>
        <div v-if="isDemo" class="Overlay">
            <h3>Trwa demonstracja....</h3>
        </div>

        <b-row class="mt-2">
            <b-col cols="3">
                <InputOutputSizes
                    v-on:add:dim="addDimensions"
                    :disabled="isStarted"
                />
            </b-col>
            <b-col cols="3">
                <LayersForm
                    v-on:add:layer="addLayer"
                    :disabled="isStarted || !drawStarted"
                />
            </b-col>
            <b-col cols="3">
                <LearningRateForm
                    v-on:add:rate="addRate"
                    :disabled="isStarted"
                />
            </b-col>
            <b-col cols="3">
                <DataHistory
                    :dataSet="storedSet"
                />
            </b-col>
        </b-row>


        <b-row>
            <b-col cols="4">
                <b-button-group class="mt-2">
                    <b-button variant="success"
                              :disabled="isStarted"
                              size="lg"
                              @click="start"
                    >
                        Start!
                    </b-button>
                    <b-button
                            variant="warning"
                            size="lg"
                            @click="next"
                    >
                        Next >
                    </b-button>
                    <b-button variant="danger"
                              size="lg"
                              @click="reset"
                    >
                        Reset
                    </b-button>
                </b-button-group>

                <PresetSelect v-on:preset:select="onSelectPreset" />
            </b-col>

            <b-col cols="8">
                <b-card v-if="layers.length > 0"
                    class="mt-2 p-2"
                    no-body
                >
                    <b-row>
                        <b-col cols="1">
                            <b-badge v-for="(layer, k) in layers" size="lg" variant="success">
                                {{ layer }} | {{ layerFuns[k] }}
                            </b-badge>
                        </b-col>
                    </b-row>
                </b-card>
                <DataSetForm
                    class="mt-3"
                    v-if="isStarted"
                    :input="inputSize"
                    :output="outputSize"
                    :dataSet="dataSet"
                    v-on:add:data:set="addDataSet"
                />

                <b-card no-body class="mt-3 p-2" v-if="isStarted">
                    <b-row>
                        <b-col cols="5">
                            <i>Bląd:</i> <b>{{ mlpError }}</b>
                        </b-col>
                        <b-col cols="5">
                            <ErrorChart :errorSet="errors" />
                        </b-col>
                    </b-row>

                </b-card>

                <ClasificationForm
                    class="mt-3"
                    v-if="isStarted"
                    :input="inputSize"
                    :dataSet="dataSet"
                    :results="clasification"
                    v-on:clas="doClasification"
                />
            </b-col>

        </b-row>
        <Layout v-if="drawStarted"
                :layout="layout"
                :circles="circles"
                :lines="lines"
                :numbers="numbers"
        />

    </div>
</template>

<script>
    import Layout from "Components/Layout";
    import InputOutputSizes from "Components/modules/InputOutputSizes";
    import LayersForm from "Components/modules/LayersForm";
    import LearningRateForm from 'Components/modules/LearningRateForm';
    import DataHistory from 'Components/modules/DataHistory';
    import ErrorChart from 'Components/modules/ErrorChart';
    import DataSetForm from "Components/modules/DataSetForm";
    import ClasificationForm from "Components/modules/ClasificationForm";
    import PresetSelect from "Components/modules/PresetSelect";

    import { calcLayoutElements, calcNubmers } from 'Utils/canvas-layout';

    const MLP = require('mlp-vue');

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    export default {
        name: "Network",
        components: {
            PresetSelect,
            DataSetForm,
            ClasificationForm,
            LayersForm,
            InputOutputSizes,
            LearningRateForm,
            DataHistory,
            ErrorChart,
            Layout
        },
        props: {
        },
        data() {
           return {

               isStarted: false,
               drawStarted: false,

               inputSize: null,
               outputSize: null,

               layers: [],
               layerFuns: [],
               layerCds: [],
               lines: [],
               circles: [],
               numbers: [],
               layout: null,

               mlp: null,
               dataSet: {
                   inputs: [],
                   outputs: [],
               },
               errors: [],
               storedSet: [],
               learningRate: null,
               mlpError: null,
               clasification: [],


               isDemo: false
           }
        },
        methods: {
            addDimensions(dims) {
                this.inputSize = dims.input;
                this.outputSize = dims.output;

                this.calculateCircle();
                this.drawStarted = true;
            },
            addLayer(layer) {
                this.layers.push(parseInt(layer.size));
                this.layerFuns.push(layer.type);

                this.calculateCircle();
            },
            addRate(rate) {
                this.learningRate = parseFloat(rate.rate);
            },
            addDataSet(dataSet) {

                let set = {
                    inputs: [],
                    outputs: []
                };

                for (let i = 0; i < dataSet.inputs.length; i++) {
                    set.inputs.push(parseInt(dataSet.inputs[i]));
                }

                for (let i = 0; i < dataSet.outputs.length; i++) {
                    set.outputs.push(parseInt(dataSet.outputs[i]));
                }

                this.mlp.addToTrainingSet([...set.inputs], [...set.outputs]);
                this.dataSet = {
                    inputs: [],
                    outputs: [],
                };
                this.dataSet.inputs.length = this.inputSize;
                this.dataSet.outputs.length = this.outputSize;
                this.storedSet.push(set);
            },
            doClasification(dataSet) {
                this.clasification = this.mlp.classify(dataSet.inputs.map((v) => {
                    return parseFloat(v);
                }));
            },
            async onSelectPreset(preset) {
                this.isDemo = true;
                this.reset();


                this.addDimensions({
                    input: preset.size.i,
                    output: preset.size.o
                });
                await sleep(1000);

                this.addRate({ rate: preset.rate });
                await sleep(1000);
                for (let i = 0; i < preset.layers.length; i++) {
                    this.addLayer(
                        {
                            size: preset.layers[i],
                            type: 'smg'
                        }
                    );
                    await sleep(1000);
                }

                this.start();
                await sleep(1000);

                for (let i = 0; i < preset.dataSet.length; i++) {
                    this.addDataSet({
                        inputs: [...preset.dataSet[i].i],
                        outputs: [...preset.dataSet[i].o]
                    });
                    await sleep(1000);
                }

                this.next();
                this.isDemo = false;
            },
            start() {
                while (MLP.prototype.layers.length) {
                    MLP.prototype.layers.pop();
                }

                this.mlp = new MLP(
                    parseInt(this.inputSize),
                    parseInt(this.outputSize)
                );

                for(let i = 0; i < this.layers.length; i++) {
                    this.mlp.addHiddenLayer(
                        parseInt(this.layers[i]),
                        this.layerFuns[i]
                    );
                }

                this.mlp.init();

                this.dataSet.inputs.length = this.inputSize;
                this.dataSet.outputs.length = this.outputSize;
                this.isStarted = true;
            },
            next() {
                this.mlpError = this.mlp.train(this.learningRate);
                this.errors.push(this.mlpError);
                this.calculateNumbers(MLP.prototype.layers);
            },
            reset() {
                this.mlp = null;
                this.isStarted = false;
                this.inputSize = null;
                this.outputSize = null;
                this.drawStarted = false;
                this.layers = [];
                this.layerFuns = [];
                this.layerCds = [];
                this.lines = [];
                this.circles = [];
                this.layout = null;
                this.dataSet = {
                    inputs: [],
                    outputs: [],
                };
                this.errors = [];
                this.storedSet = [];
                this.clasification = [];
                this.learningRate = null;
                this.mlpError = null;
            },
            calculateCircle() {
                const calculated = calcLayoutElements(
                    {
                        i: this.inputSize,
                        o: this.outputSize
                    },
                    this.layers
                );

                this.lines = calculated.lines;
                this.layout = calculated.layout;
                this.circles = calculated.circs;
                this.layerCds = calculated.layerCds;
            },
            calculateNumbers(layers) {
                this.numbers = calcNubmers(layers, this.layerCds);
            }
        }
    };
</script>
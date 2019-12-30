import _ from 'lodash';

export const calcLayoutElements = (io, layers) => {
    let circs = [];
    let allLines = [];
    let ouputLayerLines = [];
    let layerCds = [];

    let curLayerCds = [];
    for(let i = 0; i < io.i; i++) {
        let x = 100;
        let y = 100 + 75 * i;

        circs.push({
            x: x,
            y: y,
            radius: 30,
            fill: "red",
            stroke: "black",
            strokeWidth: 3
        });

        curLayerCds.push({
            x: x,
            y: y
        });

        ouputLayerLines.push({
            points: [100, (100+75*i) - 15],
            stroke: 'green',
            strokeWidth: 2,
        });
    }

    console.log(curLayerCds);
    layerCds.push([...curLayerCds]);

    let inputLayerLines = ouputLayerLines;
    ouputLayerLines = [];

    for (let i = 0; i < layers.length; i++) {

        curLayerCds = [];
        for (let j = 0; j < layers[i]; j++) {
            for (let l = 0; l < inputLayerLines.length; l++) {
                let line = {...inputLayerLines[l]};
                line.points = [...inputLayerLines[l].points];
                line.points.push(300 + i * 200);
                line.points.push((100 + 75 * j) - 15);

                allLines.push({...line});
            }

            let x = 300 + i * 200;
            let y = 100 + 75 * j;
            circs.push({
                x: x,
                y: y,
                radius: 30,
                fill: "yellow",
                stroke: "black",
                strokeWidth: 3
            });

            curLayerCds.push({
                x: x,
                y: y
            });

            ouputLayerLines.push({
                points: [300 + i * 200, (100+75*j) - 15],
                stroke: 'green',
                strokeWidth: 2,
            });
        }

        inputLayerLines = ouputLayerLines;
        ouputLayerLines = [];
        layerCds.push([...curLayerCds]);
    }

    curLayerCds = [];
    for(let i = 0; i < io.o; i++) {
        for (let l = 0; l < inputLayerLines.length; l++) {
            let line = {...inputLayerLines[l]};
            line.points = [...inputLayerLines[l].points];
            line.points.push(300 + layers.length * 200);
            line.points.push((100 + 75 * i) - 15);

            allLines.push({...line});
        }

        let x = 300 + layers.length * 200;
        let y = 100 + 75 * i;
        circs.push({
            x: x,
            y: y,
            radius: 30,
            fill: "green",
            stroke: "black",
            strokeWidth: 3
        });

        curLayerCds.push({
            x: x,
            y: y
        });
    }

    layerCds.push([...curLayerCds]);

    let maxLayers = _.max(
        [
            parseInt(io.i),
            parseInt(io.o),
            layers.map((v) => parseInt(v))
        ]
    );


    return {
        lines: allLines,
        circs: circs,
        layerCds: layerCds,
        layout: {
            width: (2 + layers.length) * 200,
            height: maxLayers * 120
        }
    }
};

export const calcNubmers = (mlpLayers, layersCds) => {
    const points = [];

    for (let i = 0; i < mlpLayers.length; i++) {
        for (let j = 0; j < mlpLayers[i].error.length; j++) {
            points.push({
                x: layersCds[i][j].x - 35,
                y: (layersCds[i][j].y - 10),
                fontSize: 10,
                text: 'e: ' + (mlpLayers[i].error[j]),
            });

            points.push({
                x: layersCds[i][j].x - 35,
                y: (layersCds[i][j].y),
                fontSize: 10,
                text: 'i: ' + (mlpLayers[i].input[j]),
            });

            points.push({
                x: layersCds[i][j].x - 35,
                y: (layersCds[i][j].y + 10),
                fontSize: 12,
                text: 'o: ' + (mlpLayers[i].output[j]),
            });
        }
    }

    return points;
};
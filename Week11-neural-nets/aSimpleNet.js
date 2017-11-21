/**
 * Created by andrewbeatty on 21/11/2017.
 */
/*
    This example uses synaptic make sure you install the module before using
 npm install synaptic
  */
var synaptic = require('synaptic'); // this line is not needed in the browser

var network = new synaptic.Architect.Perceptron(4, 5, 1);

//train the network with your known data
var trainer = new synaptic.Trainer(network);
trainer.train([{input: [0,0,1,1], output: [1]},
    {input: [0,0,0,0], output: [0]},
    {input: [1,1,0,0], output: [1]},
    {input: [1,1,1,1], output: [0]},


]);

//activate the network
var output = network.activate([0, 0, 1, 1]) ;
 console.log(output);


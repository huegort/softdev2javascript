/**
 * Created by andrewbeatty on 21/11/2017.
 */
/*
    This example uses synaptic make sure you install the module before using
 npm install synaptic
  */
var synaptic = require('synaptic'); // this line is not needed in the browser

var network = new Architect.Perceptron(4, 5, 1);

//train the network with your known data
var trainer = new Trainer(network);
trainer.train([{input: [3,1,9,4], output [6]}, {input: [9,5,18,3], output: [18]}]);

//activate the network
network.activate([1, 8, 4, 9]) ;


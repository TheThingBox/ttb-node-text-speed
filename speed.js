module.exports = function (RED) {
  "use strict";

  function main(config) {
    RED.nodes.createNode(this, config);
    this.config = config;
    var node = this;
    this.on("input", function(msg) {
      var value = node.config.val;
      if (typeof(value) == "undefined"){
        msg.speed = 3;
      }
      else{
        msg.speed = value;
      }
      node.send(msg);
    });
  }
  RED.nodes.registerType("speed", main);
}

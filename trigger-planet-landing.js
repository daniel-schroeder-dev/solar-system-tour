AFRAME.registerComponent('trigger-planet-landing', {
  schema: {},
  init: function() {
  	this.el.addEventListener('hitstart', e => console.log(e))
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

AFRAME.registerComponent('trigger-planet-landing', {
  schema: {},
  init: function() {
  	this.el.addEventListener('hitstart', e => {
  		window.location.href = 'neptune-surface.html';
  	});
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

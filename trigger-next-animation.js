AFRAME.registerComponent('trigger-next-animation', {
  schema: {},
  init: function() {
  	this.el.addEventListener('animationcomplete', e => {
  		document.querySelector('#neptune-popup').setAttribute('visible', true);
  	});
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

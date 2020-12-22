AFRAME.registerComponent('trigger-popup-animation', {
  schema: {},
  init: function() {
  	this.el.addEventListener('animationcomplete', e => {
  		document.querySelector('#neptune-popup-text').emit('trigger-popup', null, true);
  	});
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

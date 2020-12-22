AFRAME.registerComponent('trigger-planet-landing', {
  schema: {},
  init: function() {
  	this.el.addEventListener('animationcomplete', e => {
  		console.log('completed animation', e.detail.name);
  		if (e.detail.name == 'animation__land-on-neptune') {
  			window.location.href = 'neptune-surface.html';
  		}
  		
  	});
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

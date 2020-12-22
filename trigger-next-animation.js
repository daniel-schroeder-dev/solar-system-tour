AFRAME.registerComponent('trigger-next-animation', {
  schema: {},
  init: function() {
  	this.el.addEventListener('animationcomplete', e => console.log(e));
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

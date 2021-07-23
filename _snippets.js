
// Color cycler using hsl
// Usage: new HSLCycler('some_id');
function HSLCycler(id){
  this.el = document.getElementById(id);
  if(!this.el) throw 'Invalid id given to HSLCycler: ' + id;
  if(this.el.hslCycler) throw 'Element already has HSLCycler: ' + id;
  this.el.hslCycler = this;

  this.run = true;
  this.step = 3;
  this.coldeg = 0;

  this.frame = this.frame.bind(this)
  this.frame();
}
HSLCycler.prototype = Object.create(null);
HSLCycler.prototype.frame = function(){
  this.el.style.backgroundColor = 'hsl(' + this.coldeg + ', 50%, 50%)';
  this.coldeg = (this.coldeg + this.step) % 360;
  if(this.run) requestAnimationFrame(this.frame);
};

// Interesting move function for drawer_fader
function drawerNewMove(){
  this.bgColor = this.newPoint ? '#0002' : '#0006';
  this.newPoint || this.bgCover();
  this.oldMove();
}


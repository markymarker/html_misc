
// 2021-07-23 (or so)
//
// Color cycler using hsl
// Usage: new HSLCycler('some_id');
//
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


// 2021-07-23 (or so)
//
// Interesting move function for drawer_fader
//
function drawerNewMove(){
  this.bgColor = this.newPoint ? '#0002' : '#0006';
  this.newPoint || this.bgCover();
  this.oldMove();
}


// 2021-10-18
//
// Check how shifted bits look in a Uint32Array. The parameter `n` is the
// number of entries/places to try out. Because a Uint32Array is used,
// n-values beyond 32 will demonstrate wraparound.
//
// I don't think this actually reveals what I was interested in testing
// (endianness), but it was fun enough to make a snippet of.
//
function dumpUintShifts(n){
  if(typeof n !== 'number') n = 32;

  // Create array and fill with bitshift
  const a = new Uint32Array(n);
  for(let j = 0; j < n; ++j) a[j] = 1 << j;

  // Dump out zero-padded binary value of each array element
  for(let j = 0; j < n; ++j) console.log(
    [ ...(new Array(n).fill(0)),
      ...Array.from(a[j].toString(2))
    ].slice(-n).join('')
  );
}


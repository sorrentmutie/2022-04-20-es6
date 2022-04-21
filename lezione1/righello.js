var righello = { mm: 150};

Object.defineProperty(righello, 'inch', {
   enumerable: true,
   get: function() {
       return this.mm / 25.4;
   },
   set: function(value) {
       this.mm = value * 25.4;
   }
});

righello.inch = 123;
console.log(righello.mm);
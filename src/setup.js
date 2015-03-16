var viewport = $('<div>');
$('body').append(viewport);


window.__context = {
  glowscript_container: viewport
};

window.scene = canvas();
scene.width = window.innerWidth;
scene.height = window.innerHeight;

function makeVectorOp(str, f) {
  return function(a, b) {
    if (a instanceof vec) {
      return a[str](b);
    }
    else if (b instanceof vec) {
      return b[str](a);
    }
    else {
      return f(a, b);
    }
  }
}

window.add = makeVectorOp('add', function(a, b) { return a + b });
window.sub = makeVectorOp('sub', function(a, b) { return a - b });
window.mul = makeVectorOp('multiply', function(a, b) { return a * b });
window.div = makeVectorOp('divide', function(a, b) { return a / b });

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
      glowscript: {
        files: {
          'glowscript' : 'glowscript'
        }
      },
    },
    concat: {
      all: {
        src: [
          "glowscript/lib/jquery/1.1/jquery.mousewheel.js",
          "glowscript/lib/flot/jquery.flot.min.js",
          "glowscript/lib/flot/jquery.flot.crosshair_GS.js",
          "glowscript/lib/glMatrix.js",
          "glowscript/lib/webgl-utils.js",
          "glowscript/lib/glow/property.js",
          "glowscript/lib/glow/vectors.js",
          "glowscript/lib/glow/mesh.js",
          "glowscript/lib/glow/canvas.js",
          "glowscript/lib/glow/orbital_camera.js",
          "glowscript/lib/glow/autoscale.js",
          "glowscript/lib/glow/WebGLRenderer.js",
          "glowscript/lib/glow/graph.js",
          "glowscript/lib/glow/color.js",
          "glowscript/lib/glow/primitives.js",
          "glowscript/lib/glow/api_misc.js",
          "glowscript/lib/glow/shaders.gen.js"
        ],
        dest: 'dist/glow.js'
      },
      options: {
        separator: ';'
      }
    },
  });

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // "update" does a bowercopy and a concat.
  grunt.registerTask('update', ['bowercopy', 'concat']);

};


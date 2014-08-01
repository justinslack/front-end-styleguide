module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'assets/js/*.js'
          ],
          dest: '_site/assets/js/app.js',
        }
      },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
            'css/style.css' : 'css/_sass/style.scss'
        }
      }
    },
    uglify: {
      build: {
        src: '_site/assets/js/app.js',
        dest: '_site/assets/js/app.min.js'
       }
    },

    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '_site/assets/img/'
        }],
        options: {
            cache: false
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      }
    },
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['concat', 'sass', 'uglify', 'imagemin', 'watch']);
};
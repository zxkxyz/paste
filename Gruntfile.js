module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        files: {
          'public/dist/libs.js': ['public/javascripts/lib/**/*.js', '!public/javascripts/lib/codemirror.min.js'],
          'public/dist/built.js': ['public/javascripts/*.js']
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'public/dist/built.min.js': ['public/dist/built.js'],
          'public/dist/libs.min.js': ['public/dist/libs.js']
        }
      }
    },

    jshint: {
      files: [
        'Gruntfile.js', 'public/javascripts/**/*.js'
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'public/dist/**/*.js',
          'public/javascripts/lib/**/*.js',
        ]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/stylesheets',
          src: 'style.css',
          dest: 'public/dist',
          ext: '.min.css'
        },{
          expand: true,
          cwd: 'public/stylesheets',
          src: 'codemirror.css',
          dest: 'public/dist',
          ext: '.min.css'
        },{
          expand: true,
          cwd: 'public/stylesheets',
          src: 'sweetalert.css',
          dest: 'public/dist',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      scripts: {
        files: [
          'public/**/*.js',
          'Gruntfile.js'
        ],
        tasks: [
          'build',
        ]
      },
      css: {
        files: 'public/stylesheets/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
        stderr: true,
        command: 'git push heroku master'
      },
      github: {
        stderr: true,
        command: 'git push origin master'
      },
      runDev: {
        stderr: true,
        command: 'heroku local'
      },
      npmStart: {
        stderr: true,
        command: 'npm start'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('build', [
    'concat',
    'cssmin',
    'uglify',
    'jshint',
  ]);

  grunt.registerTask('server-prod', ['shell:prodServer']);
  grunt.registerTask('server-github', ['shell:github']);

  grunt.registerTask('start', ['build', 'shell:npmStart'])

  grunt.registerTask('run-dev', ['shell:runDev']);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      grunt.task.run([ 'server-prod' ]);
    } else if(grunt.option('all')) {
      grunt.task.run([ 'server-github', 'server-prod' ]);
    } else {
      grunt.task.run([ 'server-github' ]);
    }
  });

  grunt.registerTask('deploy', function(n) {
    if(grunt.option('prod')) {
      grunt.task.run([ 'build' ])
      grunt.task.run([ 'server-prod' ])
    } else {
      grunt.task.run([ 'build' ]);
      grunt.task.run([ 'run-dev' ]);
    }
    });
};

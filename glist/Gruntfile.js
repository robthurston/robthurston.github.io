module.exports = function(grunt) {

    grunt.initConfig({
        gitadd: {
            task: {
                options: {
                    force: true
                },
                files: {
                    src: ['*']
                }
            }
        },
        gitcommit: {
            your_target: {
                options: {
                    message:"auto push via grunt"
                },
                files: {
                    src: ['*']
                }
            }
        },
        gitpush: {
            your_target: {
                options: {
                    // Target-specific options go here.
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-git');
};
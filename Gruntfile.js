/* eslint-disable no-undef */
module.exports = (grunt) => {
  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'),

    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
      },
      dist: {
        options: {
          bucket: 'btetsydata',
          region: 'us-east-2',
          overwrite: true,
        },
        files: [
          {
            expand: true,
            cwd: './public',
            src: 'bundle.js',
          },
        ],
      },
    },
  });
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask('deploy', 'aws_s3:dist');
};

pipeline {

  agent any
  
  stages {
  
    stage("Build") {
      steps {
        sh 'npm install'
        sh 'npm build'
        sh 'npx --help'
        sh 'npx run tests/login_test.js'
      
      }
    }
  
  
  }







}
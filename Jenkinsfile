pipeline {

  agent any
  
  stages {
  
    stage("Build") {
      steps {
        sh 'npm install -g npm'
        sh 'npm build'
        sh 'npx --help'
        sh 'npx codeceptjs run tests/login_test.js'
      
      }
    }
  
  
  }







}

pipeline {

  agent any
  
  stages {
  
    stage("Build") {
      steps {
        sh 'npm install'
        

        sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash'
        sh 'export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"'

       sh ' nvm install 16'
       sh ' nvm use 16'
       sh ' #npm install codeceptjs playwright install-deps --save'

     sh ' npx playwright install '
      sh 'npx codeceptjs def'

      sh 'npx codeceptjs run tests/login_test.js --verbose'
      
      }
    }
  
  
  }







}

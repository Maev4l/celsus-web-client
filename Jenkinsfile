pipeline { 
    agent {
        docker { 
            image 'node:14-alpine' 
        } 
    }
    options { 
        buildDiscarder(logRotator(numToKeepStr: '3'))
        disableConcurrentBuilds()
        ansiColor('xterm')
    }
    triggers {
        githubPush()
    }
    stages {
        stage ('Prepare') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Lint') { 
            steps { 
                sh 'yarn lint' 
            }
        }
        stage('Build') { 
            steps { 
                sh 'yarn build:ci' 
            }
        }
    }
}
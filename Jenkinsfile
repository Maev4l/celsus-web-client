pipeline { 
    agent {
        docker { 
            image '671123374425.dkr.ecr.eu-central-1.amazonaws.com/jenkins/nodejs:14' 
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
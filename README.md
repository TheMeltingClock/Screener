# Screener setup instructions #

Windows installation:

. Download nodejs LTS version: https://nodejs.org/en/download/

. Download the latest version of vs code which can be fund here: https://code.visualstudio.com/

. Download the last version of yarn package manager: https://github.com/yarnpkg/yarn/releases/download/v1.22.4/yarn-1.22.4.msi

. Download the last version of git: https://git-scm.com/download/win

. Restart your computer

Linux installation:

. Download nodejs lts version: curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh

. sudo bash nodesource_setup.sh

. sudo apt install nodejs

. sudo apt-get update && sudo apt-get install code

. curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - . echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list . sudo apt-get update && sudo apt-get install yarn

. apt install git

. source ~/.bashfcr or close and reopen your bash shell

MAC os installation

. Download nodejs LTS version: https://nodejs.org/en/download/

. Download homebrew: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

. brew install yarn

. brew install git

. Restart your computer

# Start the bot #

type in your terminal console: yarn (a new file created node_modules will appear);
rename file .env-example to just .env
type in your console: node app

check log file created.
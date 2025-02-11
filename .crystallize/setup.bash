#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "${SCRIPT}")
PROJECT_PATH=${SCRIPTPATH}/..

if [ ! -d "${PROJECT_PATH}/.crystallize" ]; then
    echo "It does not seem to be a clean clone. Aborting."
    exit 1
fi

# Note that Crystallize CLI is acting before this script.

echo "Setup ${PROJECT_PATH}"
cp ${PROJECT_PATH}/.crystallize/env ${PROJECT_PATH}/.env.local
cp ${PROJECT_PATH}/.crystallize/robots.txt ${PROJECT_PATH}/public/robots.txt

#---

echo "Running command ${PROJECT_PATH}"

if ! command -v pnpm &> /dev/null; then
    cd ${PROJECT_PATH} && npm install --no-progress --no-color
else 
    cd ${PROJECT_PATH} && pnpm install --silent --no-color
fi
#---

echo "Cleanup ${PROJECT_PATH}"

rm -rf ${PROJECT_PATH}/.github
rm -rf ${PROJECT_PATH}/.git
rm -rf ${PROJECT_PATH}/.vscode
rm -rf ${PROJECT_PATH}/.crystallize
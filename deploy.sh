#!/usr/bin/env sh

#abort on errors
set -e

#build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deplying to a custom domani
# echo 'www.expample.com' > CNAME

git init
git chechout -B main
git add -A
git commit -m 'deploy'

#if you are deploying to https://<USERNAME.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

#if you are deploying to https://<USERNAME.github.io/<REPO>
#git push -f git@github.com: giorgioagn/3d_portfolio.git main:gh-pages

cd -
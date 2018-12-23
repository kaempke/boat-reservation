#!/usr/bin/env bash
mkdir phptmp
cp ../backend/public/index.php ./phptmp/
cp ../backend/public/.htaccess ./phptmp/
ember build --environment production --output-path ../backend/public;
mv phptmp/* ../backend/public/
mv phptmp/.* ../backend/public/
mv ../backend/public/index.html ../backend/templates/index.phtml
rm -rf phptmp

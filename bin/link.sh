#!/bin/sh

rm /Users/yoorek/.jspm/linked/github/solubis/angular-ui@master
rm /Users/yoorek/.jspm/linked/github/solubis/angular-components@master
rm /Users/yoorek/.jspm/linked/github/solubis/angular-datatable@master

ln -sFf /Users/yoorek/Work/angular-console/ui /Users/yoorek/.jspm/linked/github/solubis/angular-ui@master
ln -sFf /Users/yoorek/Work/angular-components /Users/yoorek/.jspm/linked/github/solubis/angular-components@master
ln -sFf /Users/yoorek/Work/angular-datatable /Users/yoorek/.jspm/linked/github/solubis/angular-datatable@master

jspm install --link angular-ui=github:solubis/angular-ui@master
jspm install --link angular-components=github:solubis/angular-components@master
jspm install --link angular-datatable=github:solubis/angular-datatable@master
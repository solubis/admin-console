#!/bin/sh
rm -rf /Users/yoorek/Work/angular-console/lib/github/solubis/angular-components@master
rm -rf /Users/yoorek/Work/angular-console/lib/github/solubis/angular-ui@master
rm -rf /Users/yoorek/Work/angular-console/lib/github/solubis/angular-datatable@master

ln -Fs /Users/yoorek/Work/angular-components /Users/yoorek/Work/angular-console/lib/github/solubis/angular-components@master
ln -Fs /Users/yoorek/Work/angular-console/ui /Users/yoorek/Work/angular-console/lib/github/solubis/angular-ui@master
ln -Fs /Users/yoorek/Work/angular-datatable /Users/yoorek/Work/angular-console/lib/github/solubis/angular-datatable@master


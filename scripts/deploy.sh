#!/usr/bin/env bash

set -ex

rsync -a build/ vanvikil@vanvikil.no:/home/vanvikil/www/stats.vanvikil.no

#!/bin/sh

set -x
env | grep /
RESULT=$?
echo result is $RESULT
exit $RESULT

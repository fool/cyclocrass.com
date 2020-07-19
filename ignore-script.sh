#!/bin/sh

set -x
env | grep missing
RESULT=$?
echo result is $RESULT
exit $RESULT

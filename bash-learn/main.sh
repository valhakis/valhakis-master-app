#!/bin/bash
# ./main.sh
# chmod 755 main.sh

if [ "$1" == "welcome" ]; then
   echo "Welcome kind sir."
fi

if [ "$1" == "com" ]; then
   command="mysql -uadmin -padmin"
   eval $command
fi

if [ "$1" == "dbs" ]; then
   mysql -u admin -padmin -e "show databases"
fi

if [ "$1" == "create" ]; then
   mysql -u root -p -e "create database main"
fi

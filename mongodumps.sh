#!/usr/bin/env sh

export _mongodumps_output_directory=/c/Development/LLU-API/mongodumps

# ##### START: iso8601datetime.sh #####

export _iso8601datetime=`date +%Y%m%d%H%M%S`

# ##### END: iso8601datetime.sh #####

export _hostname=$COMPUTERNAME

export _username=$USERNAME

# /c/Program\ Files/MongoDB/Server/3.6/bin/mongodump.exe --db llu-api --out /C/Development/LLU-API/mongodumps/

export _mongodump=/c/Program\ Files/MongoDB/Server/3.6/bin/mongodump.exe
export _db=llu-api
export _out=$_mongodumps_output_directory/$_db-$_iso8601datetime\($_hostname-$_username\)

# echo \$_mongodumps_output_directory: $_mongodumps_output_directory
# echo \$_iso8601datatime: $_iso8601datetime
# echo \$hostname: $_hostname
# echo \$username: $_username
# echo \$_mongodump: $_mongodump
# echo \$_db: $_db
# echo \$_out: $_out

echo $_mongodump --db=$_db --out=$_out
"$_mongodump" --db=$_db --out=$_out

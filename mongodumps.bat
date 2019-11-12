@ECHO OFF

SET _mongodumps_output_directory=C:\Development\LLU-API\mongodumps
REM SET _mongodumps_output_directory=C:\Users\jbalcomb\Google Drive\LLU\mongodumps
ECHO %_mongodumps_output_directory%

REM ##### START: iso8601datetime.bat #####

REM Use WMIC to retrieve date and time
FOR /F "skip=1 tokens=1-6" %%G IN ('WMIC Path Win32_LocalTime Get Year^,Day^,Hour^,Minute^,Month^,Second^,Year /Format:table') DO (
   IF "%%~L"=="" GOTO s_done
      SET _yyyy=%%L
      SET _mm=00%%J
      SET _dd=00%%G
      SET _hour=00%%H
      SET _minute=00%%I
	  SET _second=00%%K
)
:s_done

:: Pad digits with leading zeros
      SET _mm=%_mm:~-2%
      SET _dd=%_dd:~-2%
      SET _hour=%_hour:~-2%
      SET _minute=%_minute:~-2%
	  SET _second=%_second:~-2%

:: Format the date-time in ISO-8601 format:
SET _iso8601datetime=%_yyyy%%_mm%%_dd%%_hour%%_minute%%_second%

REM ##### END: iso8601datetime.bat #####

SET _hostname=%COMPUTERNAME%

SET _username=%USERNAME%

REM C:\Program Files\MongoDB\Server\3.6\bin\mongodump.exe --db llu-api --out C:\Development\LLU-API\mongodumps\

SET _mongodump="C:\Program Files\MongoDB\Server\3.6\bin\mongodump.exe"
SET _db=llu-api
SET _out="%_mongodumps_output_directory%\%_db%-%_iso8601datetime%(%_hostname%-%_username%)"

REM ECHO %_iso8601datatime%
REM ECHO %hostname%
REM ECHO %username%
REM ECHO %_mongodump%
REM ECHO %_db%
REM ECHO %_out%

REM PAUSE

ECHO %_mongodump% --db=%_db% --out=%_out%
%_mongodump% --db=%_db% --out=%_out%

@echo off
SET PROJECT_PATH=%cd%
SET PLATFORM_PATH=%cd%\platforms

IF NOT EXIST %PLATFORM_PATH% GOTO SKIP_REMOVE
echo clean platforms...
cd platforms

SET ANDROID_PATH=%cd%\android

IF NOT EXIST %ANDROID_PATH% GOTO SKIP_REMOVE_SOURCES
echo remove android platform
rmdir /S /Q android
:SKIP_REMOVE_SOURCES
REM del platforms.json
cd..

:SKIP_REMOVE
call cordova platform add android@5.1
call cordova prepare
call cordova build

echo.
echo.
echo Build Finished
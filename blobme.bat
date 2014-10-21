rmdir deploy /q /s
mkdir deploy
cd out
jar -cf ..\deploy\machnetz.jar *
cd ..

mkdir deploy\lib

xcopy src\main\webroot deploy /s /e
xcopy dep deploy\lib /s /e
mkdir deploy\classes
xcopy out deploy\classes /s /e
copy run.cmd deploy
copy ..\fast-serialization\src\main\javascript\minbin.js deploy
copy ..\RealLive\src\js\reallive.css deploy
copy ..\RealLive\src\js\*.js deploy
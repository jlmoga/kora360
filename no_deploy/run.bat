@echo off
TITLE Kora360 - El teu gimnàs a casa
echo.
echo ===============================================
echo    INICIANT KORA360 - El teu gimnàs a casa
echo ===============================================
echo.

echo [1/2] Obrint el navegador a http://localhost:8080...
:: Obrim el navegador en una finestra nova
start http://localhost:8080

echo [2/2] Iniciant servidor Express (server.js)...
:: Executem el servidor. Com que 'node' bloqueja la consola, 
:: el navegador ja s'haurà obert abans.
node server.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: No s'ha pogut iniciar el servidor. 
    echo Assegura't de tenir Node.js instal·lat i les dependències (npm install).
    pause
)

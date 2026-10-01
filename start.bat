@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo ============================================================
echo    JUST ZENITH - LOCAL WEBSITE LAUNCHER (Windows)
echo ============================================================
echo.

where python >nul 2>&1
if %errorlevel%==0 (
    echo [OK] Python found. Starting server...
    echo.
    start "" python start.py
    goto :eof
)

where py >nul 2>&1
if %errorlevel%==0 (
    echo [OK] Python (py launcher) found. Starting server...
    echo.
    start "" py start.py
    goto :eof
)

where node >nul 2>&1
if %errorlevel%==0 (
    echo [OK] Node.js found. Installing http-server (first run only)...
    call npm install --silent >nul 2>&1
    echo.
    start "" npm start
    goto :eof
)

echo [ERROR] Neither Python nor Node.js was found on your system.
echo.
echo Please install one of the following:
echo   - Python 3:  https://www.python.org/downloads/
echo   - Node.js:   https://nodejs.org/
echo.
pause

@echo off
title Deploy Adobe Express for Education to Vercel
echo ===================================================================
echo     Deploying Adobe Express for Education to Vercel
echo ===================================================================
echo.
cd /d "%~dp0"
echo Running Vercel deployment...
echo (When prompted for Project Name, enter: adobe-express-education)
echo.
call npx vercel --prod
echo.
echo ===================================================================
echo Deployment finished! Check the live link above.
echo ===================================================================
pause

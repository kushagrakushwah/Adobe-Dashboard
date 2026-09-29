@echo off
title Deploy Adobe Express for Education to Vercel
echo ===================================================================
echo     Deploying Adobe Express for Education to Vercel
echo ===================================================================
echo.
cd /d "%~dp0"
echo Running Vercel deployment...
echo (When prompted to link to existing project, choose [Y] and enter project: adobedash)
echo.
call npx vercel --prod
echo.
echo ===================================================================
echo Deployment finished! Check the live link above.
echo ===================================================================
pause

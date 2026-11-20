const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const svgContent = fs.readFileSync('Z:/Projectes Antigravity/kora360/img/logo_calaixagil.svg', 'utf8');
const iconBase64 = fs.readFileSync('Z:/Projectes Antigravity/kora360/img/icon-512 real.png').toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 36%, #121c32 0%, #0a1120 55%, #040812 100%);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0;
    }

    .ambient-glow-1 {
      position: absolute;
      top: 36%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 750px;
      height: 750px;
      background: radial-gradient(circle, rgba(79, 172, 254, 0.12) 0%, rgba(79, 172, 254, 0) 70%);
      pointer-events: none;
    }

    .ambient-glow-2 {
      position: absolute;
      bottom: 14%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 650px;
      height: 400px;
      background: radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, rgba(0, 255, 136, 0) 70%);
      pointer-events: none;
    }

    .content {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 540px;
      padding-bottom: 260px;
    }

    /* Zona central superior destacada: càpsula o targeta blanca arrodonida amb ombra suau */
    .card-capsule {
      background: #ffffff;
      border-radius: 48px;
      padding: 44px 56px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 580px;
      height: 310px;
    }

    .card-capsule svg {
      width: 100%;
      height: 100%;
      max-width: 470px;
      max-height: 220px;
    }

    /* Zona inferior: fila horitzontal */
    .bottom-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 36px;
    }

    .app-icon {
      width: 140px;
      height: 140px;
      border-radius: 34px;
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.12);
      object-fit: cover;
    }

    .text-block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .app-title {
      color: #ffffff;
      font-size: 64px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1.1;
      margin-bottom: 8px;
      text-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
    }

    .status-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #00FF88;
      font-size: 21px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-shadow: 0 0 14px rgba(0, 255, 136, 0.65);
    }
  </style>
</head>
<body>
  <div class="ambient-glow-1"></div>
  <div class="ambient-glow-2"></div>
  <div class="content">
    <div class="card-capsule">
      ${svgContent}
    </div>

    <div class="bottom-row">
      <img class="app-icon" src="data:image/png;base64,${iconBase64}" alt="Kora 360" />
      <div class="text-block">
        <div class="app-title">Kora 360</div>
        <div class="status-badge">
          <span>El teu gimnàs a casa</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const tmpHtmlPath = path.resolve('Z:/Projectes Antigravity/kora360/APK/kora360/splash_render.html');
const resScreenDir = path.resolve('Z:/Projectes Antigravity/kora360/APK/kora360/res/screen');
if (!fs.existsSync(resScreenDir)) {
  fs.mkdirSync(resScreenDir, { recursive: true });
}
const outPngPath = path.join(resScreenDir, 'splash.png');
fs.writeFileSync(tmpHtmlPath, html, 'utf8');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + tmpHtmlPath.replace(/\\/g, '/');
const cmd = `"${chromePath}" --headless=new --no-sandbox --disable-gpu --screenshot="${outPngPath}" --window-size=1080,1920 --hide-scrollbars --default-background-color=00000000 "${fileUrl}"`;

console.log('Running chrome render...');
execSync(cmd, { stdio: 'inherit' });
console.log('Splash image generated at:', outPngPath);

// Also copy to img/splash.png
fs.copyFileSync(outPngPath, 'Z:/Projectes Antigravity/kora360/img/splash.png');
console.log('Copied to Z:/Projectes Antigravity/kora360/img/splash.png');

if (fs.existsSync(tmpHtmlPath)) {
  fs.unlinkSync(tmpHtmlPath);
}

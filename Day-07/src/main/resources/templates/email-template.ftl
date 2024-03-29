<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      font-size: 14px;
    "
  >
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background: #f4f7ff;
        background-image: url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/158214095.jpg?k=27f24ba1b150acdf52fd3a27f3079946d1f6ea257418a2879e9b788d9c26c775&o=&hp=1);
        background-repeat: no-repeat;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        color: #434343;
      "
    >
      <header>
        <table style="width: 100%;">
          <tbody>
            <tr style="height: 0;">
              <td>
                <img
                  alt=""
                  src="data:image/jpeg;base64,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"
                  height="90px"
                  border-radius="10px"
                />
              </td>
              <td style="text-align: right;">
                <span
                  style="font-size: 16px; line-height: 30px; color: #ffffff;"
                  >12 Nov, 2021</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </header>

      <main>
        <div
          style="
            margin: 0;
            margin-top: 70px;
            padding: 92px 30px 115px;
            background: #ffffff;
            border-radius: 30px;
            text-align: center;
          "
        >
          <div style="width: 100%; max-width: 489px; margin: 0 auto;">
            <h1
              style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
              Your OTP
            </h1>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-size: 16px;
                font-weight: 500;
              "
            >
              Hey Tomy,
            </p>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Thank you for choosing BeachOram Company. Use the following OTP
              to complete the procedure to change your email address. OTP is
              valid for
              <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
              Do not share this code with others, including BeachOram
              employees.
            </p>
            <p
              style="
                margin: 0;
                margin-top: 60px;
                font-size: 40px;
                font-weight: 600;
                letter-spacing: 25px;
                color: #ba3d4f;
              "
            >
              ${otp}
            </p>
          </div>
          <br> <br> <b>${Name}</b><br>${location}<br>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            font-weight: 500;
            color: #8c8c8c;
          "
        >
          Need help? Ask at
          <a
            href="mailto:BeachOram@gmail.com"
            style="color: #499fb6; text-decoration: none;"
            >BeachOram@gmail.com</a
          >
          or visit our
          <a
            href=""
            target="_blank"
            style="color: #499fb6; text-decoration: none;"
            >Help Center</a
          >
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        "
      >
        <p
          style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          "
        >
          BeachOram Company
        </p>
        <p style="margin: 0; margin-top: 8px; color: #434343;">
          Address 540, City, State.
        </p>
        <div style="margin: 0; margin-top: 16px;">
          <a href="" target="_blank" style="display: inline-block;">
            <img
              width="36px"
              alt="Facebook"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
            />
          </a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Instagram"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
          /></a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Twitter"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
            />
          </a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Youtube"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
          /></a>
        </div>
        <p style="margin: 0; margin-top: 16px; color: #434343;">
          Copyright © 2022 Company. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>

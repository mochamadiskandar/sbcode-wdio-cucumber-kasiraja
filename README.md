# Web Automation KASIR AJA

## Tech stack

- [WebDriver.io](https://webdriver.io/docs/gettingstarted)
- [Cucumber](https://webdriver.io/docs/frameworks/#using-cucumber)
- [HTML Nice Reports](https://www.npmjs.com/package/wdio-html-nice-reporter)

## How to Run?

- install seluruh library yang dibutuhkan :

  ```bash
    npm install
  ```

- Run test case dengan comand :

  ```bash
  npm run wdio-cu-login
  ```

- Jika ingin menjalankan spesific test case berdasarkan **CUCUMBER TAG** juga sudah sudah saya sediakan pada file **package.json**

## Reporting

- Untuk **Reports** secara menyeluruh akan tersimpan pada direktori **./reports/html/**, tentunya tiap reports memiliki unique ID masing-masing.

- Setiap menemukan hasil failed ketika menjalankan sebuah **Test Case**, maka akan otomatis tercapture dan di simpan pada direktori **./reports/screenshot/** dengan naming file berdasarkan timestamp.

Berikut spesifik direktorinya :

```text
  html report : "/reports/html/" --> open file.html pada browser
  screenshot  : "/reports/screenshot/"
```

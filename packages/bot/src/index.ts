import {
  puppeteer,
  args,
  defaultViewport,
  executablePath,
  headless,
} from "chrome-aws-lambda"

export const handler = async () => {
  let result = null
  let browser = null

  try {
    browser = await puppeteer.launch({
      args,
      defaultViewport,
      executablePath: await executablePath,
      headless,
      ignoreHTTPSErrors: true,
    })

    let page = await browser.newPage()

    await page.goto("https://example.com")

    const bodyHTML = await page.content()
    console.log(bodyHTML)

    return result
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }
}

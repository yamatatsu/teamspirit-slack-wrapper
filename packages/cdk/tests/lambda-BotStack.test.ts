import { SynthUtils } from "@aws-cdk/assert"
import { Stack } from "@aws-cdk/core"
import { AssetCode } from "@aws-cdk/aws-lambda"
import { BotStack } from "../src/lambda-BotStack"

test("BotStack snapshot test", () => {
  const stack = new Stack()
  const env = { region: "ap-northeast-1", account: "xxxxxs" }

  const target = new BotStack(stack, "testBotStack", {
    code: new AssetCode(`${__dirname}/assets`),
    env,
  })

  expect(SynthUtils.toCloudFormation(target)).toMatchSnapshot()
})

import * as cdk from "@aws-cdk/core"
import * as lambda from "@aws-cdk/aws-lambda"
import { BotStack } from "./lambda-BotStack"

const env = { region: "ap-northeast-1" }

const app = new cdk.App()

const code = new lambda.AssetCode(`${__dirname}/../../bot/dist`)
new BotStack(app, "BotStack", { code, env })

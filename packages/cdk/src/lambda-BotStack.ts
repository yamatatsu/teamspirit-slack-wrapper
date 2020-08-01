import * as cdk from "@aws-cdk/core"
import * as lambda from "@aws-cdk/aws-lambda"

type Props = cdk.StackProps & {
  code: lambda.Code
}

export class BotStack extends cdk.Stack {
  readonly lambda: lambda.IFunction
  constructor(parent: cdk.Construct, id: string, props: Props) {
    super(parent, id, props)

    const { code } = props

    this.lambda = new lambda.Function(this, "lambdaFunction", {
      code,
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      tracing: lambda.Tracing.ACTIVE,
    })
  }
}

import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, TextMessage } from "@inngest/agent-kit";
import { type Message } from "@inngest/agent-kit";
import { SANDBOX_TIMEOUT } from "./constant";

export async function getSandbox(sandboxId: string) {
    const sandbox = await Sandbox.connect(sandboxId)
    await sandbox.setTimeout(SANDBOX_TIMEOUT);
    return sandbox
}

export function lastAssistantTextMessageContent(result: AgentResult){
    const lastAssistantTextMessageIndex = result.output.findLastIndex((message) => message.role === "assistant")

    const message = result.output[lastAssistantTextMessageIndex] as TextMessage | undefined
    
    return message?.content 
        ? typeof message.content === "string"
            ? message.content
            : message.content.map((c) => c.text).join("")
            : undefined;
}

export const parseAgentOutput = (result: Message[], defaultMessage: string): string => {
  if (result.length === 0) {
    return defaultMessage;
  }
  const output = result[0];
  if (output.type !== "text") {
    return defaultMessage
  }
  if (!output.content) {
    return defaultMessage;
  }
  if (Array.isArray(output.content)) {
    return output.content.map((txt) => txt.text).join("")
  } else {
    return output.content
  }
}

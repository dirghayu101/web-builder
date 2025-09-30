import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Assume this is first step: Downloading some content.
    await step.sleep("wait-a-moment", "30s");
    // Assume this is second step: Transcribing that content.
    await step.sleep("wait-a-moment", "10s");
    // Assume this is final step: Generating summary of the entire workflow.
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);

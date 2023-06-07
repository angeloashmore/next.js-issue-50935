import { draftMode } from "next/headers";

export function Debug() {
  return (
    <pre>
      <code>
        {JSON.stringify(
          {
            "draftMode().isEnabled": draftMode().isEnabled,
            timestamp: Date.now(),
          },
          null,
          4
        )}
      </code>
    </pre>
  );
}

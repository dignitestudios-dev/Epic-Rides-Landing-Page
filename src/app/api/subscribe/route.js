import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    console.log("Email: ", email);

    const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;
    const APPS_SCRIPT_TOKEN = process.env.APPS_SCRIPT_TOKEN;

    console.log("APPS_SCRIPT_URL ==> ", APPS_SCRIPT_URL);
    console.log("APPS_SCRIPT_TOKEN ==> ", APPS_SCRIPT_TOKEN);

    if (!APPS_SCRIPT_URL || !APPS_SCRIPT_TOKEN) {
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      );
    }

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, token: APPS_SCRIPT_TOKEN }),
    });

    console.log("response: ", res);

    // If Apps Script returns JSON, parse it. Otherwise capture text for debugging.
    const contentType = res.headers.get("content-type") || "";
    if (contentType.indexOf("application/json") !== -1) {
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Apps Script responded with error JSON:", json);
        return NextResponse.json(
          { error: json.error || "Apps Script error" },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true });
    } else {
      const text = await res.text().catch(() => "");
      console.error(
        "Apps Script returned non-JSON response. status:",
        res.status,
        "body:",
        text
      );
      // Return the message to the client for debugging (truncated)
      const snippet = text
        ? text.length > 1000
          ? text.slice(0, 1000) + "..."
          : text
        : null;
      return NextResponse.json(
        { error: "Apps Script returned non-JSON response", detail: snippet },
        { status: 502 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

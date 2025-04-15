"use strict";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const FORMSPREE_ENDPOINTS = process.env.FORMSPREE_ENDPOINT;

  if (!FORMSPREE_ENDPOINTS) {
    return res.status(500).json({ error: "Server misconfiguration: Missing FORMSPREE_ENDPOINT" });
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send message");
    }

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Internal Server Error";
    return res.status(500).json({ error: errMsg });
  }
}

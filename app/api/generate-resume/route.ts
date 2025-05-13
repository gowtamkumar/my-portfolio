import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

// The GET function is used for handling the API request
export async function GET() {
  try {
    const url = `https://gowtamkumar.vercel.app/download-resume?print=true`; // Replace with your live URL in production

    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    console.log("Navigating to the page...");
    await page.goto(url, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });
    await browser.close();

    console.log("PDF generated successfully.");

    // Convert pdfBuffer (Uint8Array) to Buffer if needed
    const buffer = Buffer.from(pdfBuffer);

    // Return PDF as a response
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="gowtamkumar(Javascript Developer).pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to generate PDF" }),
      { status: 500 }
    );
  }
}

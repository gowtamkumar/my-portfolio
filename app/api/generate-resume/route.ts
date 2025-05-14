// app/api/generate-resume/route.js
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const url = `https://gowtamkumar.vercel.app/download-resume?print=true`;

    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    console.log("Navigating to the page...");
    await page.goto(url, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();
    console.log("PDF generated successfully.");

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="gowtamkumar(Javascript Developer).pdf"',
      },
    });

  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to generate PDF" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

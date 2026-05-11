from pypdf import PdfReader
import os

pdfs = [
    r"c:\Users\hp\OneDrive\Desktop\staffarc\VL Infra\INTRODUCTION_FIRE SAFETY.pdf",
    r"c:\Users\hp\OneDrive\Desktop\staffarc\VL Infra\VLInfra Brochure_ON_v2.pdf"
]

output_file = r"c:\Users\hp\OneDrive\Desktop\staffarc\VL Infra\extracted_content.txt"

with open(output_file, "w", encoding="utf-8") as f:
    for pdf_path in pdfs:
        f.write(f"\n--- CONTENT FROM: {os.path.basename(pdf_path)} ---\n")
        try:
            reader = PdfReader(pdf_path)
            for i, page in enumerate(reader.pages):
                f.write(f"\n[Page {i+1}]\n")
                f.write(page.extract_text() + "\n")
        except Exception as e:
            f.write(f"Error reading {pdf_path}: {str(e)}\n")

print(f"Content extracted to {output_file}")

import fitz  # PyMuPDF
import os

def pdf_to_png(pdf_path, output_folder):
    # PDF 파일 열기
    pdf_document = fitz.open(pdf_path)
    
    # 각 페이지를 PNG로 변환
    for page_number in range(len(pdf_document)):
        page = pdf_document[page_number]
        image = page.get_pixmap()
        image_path = f"{output_folder}/{os.path.splitext(os.path.basename(pdf_path))[0]}_page_{page_number + 1}.png"
        image.save(image_path)

    # PDF 문서 닫기
    pdf_document.close()

def batch_convert_pdf_to_png_in_folder(input_folder):
    # 출력 폴더가 없는 경우 생성
    output_folder = input_folder  # 같은 폴더 내에 저장하도록 설정
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # 입력 폴더 내의 모든 PDF 파일에 대해 변환 수행
    for filename in os.listdir(input_folder):
        if filename.endswith(".pdf"):
            pdf_path = os.path.join(input_folder, filename)
            pdf_to_png(pdf_path, output_folder)

# 입력 폴더 경로를 지정합니다.
input_folder = r"C:\Users\juani\Desktop\music"

# PDF를 PNG로 변환합니다.
batch_convert_pdf_to_png_in_folder(input_folder)

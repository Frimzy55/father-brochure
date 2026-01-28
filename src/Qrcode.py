import qrcode

# The URL you want the QR code for
url = "https://frimzy55.github.io/father-brochure/"

# Create a QR code object
qr = qrcode.QRCode(
    version=1,            # controls size of QR code (1 = 21x21)
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # high error correction
    box_size=10,          # size of each box in pixels
    border=4              # thickness of the border
)

# Add the URL to the QR code
qr.add_data(url)
qr.make(fit=True)

# Generate the image
img = qr.make_image(fill_color="black", back_color="white")

# Save the QR code image
img.save("father_brochure_qr.png")

print("QR code generated and saved as father_brochure_qr.png")

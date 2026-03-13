# Function Advance

## 1. Function expression
* Định nghĩa Function bằng cách gáng nó cho 1 biến

## 2. Lamda function (Arrow fuction)
* Cách viết function ngắn gọn hơn
* Sử dụng bằng dấu =>
* Có thể rút gọn "{}" nếu phía bên trong function chỉ có 1 dòng code
* Phía trong "()" được giữ nguyên và phía trong rỗng nếu không truyền tham số
* Có thể bỏ "()" nếu chỉ có 1 tham số truyền vào

## 3. Anonymous function
* function không tên
* Được dùng nếu function chỉ dùng 1 lần hoặc làm callback
* Không thể đứng 1 mình

# DOM (Document Object Model)
* Dạng cây có cấu trúc:
    * Thẻ <html></html>: chứa toàn bộ document
    * Thẻ <head></head>: chứa title
    * Thẻ <body></body>: Chứa Node - Những phần tử nhỏ của trang Web (Elements)
* Thẻ đc chưa 2 loại:
    * Thẻ có bao gồm thẻ mở <> và thẻ đóng </>
    * Thẻ tự đóng - thường được sử dụng cho hình ảnh hoặc thêm khoảng cách, xuống dòng
* Thuộc tính của thẻ và giá trị của thuộc tính nằm ở thẻ mở, và text sẽ thường nằm ở giữa thẻ đóng và thẻ mở
* Thực tế có rất nhiều loại thẻ khác nhau:
    * Thẻ tiêu chuẩn theo mozilla định nghĩa
    * Thẻ tự định nghĩa do lập trình viên/ website tự định nghĩa
* Thẻ cấu trúc cơ bản:
    * <html>: Thẻ gốc của trang
    * <head>: Chứa metadata: Title, hiển thị Google
    * <body>: Nội dung của website
    * <div>: Khối, container chung
    * <span>: Inline container
    * <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
    * **Thẻ nội dung**: 
        * <h1> đến <h6>: tiêu đề
        * <p>: đoạn văn
        * <a>: liên kết
        * <img>: hình ảnh
        * <ul>, <ol>, <li>: danh sách
    * **Thẻ from**:
        * <form>: Biểu mẫu
        * <input>: Ô nhập liệu
        * <button>: Nút
        * <select> và <option>: Dropdown
        * <textarea>: Vùng văn bản nhiều dòng
# Selector
* _Là công cụ để tìm phần tử cần tương tác_
* _Có 3 loại thường dùng:_
    * _Xpath_
    * _CSS selector_
    * _Playwright selector_

## 1. Xpath
* Dùng được cho 99,99% của các trường hợp
* Đa dạng, có thể tìm phần tử nhỏ
* Hơi dài
* Có 2 loại:
    * Tuyệt đối: đi dọc cây DOM
    * Tương đối: dựa vào đặc tính
_Nên dùng **tương đối**_

## 2. CSS selector
* Ngắn gọn, performance cao
* Dùng cho các trường hợp dễ tìm
* Không linh hoạt bằng Xpath

## 3. Playwright selector
* Chỉ dành riêng cho playwright
* Cú pháp ngăn gọn, không phụ thuộc vào cấu trúc DOM
* Hướng tới góc nhìn thực tế của người dùng

_Nên nắm bắt cả 3 để có thể đáp ứng yêu cầu của mọi loại dự án_













        <!--ket thuc thanh menu-->
<?php
?>        
        
        <div class="form_container">
            <div class="form_title">Thêm mới nhân viên</div>
            <form action = "index.php?pg=add-staff" method = "post" id="add_seller_form" >
                <div class="user_details">
                    <div class="form_input">
                        <span class="details">Họ Tên:</span>
                        <input type="text" id="ho" name = "staff-name" placeholder="Họ Tên" required="required">
                    </div>
                    <div class="form_input">
                        <span class="details">Tên:</span>
                        <input type="email" id="email" name = "staff-email" placeholder="Email" required="required">
                    </div>
                    <!-- <div class="gioitinh">
                        <span class="label_gioitinh">Giới tính:</span>
                        <div class="category">
                            <input type="radio" id="nam" name="gioi_tinh" value="Nam" required>
                            <label for="nam">Nam</label><br>
                            <input type="radio" id="nu" name="gioi_tinh" value="Nữ">
                            <label for="nu">Nữ</label><br><br>
                        </div>
                    </div> -->
                    <!-- <div class="form_input">
                        <span class="details">Ngày tháng năm sinh:</span>
                        <input type="date" id="ngay_sinh" name="ngay_sinh" required><br><br>
                    </div> -->
                    <!-- <div class="form_input">
                        <span class="details">Nơi sinh:</span>
                        <select id="noi_sinh" name="noi_sinh" required>
                            <option value="" disabled selected>-- Chọn tỉnh/thành phố --</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Hải Phòng">Hải Phòng</option>
                            <option value="Cần Thơ">Cần Thơ</option>
                            <option value="An Giang">An Giang</option>
                            <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                            <option value="Bắc Giang">Bắc Giang</option>
                            <option value="Bắc Kạn">Bắc Kạn</option>
                            <option value="Bạc Liêu">Bạc Liêu</option>
                            <option value="Bắc Ninh">Bắc Ninh</option>
                            <option value="Bến Tre">Bến Tre</option>
                            <option value="Bình Định">Bình Định</option>
                            <option value="Bình Dương">Bình Dương</option>
                            <option value="Bình Phước">Bình Phước</option>
                            <option value="Bình Thuận">Bình Thuận</option>
                            <option value="Cà Mau">Cà Mau</option>
                            <option value="Cao Bằng">Cao Bằng</option>
                            <option value="Đắk Lắk">Đắk Lắk</option>
                            <option value="Đắk Nông">Đắk Nông</option>
                            <option value="Điện Biên">Điện Biên</option>
                            <option value="Đồng Nai">Đồng Nai</option>
                            <option value="Đồng Tháp">Đồng Tháp</option>
                            <option value="Gia Lai">Gia Lai</option>
                            <option value="Hà Giang">Hà Giang</option>
                            <option value="Hà Nam">Hà Nam</option>
                            <option value="Hà Tĩnh">Hà Tĩnh</option>
                            <option value="Hải Dương">Hải Dương</option>
                            <option value="Hậu Giang">Hậu Giang</option>
                            <option value="Hòa Bình">Hòa Bình</option>
                            <option value="Hưng Yên">Hưng Yên</option>
                            <option value="Khánh Hòa">Khánh Hòa</option>
                            <option value="Kiên Giang">Kiên Giang</option>
                            <option value="Kon Tum">Kon Tum</option>
                            <option value="Lai Châu">Lai Châu</option>
                            <option value="Lâm Đồng">Lâm Đồng</option>
                            <option value="Lạng Sơn">Lạng Sơn</option>
                            <option value="Lào Cai">Lào Cai</option>
                            <option value="Long An">Long An</option>
                            <option value="Nam Định">Nam Định</option>
                            <option value="Nghệ An">Nghệ An</option>
                            <option value="Ninh Bình">Ninh Bình</option>
                            <option value="Ninh Thuận">Ninh Thuận</option>
                            <option value="Phú Thọ">Phú Thọ</option>
                            <option value="Quảng Bình">Quảng Bình</option>
                            <option value="Quảng Nam">Quảng Nam</option>
                            <option value="Quảng Ngãi">Quảng Ngãi</option>
                            <option value="Quảng Ninh">Quảng Ninh</option>
                            <option value="Quảng Trị">Quảng Trị</option>
                            <option value="Sóc Trăng">Sóc Trăng</option>
                            <option value="Sơn La">Sơn La</option>
                            <option value="Tây Ninh">Tây Ninh</option>
                            <option value="Thái Bình">Thái Bình</option>
                            <option value="Thái Nguyên">Thái Nguyên</option>
                            <option value="Thanh Hóa">Thanh Hóa</option>
                            <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                            <option value="Tiền Giang">Tiền Giang</option>
                            <option value="Trà Vinh">Trà Vinh</option>
                            <option value="Tuyên Quang">Tuyên Quang</option>
                            <option value="Vĩnh Long">Vĩnh Long</option>
                            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                            <option value="Yên Bái">Yên Bái</option>
                          </select>
                          
                    </div> -->
                    <!-- <div class="form_input">
                        <span class="details">Số điện thoại:</span>
                        <input type="text" id="Sdt" placeholder="Số điện thoại" required="required">
                    </div> -->
                    <!-- <div class="form_input">
                        <span class="details">Dân tộc:</span>
                        <input type="text" id="dan_toc" placeholder="Dân tộc" required="required">
                    </div> -->
                    <!-- <div class="form_input">
                        <span class="details">Ảnh:</span>
                        <input type="file" id="anh" name="fileToUpload" accept="image/*" required><br><br>
                    </div> -->
                    <!-- <div class="form_input">
                        <span class="details">Địa chỉ:</span>
                        <textarea id="dia_chi" name="dia_chi" required></textarea><br><br>
                    </div> -->
                    <!-- <div class="form_input">
                        <span class="details">Số CCCD/CMND:</span>
                        <input type="text" id="sothe" placeholder="CCCD/CMND" required="required">
                    </div> -->
                    <div class="form_button">
                        <input type="submit" name = "btn-add-staff" value="Thêm nhân viên">
                        <input type="reset" value="Đặt lại">
                    </div>
                    
                </div>
            </form>
        </div>

        <section class="overlay"></section>
    </div>
    <script src="js/homescrip.js"></script>
    <script src="js/seller.js"></script>
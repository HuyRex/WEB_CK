document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add_seller_form');
    const ngaySinhInput = document.getElementById('ngay_sinh');
    const sdtInput = document.getElementById('Sdt');
    const cccdInput = document.querySelector('input[placeholder="CCCD/CMND"]');
    const errorMessages = [];

    form.addEventListener('submit', function (event) {
        errorMessages.length = 0;

        const dob = new Date(ngaySinhInput.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        if (age < 18) {
            errorMessages.push('Chưa đủ 18 tuổi.');
        }

        const phoneNumber = sdtInput.value.trim();
        if (!(/^\d{10,11}$/.test(phoneNumber))) {
            errorMessages.push('Số điện thoại phải có 10 hoặc 11 số.');
        }

        const idCard = cccdInput.value.trim();
        if (!(/^\d{9,12}$/.test(idCard))) {
            errorMessages.push('Số CCCD/CMND phải có từ 9 đến 12 số.');
        }

        if (errorMessages.length > 0) {
            event.preventDefault(); 
            alert(errorMessages.join('\n')); 
        }
    });
});
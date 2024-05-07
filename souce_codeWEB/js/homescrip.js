//-----------------------------------chung-------------------------------------//

// navbar overlay
const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".menu-icon"),
      overlay = document.querySelector(".overlay");
menuBtns.forEach(menuBtn =>{
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", ()=> {
    navBar.classList.remove("open");
});
//navbar over lay
//-----------------------------------chung-------------------------------------//




//-----------------------------------home---------------------------------------//
//Giới hạn bảng(table) ở home
document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.querySelector(".recent_order a");
    const closeBtn = document.querySelector(".recent_order a.close");
    const tableRows = document.querySelectorAll(".recent_order table tbody tr");

//     // Số lượng dòng được hiển thị ban đầu
    const initialRowCount = 5;
    let visibleRowCount = initialRowCount;

//     // Ẩn tất cả các dòng từ dòng thứ visibleRowCount trở đi
    for (let i = visibleRowCount; i < tableRows.length; i++) {
        tableRows[i].style.display = "none";
    }

//     // Xử lý sự kiện khi nhấp vào nút "show more"
    showMoreBtn.addEventListener("click", function() {
        // Hiển thị thêm 5 dòng tiếp theo của bảng
        for (let i = visibleRowCount; i < visibleRowCount + 5; i++) {
            if (tableRows[i]) {
                tableRows[i].style.display = "table-row";
            }
        }

//         // Cập nhật số lượng dòng được hiển thị
        visibleRowCount += 5;

//         // Nếu không còn dòng nào được ẩn, ẩn nút "show more" và hiển thị nút "close"
        if (visibleRowCount >= tableRows.length) {
            showMoreBtn.style.display = "none";
            closeBtn.style.display = "inline";
        }
    });
});
// giới hạn bảng

document.addEventListener("DOMContentLoaded", function() {
    // Kiểm tra nếu người dùng chưa đổi mật khẩu, hiển thị form đổi mật khẩu
    if (!hasChangedPassword()) {
        var changePasswordForm = document.getElementById("changePasswordForm");
        changePasswordForm.style.display = "block";
    }

    // Xử lý sự kiện khi người dùng gửi form đổi mật khẩu
    var passwordForm = document.getElementById("passwordForm");
    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        // Lấy giá trị từ các trường input
        var currentPassword = document.getElementById("currentPassword").value;
        var newPassword = document.getElementById("newPassword").value;
        var confirmNewPassword = document.getElementById("confirmNewPassword").value;

        // Kiểm tra xem mật khẩu mới và xác nhận mật khẩu mới có khớp nhau không
        if (newPassword !== confirmNewPassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu mới không khớp.");
            return;
        }

        // Thực hiện xử lý đổi mật khẩu, ví dụ: gửi yêu cầu đổi mật khẩu đến máy chủ
        // Sau khi xử lý thành công, ẩn form đổi mật khẩu
        hideChangePasswordForm();
    });
});

// Hàm kiểm tra xem người dùng đã đổi mật khẩu hay chưa (giả sử là một hàm tùy chỉnh)
function hasChangedPassword() {
    // Thực hiện kiểm tra, ví dụ: kiểm tra trong cơ sở dữ liệu hoặc lưu trữ cục bộ
    // Trong trường hợp này, chỉ đơn giản trả về một giá trị giả định
    return false; // Giả sử người dùng chưa đổi mật khẩu
}

// Hàm ẩn form đổi mật khẩu
function hideChangePasswordForm() {
    var changePasswordForm = document.getElementById("changePasswordForm");
    changePasswordForm.style.display = "none";
}





//-----------------------------------home---------------------------------------//



document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");
    const employeeList = document.getElementById("employeeList").getElementsByClassName("listtable-row");

    // Function to filter employee entries based on search input
    function filterEmployees() {
        const searchValue = searchInput.value.trim().toLowerCase();
        suggestions.innerHTML = ""; // Clear previous suggestions

        // Filter employee list
        Array.from(employeeList).forEach(function (employee) {
            const name = employee.getElementsByClassName("listtable-cell")[3].textContent.trim().toLowerCase(); // Get employee name
            const id = employee.getElementsByClassName("listtable-cell")[1].textContent.trim().toLowerCase(); // Get employee ID

            if (name.includes(searchValue) || id.includes(searchValue)) {
                employee.style.display = "flex"; // Show matching entries
            } else {
                employee.style.display = "none"; // Hide non-matching entries
            }
        });
    }

    // Function to handle click on suggestion
    function suggestionClick(event) {
        if (event.target.tagName === "DIV") {
            const suggestionText = event.target.textContent;
            const searchText = suggestionText.split(" - ")[0].trim(); // Extract ID from suggestion text
            searchInput.value = searchText; // Set search input value to suggestion
            filterEmployees(); // Filter employees based on suggestion
        }
    }

    // Event listener for input on search box
    searchInput.addEventListener("input", function () {
        filterEmployees(); // Filter employees based on input
        generateSuggestions(); // Generate suggestions when search input changes
    });

    // Event listener for click on suggestion
    suggestions.addEventListener("click", suggestionClick);

    // Function to generate suggestions based on search input
    function generateSuggestions() {
        const searchValue = searchInput.value.trim().toLowerCase();
        suggestions.innerHTML = ""; // Clear previous suggestions

        let suggestionCount = 0; // Initialize suggestion count

        // Generate suggestions based on employee names and IDs
        Array.from(employeeList).forEach(function (employee) {
            const name = employee.getElementsByClassName("listtable-cell")[3].textContent.trim().toLowerCase(); // Get employee name
            const id = employee.getElementsByClassName("listtable-cell")[1].textContent.trim().toLowerCase(); // Get employee ID

            if ((name.includes(searchValue) || id.includes(searchValue)) && suggestionCount < 4) {
                const suggestion = document.createElement("div");
                suggestion.textContent = id + " - " + name; // Set suggestion text to employee ID - name
                suggestions.appendChild(suggestion); // Append suggestion to suggestions
                suggestionCount++; // Increment suggestion count
            }
        });
    }

    // Event listener for focus on search box
    // Remove this event listener
    // searchInput.addEventListener("focus", function () {
    //     generateSuggestions(); // Generate suggestions when search box is focused
    // });

    // Event listener for blur on search box
    searchInput.addEventListener("blur", function () {
        setTimeout(function () {
            suggestions.innerHTML = ""; // Clear suggestions when search box loses focus after a delay
        }, 200);
    });

    // Event listener for click on search button
    document.querySelector(".search-box button").addEventListener("click", function () {
        filterEmployees(); // Filter employees based on search input when search button is clicked
    });
});


//---------------------------------------list seller------------------------------------------//
document.addEventListener("DOMContentLoaded", function() {
    const listContainer = document.querySelector(".list_container");

    // Event delegation for lock and unlock buttons
    listContainer.addEventListener("click", function(event) {
        const target = event.target;

        // Check if the clicked element is a lock or unlock button
        if (target.classList.contains("lock-employee-btn")) {
            const confirmation = confirm("Bạn có chắc chắn muốn khóa tài khoản không?");
            if (confirmation) {
                // Change button text and color to indicate account is locked
                target.textContent = "Mở khóa tài khoản";
                target.classList.remove("lock-employee-btn");
                target.classList.add("unlock-employee-btn");
            }
        } else if (target.classList.contains("unlock-employee-btn")) {
            const confirmation = confirm("Bạn có chắc chắn muốn mở khóa tài khoản không?");
            if (confirmation) {
                // Change button text and color to indicate account is unlocked
                target.textContent = "Khóa tài khoản";
                target.classList.remove("unlock-employee-btn");
                target.classList.add("lock-employee-btn");
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sendEmailButtons = document.querySelectorAll(".send-email-btn");

    sendEmailButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const confirmation = confirm("Bạn có chắc chắn muốn gửi email không?");
            if (confirmation) {
                // Change button appearance to indicate email is being sent
                button.textContent = "Đang gửi...";
                button.disabled = true; // Disable button during email sending

                // Start countdown timer for 1 minute
                let seconds = 60;
                const timerInterval = setInterval(function() {
                    seconds--;
                    button.textContent = "Gửi sau " + seconds + " giây";
                    

                    if (seconds <= 0) {
                        clearInterval(timerInterval);
                        button.textContent = "Gửi";
                        button.disabled = false; // Re-enable button
                        button.style.backgroundColor = "#007bff"; // Revert color
                    } else {
                        button.style.backgroundColor = "#0056b3"; // Change color during countdown
                    }
                }, 1000);
            }
        });
    });
});





var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    productCode = document.getElementById("code"),
    productName = document.getElementById("name"),
    importPrice = document.getElementById("importPrice"),
    salePrice = document.getElementById("salePrice"),
    category = document.getElementById("category"),
    createDate = document.getElementById("createDate"),
    submitBtn = document.querySelector(".submit"),
    productList = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newProductBtn = document.querySelector(".newUser");

let getData = localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : [];

let isEdit = false, editId;
showProducts();

newProductBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Lưu',
    modalTitle.innerText = "Thêm sản phẩm"
    isEdit = false
    imgInput.src = "image/plus.png"
    form.reset()
});

file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0]);
    }
    else{
        alert("Dung lượng ảnh quá lớn!")
    }
};

function showProducts(){
    document.querySelectorAll('.productDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="productDetails">
            <td>${index+1}</td>
            <td>${element.productCode}</td>
            <td>${element.productName}</td>
            <td><img src="${element.picture}" alt="" width="100" height="100"></td>
            <td>${element.importPrice}</td>
            <td>${element.salePrice}</td>
            <td>${element.category}</td>
            <td>${element.createDate}</td>
            <td>
                <button class="btn btn-success" onclick="readProduct('${element.picture}', '${element.productCode}', '${element.productName}', '${element.importPrice}', '${element.salePrice}', '${element.category}', '${element.createDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class='bx bx-show'></i></button>

                <button class="btn btn-primary" onclick="editProduct(${index}, '${element.picture}', '${element.productCode}', '${element.productName}', '${element.importPrice}', '${element.salePrice}', '${element.category}', '${element.createDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class='bx bxs-edit'></i></button>

                <button class="btn btn-danger" onclick="deleteProduct(${index})"><i class='bx bxs-trash' ></i></button>
            </td>
        </tr>`;

        productList.innerHTML += createElement;
    });
}

function readProduct(pic, code, name, importP, saleP, cate, cDate) {
    document.querySelector('.showImg').src = pic;
    document.querySelector('#showCode').value = code; 
    document.querySelector("#showName").value = name;
    document.querySelector("#showImportPrice").value = importP;
    document.querySelector("#showSalePrice").value = saleP;
    document.querySelector("#showCategory").value = cate;
    document.querySelector("#showCreateDate").value = cDate;
}



function editProduct(index, pic, code, name, importP, saleP, cate, cDate) {
    isEdit = true;
    editId = index;
    imgInput.src = pic;
    productCode.value = code;
    productName.value = name;
    importPrice.value = importP;
    salePrice.value = saleP;
    category.value = cate;  // This will automatically select the correct option in the dropdown
    createDate.value = cDate;

    submitBtn.innerText = "Update";
    modalTitle.innerText = "Update The Form";
}



function deleteProduct(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1);
        localStorage.setItem("productList", JSON.stringify(getData));
        showProducts();
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    // Tạo mã sản phẩm tự động
    const nextProductCode = getNextProductCode();

    const productInfo = {
        picture: imgInput.src == undefined ? "./image/Product Icon.webp" : imgInput.src,
        productCode: nextProductCode,
        productName: productName.value,
        importPrice: importPrice.value,
        salePrice: salePrice.value,
        category: category.value,
        createDate: createDate.value
    };

    // Thêm sản phẩm vào danh sách
    if(!isEdit){
        getData.push(productInfo);
    }
    else{
        isEdit = false;
        getData[editId] = productInfo;
    }

    localStorage.setItem('productList', JSON.stringify(getData));

    submitBtn.innerText = "Submit";
    modalTitle.innerHTML = "Fill The Form";

    showProducts();

    form.reset();
    imgInput.src = "./image/Product Icon.webp";
});

// Hàm tạo mã sản phẩm tự động
function getNextProductCode() {
    const lastIndex = getData.length;
    const nextIndex = lastIndex > 0 ? lastIndex + 1 : 1;
    const paddedIndex = String(nextIndex).padStart(3, '0'); // Định dạng số thứ tự thành chuỗi có độ dài 3 ký tự bằng cách thêm số 0 vào đầu
    return 'sp-' + paddedIndex;
}


// Hàm kiểm tra và xử lý dữ liệu đầu vào chỉ chấp nhận chữ số
function validateNumberInput(input) {
    input.value = input.value.replace(/\D/g, ''); // Loại bỏ tất cả các ký tự không phải số
}

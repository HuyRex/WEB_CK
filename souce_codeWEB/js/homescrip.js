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







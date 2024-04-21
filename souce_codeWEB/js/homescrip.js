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

let dropdown = document.querySelectorAll(".list_dropdown");

for (var i=0;i < dropdown.length;i++){
    dropdown[i].addEventListener("click",(e)=>{
    let dropdownParent = e.target.parentElement.parentElement;
    console.log(dropdownParent);
    dropdownParent.classList.toggle("showmenu");
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.querySelector(".recent_order a");
    const closeBtn = document.querySelector(".recent_order a.close");
    const tableRows = document.querySelectorAll(".recent_order table tbody tr");

    // Số lượng dòng được hiển thị ban đầu
    const initialRowCount = 5;
    let visibleRowCount = initialRowCount;

    // Ẩn tất cả các dòng từ dòng thứ visibleRowCount trở đi
    for (let i = visibleRowCount; i < tableRows.length; i++) {
        tableRows[i].style.display = "none";
    }

    // Xử lý sự kiện khi nhấp vào nút "show more"
    showMoreBtn.addEventListener("click", function() {
        // Hiển thị thêm 5 dòng tiếp theo của bảng
        for (let i = visibleRowCount; i < visibleRowCount + 5; i++) {
            if (tableRows[i]) {
                tableRows[i].style.display = "table-row";
            }
        }

        // Cập nhật số lượng dòng được hiển thị
        visibleRowCount += 5;

        // Nếu không còn dòng nào được ẩn, ẩn nút "show more" và hiển thị nút "close"
        if (visibleRowCount >= tableRows.length) {
            showMoreBtn.style.display = "none";
            closeBtn.style.display = "inline";
        }
    });
});



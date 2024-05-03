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

//list_dropdown
let dropdown = document.querySelectorAll(".list_dropdown");

for (var i=0;i < dropdown.length;i++){
    dropdown[i].addEventListener("click",(e)=>{
    let dropdownParent = e.target.parentElement.parentElement;
    console.log(dropdownParent);
    dropdownParent.classList.toggle("showmenu");
    });
}
//list_dropdown


//-----------------------------------chung-------------------------------------//




//-----------------------------------home---------------------------------------//
//Giới hạn bảng(table) ở home
// document.addEventListener("DOMContentLoaded", function() {
//     const showMoreBtn = document.querySelector(".recent_order a");
//     const closeBtn = document.querySelector(".recent_order a.close");
//     const tableRows = document.querySelectorAll(".recent_order table tbody tr");

//     // Số lượng dòng được hiển thị ban đầu
//     const initialRowCount = 5;
//     let visibleRowCount = initialRowCount;

//     // Ẩn tất cả các dòng từ dòng thứ visibleRowCount trở đi
//     for (let i = visibleRowCount; i < tableRows.length; i++) {
//         tableRows[i].style.display = "none";
//     }

//     // Xử lý sự kiện khi nhấp vào nút "show more"
//     showMoreBtn.addEventListener("click", function() {
//         // Hiển thị thêm 5 dòng tiếp theo của bảng
//         for (let i = visibleRowCount; i < visibleRowCount + 5; i++) {
//             if (tableRows[i]) {
//                 tableRows[i].style.display = "table-row";
//             }
//         }

//         // Cập nhật số lượng dòng được hiển thị
//         visibleRowCount += 5;

//         // Nếu không còn dòng nào được ẩn, ẩn nút "show more" và hiển thị nút "close"
//         if (visibleRowCount >= tableRows.length) {
//             showMoreBtn.style.display = "none";
//             closeBtn.style.display = "inline";
//         }
//     });
// });
// giới hạn bảng

//-----------------------------------home---------------------------------------//


//------------------------------------thêm nhân viên-----------------------------//

// const wrapper = document.querySelector(".wrapper"),
// selectBtn = wrapper.querySelector(".select-btn"),
// searchInp = wrapper.querySelector("input"),
// options = wrapper.querySelector(".options");

// let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
//                  "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
//                  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
//                  "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
//                  "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
//                  "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

// function addCountry(selectedCountry) {
//     options.innerHTML = "";
//     countries.forEach(country => {
//         let isSelected = country == selectedCountry ? "selected" : "";
//         let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
//         options.insertAdjacentHTML("beforeend", li);
//     });
// }
// addCountry();

// function updateName(selectedLi) {
//     searchInp.value = "";
//     addCountry(selectedLi.innerText);
//     wrapper.classList.remove("active");
//     selectBtn.firstElementChild.innerText = selectedLi.innerText;
// }

// searchInp.addEventListener("keyup", () => {
//     let arr = [];
//     let searchWord = searchInp.value.toLowerCase();
//     arr = countries.filter(data => {
//         return data.toLowerCase().startsWith(searchWord);
//     }).map(data => {
//         let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
//         return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
//     }).join("");
//     options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
// });

// selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

//------------------------------------thêm nhân viên-----------------------------//
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




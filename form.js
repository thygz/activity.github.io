const testButton = () => {
    const checked = document.querySelector('input[name=radbtn]:checked').value;
    alert(checked);
}

const btnRadio = document.querySelector('#btnRadio');
btnRadio.addEventListener('click', testButton);


const selectAll = document.querySelector('#allSelect');
const selectOptions = document.querySelectorAll(".checkOption");
function selectAllBoxes() {
    const checking = selectAll.checked;
    for (let i = 0; i < selectOptions.length; i++) {
        selectOptions[i].checked = checking;
    }
}

selectAll.addEventListener("change", () => {
    Array.from(selectOptions).map((checkbox) => {
        checkbox.checked = selectAll.checked;
    });
});
  
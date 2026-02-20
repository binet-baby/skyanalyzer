function previewImage(inputId, previewId) {
    const fileInput = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    fileInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
}

previewImage("image1", "preview1");
previewImage("image2", "preview2");

function generateFakeResults() {
    return {
        stars: Math.floor(Math.random() * 200 + 20),
        visibility: Math.floor(Math.random() * 100) + "%",
        pollution: Math.floor(Math.random() * 100) + "%"
    };
}

function compareImages() {

    const result1 = generateFakeResults();
    const result2 = generateFakeResults();

    document.getElementById("result1").innerHTML = `
        <p>Stars: ${result1.stars}</p>
        <p>Visibility: ${result1.visibility}</p>
        <p>Pollution: ${result1.pollution}</p>
    `;

    document.getElementById("result2").innerHTML = `
        <p>Stars: ${result2.stars}</p>
        <p>Visibility: ${result2.visibility}</p>
        <p>Pollution: ${result2.pollution}</p>
    `;

    let comparisonText = "";

    if (result1.stars > result2.stars) {
        comparisonText = "Night 1 has clearer sky with more visible stars ⭐";
    } else if (result2.stars > result1.stars) {
        comparisonText = "Night 2 has clearer sky with more visible stars ⭐";
    } else {
        comparisonText = "Both nights have similar sky visibility.";
    }

    document.getElementById("comparisonText").innerText = comparisonText;
}
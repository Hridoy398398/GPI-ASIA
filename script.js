// Dummy Certificate Data
const certificates = [
    { id: "CERT001", name: "John Doe", course: "Python", date: "2025-08-27" },
    { id: "CERT002", name: "Jane Smith", course: "Web Development", date: "2025-08-20" }
];

function verifyCert() {
    const certId = document.getElementById("certId").value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");

    const cert = certificates.find(c => c.id === certId);

    if(cert) {
        resultDiv.innerHTML = `✅ Certificate Valid!<br>
                               Name: ${cert.name}<br>
                               Course: ${cert.course}<br>
                               Date: ${cert.date}`;
    } else {
        resultDiv.innerHTML = "❌ Certificate NOT found!";
    }
}

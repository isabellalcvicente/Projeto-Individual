function enviarDados(event) {

    event.preventDefault();

    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value,
    }

    console.log("Dados:", formData);

    // Enviar os dados como JSON usando fetch
    fetch('https://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      alert("Sua mensagem foi enviada");
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
    })


}


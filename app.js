
// const formulario = document.getElementById('cadastroForm');
const formulario = document.querySelector('#cadastroForm');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); //Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementsByClassName('email')[0].value;
    console.log(email);

    const senha = document.querySelector('input[type="password"]').value;
    // const senha = document.querySelectorAll('input[type="password"]');
    console.log(senha);
    
    /*senha.forEach(item => {
        console.log(item.value);
        // item.style.border = "solid 1px red";
        item.classList.toggle('borda-alerta');
        // item.focus();
    }); */
    
    const mensagem = document.getElementById('mensagem');
    window.alert(`Essa senha ${senha} já existe!`);

    // mensagem.textContent = `Obrigado, ${nome}! Seu cadastro foi realizado com sucesso. Veirifique o email: ${email}`

    // mensagem.innerHTML = `<h3>Obrigado, ${nome}! Seu cadastro foi realizado com sucesso. Veirifique o email: ${email}</h3>`;

    // Cria um elemento HTML
    const h3 = document.createElement('h3');
    h3.textContent = `Obrigado, ${nome}! Seu cadastro foi realizado com sucesso. Veirifique o email: ${email}`;

    mensagem.appendChild(h3);


    const noticias = [
        {
            titulo: 'iPhone',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis nostrum ipsa eum at impedit sed reiciendis unde molestias ad.',
            foto: './img/noticia-04.jpg'
        },
        {
            titulo: 'Capivara',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis nostrum ipsa eum at impedit sed reiciendis unde molestias ad.',
            foto: './img/noticia-03.jpg'
        },
        {
            titulo: 'Americana',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis nostrum ipsa eum at impedit sed reiciendis unde molestias ad.',
            foto: './img/noticia-02.jpg'
        }
    ];

    noticias.forEach(noticia => {
        // Criar o card
        const card = document.createElement('article');
        card.classList.add('card');
        mensagem.appendChild(card);

        const foto = document.createElement('img');
        foto.classList.add('foto');
        foto.setAttribute('src', noticia.foto);
        card.appendChild(foto);

        const div = document.createElement('div');
        card.appendChild(div);

        const titulo = document.createElement('h3');
        titulo.textContent = noticia.titulo;
        div.appendChild(titulo);

        const texto = document.createElement('p');
        texto.textContent = noticia.texto;
        div.appendChild(texto);
    });

    


    this.reset();
});

const formGroup = document.querySelectorAll('.form-group');

formGroup.forEach(group => {
    group.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue'
    });

    group.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    })
});

const mensagemDiv = document.getElementById('mensagem');
mensagemDiv.textContent = 'Preencha os campos acima antes de submeter!';



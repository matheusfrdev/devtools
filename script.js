/* =========================================
   MODAL
========================================= */

const modal =
    document.getElementById("modal");

const modalBody =
    document.getElementById("modalBody");

const modalTitle =
    document.getElementById("modalTitle");

const modalSubtitle =
    document.getElementById("modalSubtitle");

const modalIcon =
    document.getElementById("modalIcon");


function openModal(
    title,
    subtitle,
    icon,
    html
){

    modalTitle.textContent = title;

    modalSubtitle.textContent = subtitle;

    modalIcon.textContent = icon;

    modalBody.innerHTML = html;

    modal.classList.add("active");
}


function closeModal(){

    modal.classList.remove("active");

}


document
.getElementById("closeModal")
.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    function(e){

        if(e.target === modal){

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Escape"){

            closeModal();

        }

    }
);


/* =========================================
   COPY
========================================= */

function copyText(
    text,
    button
){

    navigator.clipboard
        .writeText(text);

    const old =
        button.textContent;

    button.textContent =
        "✓ Copiado!";

    setTimeout(
        () => {

            button.textContent =
                old;

        },
        1500
    );

}


/* =========================================
   RANDOM
========================================= */

function randomNumber(
    min,
    max
){

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}


/* =========================================
   CPF
========================================= */

function generateCPF(){

    const n = [];

    for(
        let i = 0;
        i < 9;
        i++
    ){

        n.push(
            randomNumber(0,9)
        );

    }

    let sum = 0;

    for(
        let i = 0;
        i < 9;
        i++
    ){

        sum +=
            n[i] *
            (10 - i);

    }

    let digit =
        11 - (sum % 11);

    if(digit >= 10){

        digit = 0;

    }

    n.push(digit);

    sum = 0;

    for(
        let i = 0;
        i < 10;
        i++
    ){

        sum +=
            n[i] *
            (11 - i);

    }

    digit =
        11 - (sum % 11);

    if(digit >= 10){

        digit = 0;

    }

    n.push(digit);

    return `${n[0]}${n[1]}${n[2]}.${n[3]}${n[4]}${n[5]}.${n[6]}${n[7]}${n[8]}-${n[9]}${n[10]}`;

}


/* =========================================
   CNPJ
========================================= */

function generateCNPJ(){

    const n = [];

    for(
        let i = 0;
        i < 8;
        i++
    ){

        n.push(
            randomNumber(0,9)
        );

    }

    n.push(
        0,0,0,1
    );

    const calc = (
        arr,
        weights
    ) => {

        let sum = 0;

        for(
            let i = 0;
            i < arr.length;
            i++
        ){

            sum +=
                arr[i] *
                weights[i];

        }

        const r =
            sum % 11;

        return r < 2
            ? 0
            : 11 - r;

    };

    n.push(
        calc(
            n,
            [
                5,4,3,2,
                9,8,7,6,
                5,4,3,2
            ]
        )
    );

    n.push(
        calc(
            n,
            [
                6,5,4,3,2,
                9,8,7,6,5,4,3,2
            ]
        )
    );

    return `${n.slice(0,2).join("")}.${n.slice(2,5).join("")}.${n.slice(5,8).join("")}/${n.slice(8,12).join("")}-${n.slice(12).join("")}`;

}


/* =========================================
   VALIDAR CPF
========================================= */

function validateCPF(value){

    const cpf =
        value.replace(/\D/g,"");

    if(
        cpf.length !== 11
    ){

        return false;

    }

    if(
        /^(\d)\1+$/.test(cpf)
    ){

        return false;

    }

    let sum = 0;

    for(
        let i = 0;
        i < 9;
        i++
    ){

        sum +=
            Number(cpf[i]) *
            (10 - i);

    }

    let digit =
        11 - (sum % 11);

    if(digit >= 10){

        digit = 0;

    }

    if(
        digit !== Number(cpf[9])
    ){

        return false;

    }

    sum = 0;

    for(
        let i = 0;
        i < 10;
        i++
    ){

        sum +=
            Number(cpf[i]) *
            (11 - i);

    }

    digit =
        11 - (sum % 11);

    if(digit >= 10){

        digit = 0;

    }

    return (
        digit === Number(cpf[10])
    );

}


/* =========================================
   VALIDAR CNPJ
========================================= */

function validateCNPJ(value){

    const cnpj =
        value.replace(/\D/g,"");

    if(
        cnpj.length !== 14
    ){

        return false;

    }

    if(
        /^(\d)\1+$/.test(cnpj)
    ){

        return false;

    }

    const calc = (
        length
    ) => {

        let sum = 0;

        let pos =
            length - 7;

        for(
            let i = length;
            i >= 1;
            i--
        ){

            sum +=
                Number(
                    cnpj[
                        length - i
                    ]
                ) *
                pos;

            pos--;

            if(pos < 2){

                pos = 9;

            }

        }

        const result =
            sum % 11;

        return result < 2
            ? 0
            : 11 - result;

    };

    return (
        calc(12) ===
        Number(cnpj[12])

        &&

        calc(13) ===
        Number(cnpj[13])
    );

}


/* =========================================
   PESSOAS
========================================= */

const names = [

    "Lucas Almeida",
    "Gabriel Santos",
    "Matheus Oliveira",
    "João Victor Silva",
    "Pedro Henrique Souza",
    "Miguel Costa",
    "Arthur Rodrigues",
    "Rafael Martins",
    "Gustavo Ferreira",
    "Felipe Carvalho",

    "Ana Clara Mendes",
    "Mariana Alves",
    "Beatriz Lima",
    "Julia Barbosa",
    "Larissa Rocha",
    "Isabela Martins",
    "Manuela Ferreira",
    "Camila Rodrigues",
    "Letícia Carvalho",
    "Sophia Almeida",

    "Enzo Gabriel",
    "Davi Lucas",
    "Bernardo Souza",
    "Heitor Oliveira",
    "Nicolas Martins",
    "Theo Santos",
    "Samuel Costa",
    "Lorenzo Alves",
    "Vicente Lima",
    "Benjamin Rocha",

    "Eduardo Mendes",
    "Leonardo Ferreira",
    "Bruno Barbosa",
    "Guilherme Lima",
    "Henrique Rocha",
    "Diego Martins",
    "Vinicius Carvalho",
    "Daniel Almeida",
    "Caio Rodrigues",
    "João Pedro Costa"

];


const cities = [

    "São Paulo - SP",
    "Belo Horizonte - MG",
    "Rio de Janeiro - RJ",
    "Curitiba - PR",
    "Brasília - DF",
    "Salvador - BA",
    "Recife - PE",
    "Goiânia - GO",
    "Campinas - SP",
    "Uberlândia - MG"

];


function generatePerson(){

    const name =
        names[
            randomNumber(
                0,
                names.length - 1
            )
        ];

    const clean =
        name
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /\s+/g,
            "."
        );

    const cpf =
        generateCPF();

    const phone =
        `(11) 9${randomNumber(1000,9999)}-${randomNumber(1000,9999)}`;

    const email =
        `${clean}${randomNumber(1,999)}@example.test`;

    const birthYear =
        randomNumber(1985,2005);

    const cep =
        `${randomNumber(10000,99999)}-${randomNumber(100,999)}`;

    const city =
        cities[
            randomNumber(
                0,
                cities.length - 1
            )
        ];

    return {

        name,

        cpf,

        phone,

        email,

        birth:
            `${randomNumber(1,28)}/${randomNumber(1,12)}/${birthYear}`,

        cep,

        city

    };

}


/* =========================================
   TOOL EVENTS
========================================= */

const tools =
    document.querySelectorAll(".tool");


tools.forEach(
    tool => {

        tool.addEventListener(
            "click",
            () => {

                const type =
                    tool.dataset.tool;

                switch(type){

                    case "pessoa":
                        personTool();
                        break;

                    case "cpf":
                        cpfTool();
                        break;

                    case "cnpj":
                        cnpjTool();
                        break;

                    case "rg":
                        rgTool();
                        break;

                    case "cep":
                        cepTool();
                        break;

                    case "conta":
                        accountTool();
                        break;

                    case "senha":
                        passwordTool();
                        break;

                    case "base64":
                        base64Tool();
                        break;

                    case "validarcpf":
                        validateCPFTool();
                        break;

                    case "validarcnpj":
                        validateCNPJTool();
                        break;

                    case "numero":
                        numberTool();
                        break;

                    case "data":
                        dateTool();
                        break;

                }

            }
        );

    }
);


/* =========================================
   PESSOA TOOL
========================================= */

function personTool(){

    const p =
        generatePerson();

    openModal(

        "Gerador de Pessoa",

        "Dados fictícios para desenvolvimento",

        "👤",

        `

        <div class="person-card">

            <div class="avatar">
                👤
            </div>

            <div class="person-info">

                <h3>
                    ${p.name}
                </h3>

                <p>
                    ${p.email}
                </p>

            </div>

        </div>


        <div class="info-list">

            <div class="info-row">
                <span>CPF</span>
                <span>${p.cpf}</span>
            </div>

            <div class="info-row">
                <span>Telefone</span>
                <span>${p.phone}</span>
            </div>

            <div class="info-row">
                <span>E-mail</span>
                <span>${p.email}</span>
            </div>

            <div class="info-row">
                <span>Nascimento</span>
                <span>${p.birth}</span>
            </div>

            <div class="info-row">
                <span>CEP</span>
                <span>${p.cep}</span>
            </div>

            <div class="info-row">
                <span>Cidade</span>
                <span>${p.city}</span>
            </div>

        </div>


        <button
            class="generate"
            style="margin-top:18px"
            onclick="personTool()"
        >
            Gerar outra pessoa
        </button>


        <button
            class="copy"
            onclick="copyText('${p.name} | ${p.cpf} | ${p.email} | ${p.phone}',this)"
        >
            Copiar dados
        </button>

        `

    );

}


/* =========================================
   CPF TOOL
========================================= */

function cpfTool(){

    const cpf =
        generateCPF();

    openModal(

        "Gerador de CPF",

        "Número fictício para testes",

        "🪪",

        `

        <div class="result show">

            <div class="result-label">
                CPF gerado
            </div>

            <div class="result-box">

                <div class="result-value">
                    ${cpf}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText('${cpf}',this)"
            >
                Copiar CPF
            </button>


            <button
                class="generate"
                style="margin-top:10px"
                onclick="cpfTool()"
            >
                Gerar outro CPF
            </button>

        </div>

        `

    );

}


/* =========================================
   CNPJ TOOL
========================================= */

function cnpjTool(){

    const cnpj =
        generateCNPJ();

    openModal(

        "Gerador de CNPJ",

        "Número fictício para testes",

        "🏢",

        `

        <div class="result show">

            <div class="result-label">
                CNPJ gerado
            </div>

            <div class="result-box">

                <div class="result-value">
                    ${cnpj}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText('${cnpj}',this)"
            >
                Copiar CNPJ
            </button>


            <button
                class="generate"
                style="margin-top:10px"
                onclick="cnpjTool()"
            >
                Gerar outro CNPJ
            </button>

        </div>

        `

    );

}


/* =========================================
   RG
========================================= */

function rgTool(){

    const rg =
        `${randomNumber(10,99)}.${randomNumber(100,999)}.${randomNumber(100,999)}-${randomNumber(0,9)}`;

    openModal(

        "Gerador de RG",

        "Número fictício para testes",

        "🆔",

        `

        <div class="result show">

            <div class="result-label">
                RG gerado
            </div>

            <div class="result-box">

                <div class="result-value">
                    ${rg}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText('${rg}',this)"
            >
                Copiar RG
            </button>


            <button
                class="generate"
                style="margin-top:10px"
                onclick="rgTool()"
            >
                Gerar outro RG
            </button>

        </div>

        `

    );

}


/* =========================================
   CEP
========================================= */

function cepTool(){

    const cep =
        `${randomNumber(10000,99999)}-${randomNumber(100,999)}`;

    openModal(

        "Gerador de CEP",

        "CEP fictício para testes",

        "📍",

        `

        <div class="result show">

            <div class="result-label">
                CEP gerado
            </div>

            <div class="result-box">

                <div class="result-value">
                    ${cep}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText('${cep}',this)"
            >
                Copiar CEP
            </button>


            <button
                class="generate"
                style="margin-top:10px"
                onclick="cepTool()"
            >
                Gerar outro CEP
            </button>

        </div>

        `

    );

}


/* =========================================
   CONTA BANCÁRIA
========================================= */

function accountTool(){

    const banks = [

        "Banco de Testes",
        "Dev Bank",
        "Sandbox Bank",
        "API Bank"

    ];

    const bank =
        banks[
            randomNumber(
                0,
                banks.length - 1
            )
        ];

    const agency =
        String(
            randomNumber(1,9999)
        ).padStart(4,"0");

    const account =
        `${randomNumber(10000,99999)}-${randomNumber(0,9)}`;

    openModal(

        "Gerador de Conta Bancária",

        "Dados fictícios para testes",

        "🏦",

        `

        <div class="info-list">

            <div class="info-row">
                <span>Banco</span>
                <span>${bank}</span>
            </div>

            <div class="info-row">
                <span>Agência</span>
                <span>${agency}</span>
            </div>

            <div class="info-row">
                <span>Conta</span>
                <span>${account}</span>
            </div>

        </div>


        <button
            class="copy"
            onclick="copyText('${bank} | Agência ${agency} | Conta ${account}',this)"
        >
            Copiar dados
        </button>


        <button
            class="generate"
            style="margin-top:10px"
            onclick="accountTool()"
        >
            Gerar outra conta
        </button>

        `

    );

}


/* =========================================
   SENHA
========================================= */

function passwordTool(){

    openModal(

        "Gerador de Senha",

        "Crie senhas aleatórias",

        "🔐",

        `

        <div class="form-group">

            <label>
                Tamanho
            </label>

            <input
                id="passLength"
                type="number"
                value="16"
                min="4"
                max="100"
            >

        </div>


        <div class="form-group">

            <label>
                Caracteres
            </label>

            <select id="passType">

                <option value="all">
                    Letras + números + símbolos
                </option>

                <option value="letters">
                    Apenas letras
                </option>

                <option value="numbers">
                    Apenas números
                </option>

                <option value="lettersnumbers">
                    Letras + números
                </option>

            </select>

        </div>


        <button
            class="generate"
            onclick="generatePassword()"
        >
            Gerar senha
        </button>


        <div id="passwordResult"></div>

        `

    );

}


function generatePassword(){

    const length =
        Number(
            document.getElementById(
                "passLength"
            ).value
        );

    const type =
        document.getElementById(
            "passType"
        ).value;

    let chars = "";

    if(type === "all"){

        chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_-+=";

    }

    if(type === "letters"){

        chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    }

    if(type === "numbers"){

        chars =
            "0123456789";

    }

    if(type === "lettersnumbers"){

        chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    }

    let password = "";

    for(
        let i = 0;
        i < length;
        i++
    ){

        password +=
            chars[
                randomNumber(
                    0,
                    chars.length - 1
                )
            ];

    }

    document.getElementById(
        "passwordResult"
    ).innerHTML = `

        <div class="result show">

            <div class="result-label">
                Senha gerada
            </div>

            <div class="result-box">

                <div class="result-value">
                    ${password}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText('${password}',this)"
            >
                Copiar senha
            </button>

        </div>

    `;

}


/* =========================================
   BASE64
========================================= */

function base64Tool(){

    openModal(

        "Base64 Encoder / Decoder",

        "Codificação e decodificação de texto",

        "🔗",

        `

        <div class="form-group">

            <label>
                Texto
            </label>

            <textarea
                id="baseInput"
                placeholder="Digite ou cole seu texto..."
            ></textarea>

        </div>


        <div class="row">

            <button
                class="generate"
                onclick="encodeBase64()"
            >
                Codificar
            </button>


            <button
                class="generate"
                onclick="decodeBase64()"
            >
                Decodificar
            </button>

        </div>


        <div id="baseResult"></div>

        `

    );

}


function encodeBase64(){

    const value =
        document.getElementById(
            "baseInput"
        ).value;

    const result =
        btoa(
            unescape(
                encodeURIComponent(value)
            )
        );

    showBaseResult(result);

}


function decodeBase64(){

    const value =
        document.getElementById(
            "baseInput"
        ).value;

    try{

        const result =
            decodeURIComponent(
                escape(
                    atob(value)
                )
            );

        showBaseResult(result);

    }catch{

        showBaseResult(
            "Texto Base64 inválido."
        );

    }

}


function showBaseResult(result){

    document.getElementById(
        "baseResult"
    ).innerHTML = `

        <div class="result show">

            <div class="result-label">
                Resultado
            </div>

            <div class="result-box">

                <div class="result-value">
                    ${escapeHTML(result)}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText(\`${result.replace(/`/g,"\\`")}\`,this)"
            >
                Copiar resultado
            </button>

        </div>

    `;

}


/* =========================================
   VALIDAR CPF
========================================= */

function validateCPFTool(){

    openModal(

        "Validador de CPF",

        "Verifique a estrutura do CPF",

        "✓",

        `

        <div class="form-group">

            <label>
                CPF
            </label>

            <input
                id="cpfValidateInput"
                placeholder="000.000.000-00"
            >

        </div>


        <button
            class="generate"
            onclick="runCPFValidation()"
        >
            Validar CPF
        </button>


        <div id="cpfValidationResult"></div>

        `

    );

}


function runCPFValidation(){

    const value =
        document.getElementById(
            "cpfValidateInput"
        ).value;

    const valid =
        validateCPF(value);

    document.getElementById(
        "cpfValidationResult"
    ).innerHTML = `

        <div class="result show">

            <div class="result-box">

                <div
                    class="result-value"
                    style="color:${valid ? "var(--success)" : "var(--danger)"}"
                >
                    ${valid
                        ? "✓ CPF válido"
                        : "✕ CPF inválido"
                    }
                </div>

            </div>

        </div>

    `;

}


/* =========================================
   VALIDAR CNPJ
========================================= */

function validateCNPJTool(){

    openModal(

        "Validador de CNPJ",

        "Verifique a estrutura do CNPJ",

        "✓",

        `

        <div class="form-group">

            <label>
                CNPJ
            </label>

            <input
                id="cnpjValidateInput"
                placeholder="00.000.000/0000-00"
            >

        </div>


        <button
            class="generate"
            onclick="runCNPJValidation()"
        >
            Validar CNPJ
        </button>


        <div id="cnpjValidationResult"></div>

        `

    );

}


function runCNPJValidation(){

    const value =
        document.getElementById(
            "cnpjValidateInput"
        ).value;

    const valid =
        validateCNPJ(value);

    document.getElementById(
        "cnpjValidationResult"
    ).innerHTML = `

        <div class="result show">

            <div class="result-box">

                <div
                    class="result-value"
                    style="color:${valid ? "var(--success)" : "var(--danger)"}"
                >
                    ${valid
                        ? "✓ CNPJ válido"
                        : "✕ CNPJ inválido"
                    }
                </div>

            </div>

        </div>

    `;

}


/* =========================================
   NÚMERO
========================================= */

function numberTool(){

    openModal(

        "Gerador de Número",

        "Número aleatório",

        "🔢",

        `

        <div class="row">

            <div class="form-group">

                <label>
                    Mínimo
                </label>

                <input
                    id="numMin"
                    type="number"
                    value="1"
                >

            </div>


            <div class="form-group">

                <label>
                    Máximo
                </label>

                <input
                    id="numMax"
                    type="number"
                    value="100"
                >

            </div>

        </div>


        <button
            class="generate"
            onclick="generateRandomNumber()"
        >
            Gerar número
        </button>


        <div id="numberResult"></div>

        `

    );

}


function generateRandomNumber(){

    const min =
        Number(
            document.getElementById(
                "numMin"
            ).value
        );

    const max =
        Number(
            document.getElementById(
                "numMax"
            ).value
        );

    if(min > max){

        document.getElementById(
            "numberResult"
        ).innerHTML = `

            <div class="result show">

                <div class="result-box">

                    <div
                        class="result-value"
                        style="color:var(--danger)"
                    >
                        O mínimo não pode ser maior que o máximo.
                    </div>

                </div>

            </div>

        `;

        return;

    }

    const number =
        randomNumber(min,max);

    document.getElementById(
        "numberResult"
    ).innerHTML = `

        <div class="result show">

            <div class="result-box">

                <div
                    class="result-value"
                    style="font-size:30px;text-align:center"
                >
                    ${number}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText('${number}',this)"
            >
                Copiar número
            </button>

        </div>

    `;

}


/* =========================================
   DATA
========================================= */

function dateTool(){

    openModal(

        "Gerador de Data",

        "Gere uma data aleatória",

        "📅",

        `

        <div class="row">

            <div class="form-group">

                <label>
                    Data inicial
                </label>

                <input
                    id="dateStart"
                    type="date"
                >

            </div>


            <div class="form-group">

                <label>
                    Data final
                </label>

                <input
                    id="dateEnd"
                    type="date"
                >

            </div>

        </div>


        <button
            class="generate"
            onclick="generateRandomDate()"
        >
            Gerar data
        </button>


        <div id="dateResult"></div>

        `

    );

    const today =
        new Date();

    const year =
        today.getFullYear();

    document.getElementById(
        "dateStart"
    ).value =
        `${year}-01-01`;

    document.getElementById(
        "dateEnd"
    ).value =
        `${year}-12-31`;

}


function generateRandomDate(){

    const start =
        new Date(
            document.getElementById(
                "dateStart"
            ).value
        );

    const end =
        new Date(
            document.getElementById(
                "dateEnd"
            ).value
        );

    if(
        isNaN(start.getTime()) ||
        isNaN(end.getTime()) ||
        start > end
    ){

        document.getElementById(
            "dateResult"
        ).innerHTML = `

            <div class="result show">

                <div class="result-box">

                    <div
                        class="result-value"
                        style="color:var(--danger)"
                    >
                        Informe um intervalo de datas válido.
                    </div>

                </div>

            </div>

        `;

        return;

    }

    const time =
        start.getTime() +
        Math.random() *
        (
            end.getTime() -
            start.getTime()
        );

    const date =
        new Date(time);

    const result =
        date.toLocaleDateString(
            "pt-BR"
        );

    document.getElementById(
        "dateResult"
    ).innerHTML = `

        <div class="result show">

            <div class="result-box">

                <div
                    class="result-value"
                    style="font-size:28px;text-align:center"
                >
                    ${result}
                </div>

            </div>


            <button
                class="copy"
                onclick="copyText('${result}',this)"
            >
                Copiar data
            </button>

        </div>

    `;

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(text){

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================
   BUSCA
========================================= */

const search =
    document.getElementById(
        "search"
    );


search.addEventListener(
    "input",
    function(){

        const value =
            this.value
            .toLowerCase()
            .trim();

        tools.forEach(
            tool => {

                const text =
                    (
                        tool.innerText +
                        " " +
                        tool.dataset.search
                    )
                    .toLowerCase();

                tool.style.display =
                    text.includes(value)
                    ? ""
                    : "none";

            }
        );

    }
);

const API_KEY = "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";
const inputElement = document.querySelector("input");
const imageSection = document.querySelector('.image-section');
const loader = document.querySelector('#loader');
const changeTextButton = document.querySelector('#changeTextButton');
const paragraph = document.querySelector('#paragraph');
const visual = document.querySelector('#visual');

var exoPlanetName; // Declare the variable globally at the top of your script

var introInput = document.getElementById("introInput");
introInput.addEventListener("input", function() {
    exoPlanetName = introInput.value; // Assign a value to the global variable
    console.log(exoPlanetName); // This will print the name entered in the input box
});




// Obtén el elemento del título
const titleElement = document.querySelector('header h1');
const title2Element = document.querySelector('header h2');
const Element = document.querySelector('header p');

// Obtén el elemento del input y el contenedor
const inputContainer = document.querySelector('.input-container');
const inputContainer1 = document.querySelector('.input-container1');
const inputContainer2 = document.querySelector('.input-container2');
const inputContainer4 = document.querySelector('.input-container4');

const inputValues = {
    value1: null,
    value2: null,
    value3: null,
    value4: null,
  };
  

  const array1 = ["una breve introduccion","Please give me your Exo-Planets radius", "Please give me your Exo-Planets mass", "Please give me your Exo-Planets distance to the sun",'Your planet is ready! '];
  const array2 = ["para este trabajo se considero que el exoplaneta orbitaria una estrella, cuenta con atsmosfera, campo magnetico, una excentricdad muy parecida a un circulo...",'El radio de la Tierra es de aproximadamente 6,371 kilómetros. Este es relativamente pequeño; por ejemplo, Júpiter tiene un radio más de 11 veces mayor.','La masa se expresa comúnmente en unidades de masa terrestre (la masa de la Tierra), pero también puede ser medida en kilogramos u otras unidades de masa. La masa de un planeta influye en su gravedad, su órbita alrededor de una estrella y su capacidad para retener una atmósfera. Es uno de los factores clave que determina la naturaleza y el comportamiento de un cuerpo celeste en el espacio.','La distancia es un factor crucial en la determinación de las condiciones ambientales y climáticas en el planeta. Puede influir en la temperatura, la radiación recibida, y la posibilidad de agua líquida en su superficie, lo cual son factores clave para la habitabilidad.', "No olvides compartirlo!!"]
  let i = 0;
  
  
  // Cuando se haga clic en cualquier parte de la página
  changeTextButton.addEventListener('click', function() {
      console.log('Botón clickeado');
      // Cambia el texto del título
      titleElement.textContent = array1[i];
      title2Element.textContent = "";
      Element.textContent = array2[i];
  
      
      if (i==0) {
        introInputContainer.style.display = 'block'; // show the input box for this section
        inputContainer1.style.display = 'none';
        inputContainer2.style.display = 'none';
        inputContainer.style.display = 'none';
        inputContainer4.style.display = 'none';
    }
      if (i==1) {
        introInputContainer.style.display = 'none'
      inputContainer1.style.display = 'block';
      inputContainer2.style.display = 'none';
      inputContainer.style.display = 'none';
      inputContainer4.style.display = 'none';
      mostrarValor('output1', 'rango1'); // Para la primera pregunta
      
      }
      if (i==2) {
        introInputContainer.style.display = 'none'
          inputContainer1.style.display = 'none';
          inputContainer2.style.display = 'block';
          inputContainer.style.display = 'none';
          inputContainer4.style.display = 'none';
          mostrarValor('output2', 'rango2'); // Para la segunda pregunta
      }
      if (i==3) {
        introInputContainer.style.display = 'none'
          inputContainer1.style.display = 'none';
          inputContainer2.style.display = 'none';
          inputContainer.style.display = 'block';
          inputContainer4.style.display = 'none';
          mostrarValor('output3', 'rango3'); // Para la tercera pregunta
      }
  
      if (i==4) {
        introInputContainer.style.display = 'none'
          inputContainer1.style.display = 'none';
          inputContainer2.style.display = 'none';
          inputContainer.style.display = 'none';
          inputContainer4.style.display = 'none';
          getImages();
      }
  

    // Dale el foco al input
    inputElement.focus();
    i += 1;
    
});







const getImages = async() => {
    changeTextButton.style.display = 'none';
    loader.style.display = 'block';
    var resultado = {};
    var score1 = null;
    var score2 = null;
    var score3 = null;

    var Gravedad = (inputValues.value2 * 6.67430e-11) / Math.pow(inputValues.value1, 2) / 9.8;

    if (Gravedad >= 0.7 && Gravedad <= 1.3) {
        resultado.G = "la gravedad es aceptable ya que esta dentro de los parametros que el cuerpo humano podría aguantar ";
        var habitable1 = true;
        score1 = (Gravedad <= 1) ? (Gravedad - 0.7) * 100 / (1 - 0.7) : (1.3 - Gravedad) * 100 / (1.3 - 1);
    } else if (Gravedad < 0.75) {
        resultado.G = "Su gravedad del planeta lo hace inhabitable ya que es menor que los parámetros que el cuerpo humano podría aguantar. ";
        var habitable1 = false;
    } else {
        resultado.G = "Su gravedad del planeta lo hace inhabitable ya que es mayor que los parámetros que el cuerpo humano podría aguantar. ";
        var habitable1 = false;
    }

    resultado.Gravedad = Gravedad;

    if (inputValues.value3 >= 0.75 && inputValues.value3 <= 1.77) {
        resultado.temp = "Al encontrarse en la zona habitable, es posible que exista agua líquida en el planeta en forma de grandes océanos como en la Tierra, lo que podría indicar la posibilidad de existencia de vida en el exoplaneta. ";
        var habitable2 = true;
        score2 = (inputValues.value3 <= 1) ? (inputValues.value3 - 0.75) * 100 / (1 - 0.75) : (1.77 - inputValues.value3) * 100 / (1.77 - 1);
    } else if (inputValues.value3 < 0.75) {
        resultado.temp = "Al encontrarse más allá de la zona habitable, es posible que exista agua pero congelada en el planeta, lo que imposibilita la posibilidad de existencia de vida en el exoplaneta. ";
        var habitable2 = false;
    } else {
        resultado.temp = "Al encontrarse más cerca del sol que la zona habitable, es posible que exista agua pero en forma de vapor en el planeta, temperaturas que imposibilitan la posibilidad de existencia de vida en el exoplaneta. ";
        var habitable2 = false;
    }

    var densidad = inputValues.value2 / ((4 / 3) * 3.1416 * Math.pow(inputValues.value1, 3) * 1000);

    if (densidad >= 3.5) {
        resultado.tipo = "Por otra parte, el exoplaneta es Rocoso, lo que posibilita la existencia de vida pero no la garantiza. ";
        var habitable3 = true;
        score3 = 100;
    } else {
        resultado.tipo = "Por otra parte, el exoplaneta es Gaseoso, por ende, es imposible que exista vida en él. ";
        var habitable3 = false;
        score3 = 100;
    }

    resultado.score = (score1 + score2 + score3) / 3;

    if (habitable1 && habitable2 && habitable3) {
        resultado.habitable = "En conclusión, el exoplaneta tiene muy buenos indicios de ser habitable.";
    } else {
        resultado.habitable = "En conclusión, el exoplaneta es inhabitable.";
    }

    var prompt1 = resultado.temp + resultado.tipo + resultado.habitable;
    var prompt2 = "explicame en 500 palabras como seria vivir en este planeta en caso de ser posible y en caso de que no por que no: " + resultado.temp + resultado.G + resultado.tipo + resultado.habitable;
    
    console.log(prompt2)
    cambiarColorFondo("#001220")
    const response2 = await getCompletion(prompt2);

    var displayExoPlanetName = document.createElement("h1");
    displayExoPlanetName.textContent = exoPlanetName; 
    displayExoPlanetName.style.color = "white"; // or any other styling you want
    paragraph.parentElement.insertBefore(displayExoPlanetName, paragraph);


    
    console.log(response2.choices[0].text)
    paragraph.textContent = response2.choices[0].text;
    paragraph.style.backgroundColor = "white";
    paragraph.style.backgroundColor = "white"; // Set background to white
    paragraph.style.padding = "10px";          // Add padding
    paragraph.style.borderRadius = "10px";     // Round the corners for a "bubbly" effect
    paragraph.style.fontFamily = "tahamo"; // Use Comic Sans as an example of a bubbly font
    paragraph.style.fontWeight = "bold";  


    console.log(response2)


    
    const options= {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY} ` ,
            'Content-Type' : "application/json"
        },
        body: JSON.stringify( {
            //"prompt": inputElement.value,
            "prompt": prompt1,
            "n": 1,
            "size": "1024x1024"
        })
    }
    
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        const data = await response.json();
        
        data?.data.forEach(imageObject => {
            const ImageContainer = document.createElement('div');
            ImageContainer.classList.add('image-cointainer');
            const imageElement = document.createElement('img');
            imageElement.setAttribute('src', imageObject.url);
            ImageContainer.append(imageElement);
            imageSection.append(ImageContainer);
            imageElement.style.borderRadius='25px';
        });
        const imageURL = data.data[0].url;
        console.log(imageURL)
     

    } catch (error){
        console.error(error);
    }

    loader.style.display = 'none'; // Ocultar el elemento de carga después de obtener las imágenes
}

function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
    visual.style.display = 'none';
}


function mostrarValor(outputId, rangeId) {
    var valor = document.getElementById(rangeId).value;
    document.getElementById(outputId).textContent = valor;
  
    if (rangeId === 'rango1') {
      inputValues.value1 = parseFloat(valor);
    } else if (rangeId === 'rango2') {
      inputValues.value2 = parseFloat(valor);
    } else if (rangeId === 'rango3') {
      inputValues.value3 = parseFloat(valor);
    } else if (rangeId === 'rango4') {
        inputValues.value4 = parseFloat(valor);
      }
    console.log(inputValues)
  }

  async function getCompletion(prompt1) {
    const response = await fetch(`https://api.openai.com/v1/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-instruct",
        // prompt: "give a random example of programming language",
        prompt: prompt1,
        max_tokens: 600,
      }),
    });
  
    const data = await response.json();
    // console.log(data)
    return data;
  }
  

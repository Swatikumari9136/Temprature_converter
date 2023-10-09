let celsius = document.getElementById('cal');
let fahrenheit = document.getElementById('fahre');
let kelvin =  document.getElementById('kel');


celsius.oninput = function () {
          let f = (parseFloat(celsius.value) * 9) / 5 + 32;
          fahrenheit.value = parseFloat(f.toFixed(2));

          let k = (parseFloat(celsius.value) + 273.15);
          kelvin.value = parseFloat(k.toFixed(2));
}

      fahrenheit.oninput = function () {
          let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
          celsius.value = parseFloat(c.toFixed(2));

          let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
          kelvin.value = parseFloat(k.toFixed(2));
      }

      kelvin.oninput = function () {
          let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
          fahrenheit.value = parseFloat(f.toFixed(2));

          let c = (parseFloat(kelvin.value) - 273.15);
          celsius.value = parseFloat(c.toFixed(2));
      }


// ----------------------------------First F-C ----------------------------------------------
                    // let Fahrenheit1 = document.getElementById("fahre");
                    // let Celsius1 = document.getElementById("cels");
                    // Fahrenheit1.oninput =  function(){
                    //           let c = (parseFloat(Fahrenheit1.value)-32)*5/9;
                    //           Celsius1.value = parseFloat(c.toFixed(2));
                    // };
                    // Celsius1.oninput =  function(){
                    //           let f = (parseFloat(Celsius1.value)*9/5+32);
                    //           Fahrenheit1.value = parseFloat(f.toFixed(2));        
                    // };

 // ----------------------------------Second C-K ----------------------------------------------

                    // let Celsius2 = document.getElementById("cel");
                    // let Kelvin2 = document.getElementById("kel");

                    // Celsius2.oninput =  function(){
                    //           let k = (parseFloat(Celsius2.value)+273.15);
                    //           Kelvin2.value = parseFloat(k.toFixed(2));
                    // }
                    // Kelvin2.oninput =  function(){
                    //           let c = (parseFloat(Kelvin2.value)-273.15);
                    //           Celsius2.value = parseFloat(c.toFixed(2));
                    // }

// ----------------------------------last F-K ----------------------------------------------
                    // let Fahrenheit3 = document.getElementById("fa");
                    // let Kelvin3 = document.getElementById("ke"); 
           
                    // Fahrenheit3.oninput =  function(){
                    //           let k = (parseFloat(Fahrenheit3.value)-32)*5/9+273.15;
                    //           Kelvin3.value = parseFloat(k.toFixed(2));
                    // };
                    // Kelvin3.oninput =  function(){
                    //           let f = (parseFloat(Kelvin3.value)-273.15)*9/5+32;
                    //           Fahrenheit3.value = parseFloat(f.toFixed(2));        
                    // };  

                    
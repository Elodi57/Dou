class Datos{
    nombre;
    energia = 100;

    getNombre(){
      return this.nombre;
    }

    getEnergia(){
      return this.energia;
    }

    setNombre(nombre){
      this.nombre = nombre;
    }
    
    setEnergia(){
      this.energia = energia;
    }

    correr(energiaConsumida){
      if (this.energia >= energiaConsumida){
          this.energia -= energiaConsumida;
          return "Estoy haciendo speed run";
      } else return "Estoy cansado fefe";
    }

    dormir(energiaRecuperada){
        this.energia += energiaRecuperada;
        if (this.energia > 100){
            this.energia = 100;
        }
        return "ZZZ";
    }

    comer(energiaRecuperada){
      this.energia += energiaRecuperada;
      if (this.energia > 100){
          this.energia = 100;
          return "toi lleno loko";
      }
      return "ñomi";
    }

    jugar(energiaConsumida){
      if (this.energia >= energiaConsumida){
          this.energia -= energiaConsumida;
          return "yupi, estoy jugando";
      } else return "me canse loko";
    }


  };
  
  var datos = new Datos();
  var bandera = 0;

  document.addEventListener("DOMContentLoad", function() {
    refrescar();
  });


  function refrescar(){
    document.getElementById('nombre').textContent = datos.getNombre();
    document.getElementById('energia').textContent = datos.getEnergia();

    if (bandera != 1){
     if (datos.getEnergia() > 50){
        document.getElementById('dou-feliz').style.display = 'flex';
        document.getElementById('dou-triste').style.display = 'none';
        document.getElementById('dou-dormido').style.display = 'none';
        document.getElementById('dou-comiendo').style.display = 'none';
      }
  
    else if (datos.getEnergia() > 25){
      document.getElementById('dou-feliz').style.display = 'none';
      document.getElementById('dou-triste').style.display = 'flex';
      document.getElementById('dou-dormido').style.display = 'none';
      document.getElementById('dou-comiendo').style.display = 'none';
    }
  
    else if (datos.getEnergia() > 0){
      document.getElementById('dou-feliz').style.display = 'none';
      document.getElementById('dou-triste').style.display = 'flex';
      document.getElementById('dou-dormido').style.display = 'none';
      document.getElementById('dou-comiendo').style.display = 'none';
      bandera = 1;
    }
    }

    else if (datos.getEnergia() == 100){
        bandera = 0;
    }

  }

  function enviarDatos() {
    document.getElementById('enviar').style.display = 'none';
    document.getElementById('mostrar').style.display = 'flex';
    datos.setNombre(document.getElementById("nombre").value);
  }
  
  function mostrarDatos() {
    document.getElementById('enviar').style.display = 'flex';
    document.getElementById('mostrar').style.display = 'none';
    var datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = "Hola, mi nombre es " + datos.getNombre();
  }

  function correr() {
    alert (datos.correr(25));
    refrescar();
  }

  function dormir() {
    alert (datos.dormir(25));
    refrescar();
    document.getElementById('dou-feliz').style.display = 'none';
    document.getElementById('dou-triste').style.display = 'none';
    document.getElementById('dou-dormido').style.display = 'flex';
  }

  function comer() {
    alert (datos.comer(25));
      refrescar();
        document.getElementById('dou-feliz').style.display = 'none';
        document.getElementById('dou-triste').style.display = 'none';
        document.getElementById('dou-dormido').style.display = 'none';
        document.getElementById('dou-comiendo').style.display = 'flex';
      if (datos.getEnergia() == 100){
        refrescar();
        document.getElementById('dou-feliz').style.display = 'flex';
        document.getElementById('dou-triste').style.display = 'none';
        document.getElementById('dou-dormido').style.display = 'none';
        document.getElementById('dou-comiendo').style.display = 'none';
      }

  }

  function jugar() {
    alert (datos.jugar(25));
    refrescar();
  }



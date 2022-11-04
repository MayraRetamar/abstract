//Ejercicio 2
//• Iniciar proyecto NPM
//• Implementar las siguientes clases con las variables y métodos que crea necesarios:• AutoCiudad •AutoDeportivo •Camioneta
//• Abstraer elementos en común entre dichas 
//clases → pasarlos a una clase abstracta, y que las tres clases extiendan de ella.

abstract class Rodado { 
    protected velocidadActual : number;
    protected lucesEncendidas : boolean;
    protected nivelTanque : number;
    private estaEncendido : boolean;
    private frenado : boolean;

    public constructor() {
        this.velocidadActual = 0;
        this.lucesEncendidas = true;
        this.nivelTanque = 0;
        this.estaEncendido = false;
        this.frenado = true;
    }

    abstract acelerar() : void;

    abstract encenderLuces() : void;

    abstract cargarCombustible() : void;

    public arrancar() : void { 
        this.estaEncendido = true;
    }
    public apagar() : void { 
        this.estaEncendido = false;
    }
    public frenar() : void { 
        this.frenado = true;
    }

}

class AutoCiudad extends Rodado { 
    public acelerar(): void {
        this.velocidadActual += 35;
    }
    public encenderLuces(): void {
        this.lucesEncendidas = true;
    }
    public cargarCombustible(): void {
        this.nivelTanque = 50;
    }
}

let nuevoAutoCiudad : AutoCiudad = new AutoCiudad();

console.log(nuevoAutoCiudad);
nuevoAutoCiudad.arrancar();
nuevoAutoCiudad.encenderLuces();
nuevoAutoCiudad.acelerar();
nuevoAutoCiudad.cargarCombustible();
console.log(nuevoAutoCiudad);


class AutoDeportivo extends Rodado { 
    public acelerar(): void {
        this.velocidadActual += 100;
    }
    public encenderLuces(): void {
        this.lucesEncendidas = false;
    }
    public cargarCombustible(): void {
        this.nivelTanque = 80;
    }
}

let nuevoDeportivo : AutoDeportivo = new AutoDeportivo

console.log(nuevoDeportivo); 
nuevoDeportivo.acelerar();
nuevoDeportivo.cargarCombustible();
nuevoDeportivo.encenderLuces();
console.log(nuevoDeportivo);

class Camioneta extends Rodado { 
    public acelerar(): void {
        this.velocidadActual += 85;
    }
    public encenderLuces(): void {
        this.lucesEncendidas = true;
    }
    public cargarCombustible(): void {
        this.nivelTanque = 30;
    }
   
}

let nuevaCamioneta : Camioneta = new Camioneta;

console.log(nuevaCamioneta);
nuevaCamioneta.acelerar();
nuevaCamioneta.encenderLuces();
nuevaCamioneta.cargarCombustible();
console.log(nuevaCamioneta);

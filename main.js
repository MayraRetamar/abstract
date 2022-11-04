//Ejercicio 2
//• Iniciar proyecto NPM
//• Implementar las siguientes clases con las variables y métodos que crea necesarios:• AutoCiudad •AutoDeportivo •Camioneta
//• Abstraer elementos en común entre dichas 
//clases → pasarlos a una clase abstracta, y que las tres clases extiendan de ella.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rodado = /** @class */ (function () {
    function Rodado() {
        this.velocidadActual = 0;
        this.lucesEncendidas = true;
        this.nivelTanque = 0;
        this.estaEncendido = false;
        this.frenado = true;
    }
    Rodado.prototype.arrancar = function () {
        this.estaEncendido = true;
    };
    Rodado.prototype.apagar = function () {
        this.estaEncendido = false;
    };
    Rodado.prototype.frenar = function () {
        this.frenado = true;
    };
    return Rodado;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidadActual += 35;
    };
    AutoCiudad.prototype.encenderLuces = function () {
        this.lucesEncendidas = true;
    };
    AutoCiudad.prototype.cargarCombustible = function () {
        this.nivelTanque = 50;
    };
    return AutoCiudad;
}(Rodado));
var nuevoAutoCiudad = new AutoCiudad();
console.log(nuevoAutoCiudad);
nuevoAutoCiudad.arrancar();
nuevoAutoCiudad.encenderLuces();
nuevoAutoCiudad.acelerar();
nuevoAutoCiudad.cargarCombustible();
console.log(nuevoAutoCiudad);
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 100;
    };
    AutoDeportivo.prototype.encenderLuces = function () {
        this.lucesEncendidas = false;
    };
    AutoDeportivo.prototype.cargarCombustible = function () {
        this.nivelTanque = 80;
    };
    return AutoDeportivo;
}(Rodado));
var nuevoDeportivo = new AutoDeportivo;
console.log(nuevoDeportivo);
nuevoDeportivo.acelerar();
nuevoDeportivo.cargarCombustible();
nuevoDeportivo.encenderLuces();
console.log(nuevoDeportivo);
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidadActual += 85;
    };
    Camioneta.prototype.encenderLuces = function () {
        this.lucesEncendidas = true;
    };
    Camioneta.prototype.cargarCombustible = function () {
        this.nivelTanque = 30;
    };
    return Camioneta;
}(Rodado));
var nuevaCamioneta = new Camioneta;
console.log(nuevaCamioneta);
nuevaCamioneta.acelerar();
nuevaCamioneta.encenderLuces();
nuevaCamioneta.cargarCombustible();
console.log(nuevaCamioneta);

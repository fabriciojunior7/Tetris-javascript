function Bloco(tipo){
	
	//ATRIBUTOS
	this.tipo = tipo;
	this.congelado = false;
	this.pontos = [0, 1, 10, 11];

	//METODOS
	this.descer = function(){
		this.congelar();
		if(!this.congelado){
			for(var i=0; i<this.pontos.length; i++){
				this.pontos[i] += 10;
			}
		}
	}

	this.direita = function(){
		if(!this.congelado){
			for(var i=0; i<this.pontos.length; i++){
				this.pontos[i] += 1;
			}
		}
	}

	this.esquerda = function(){
		if(!this.congelado){
			for(var i=0; i<this.pontos.length; i++){
				this.pontos[i] -= 1;
			}
		}
	}

	this.congelar = function(){
		for(var i=0; i<this.pontos.length; i++){
			if(this.pontos[i] >= 190){
				this.congelado = true;
				break;
			}
		}
	}

}
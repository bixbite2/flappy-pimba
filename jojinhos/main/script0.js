let canvas, ctx, ALTURA, LARGURA, frames = 0;
chao = {
    y: 550,
    altura: 50,
    cor: "#ffdf70",
    
    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(0, this.y, LARGURA, this.altura);
    }
},

bloco = {
    altura: 50,
    largura: 50,
    cor: "darkred",
    y: 10,
    gravidade: .4,
    velocidade: 0,
    forca: 7,
    inerciaY: false,
    pula: function() {
        if(this.inerciaY) {
            this.y -= 10;
        }
        if(this.y - this.altura > 0) {
            this.velocidade -= this.forca;
        }else{
            this.y = 0;
        }
    },
    atualiza: function() {
        if(this.y + this.altura < 550) {
            this.velocidade += this.gravidade;
            this.y += this.velocidade;
        }else {
            this.velocidade = 0;
            this.inerciaY = true;
            // console.log('Desabou!');
        }
    },
    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(50, this.y, this.largura, this.altura);
    },
}

function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if(LARGURA >= 500) {
        LARGURA = 600;
        ALTURA = 600;
    }
    
    let canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    document.addEventListener("mousedown", function clique(event) {
        event.preventDefault();
        bloco.pula();
    });

    roda();
}

function roda() {
    atualiza()
    desenha();

    window.requestAnimationFrame(roda);
}
function atualiza () {
    frames++;
    bloco.atualiza();
}

function desenha() {
    ctx.fillStyle = "#50beff";
    ctx.fillRect(0, 0, LARGURA, ALTURA);
    chao.desenha();
    bloco.desenha();
}

// main inicia o game
main();
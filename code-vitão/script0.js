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
    gravidade: 1.5,
    velocidade: 0,
    
    atualiza: function() {
        this.velocidade += this.gravidade;
        this.y += this.velocidade;
    },
    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(50, this.y, this.largura, this.altura);
    }
}

function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;
    let atualizaY = (bloco.velocidade+bloco.gravidade);

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
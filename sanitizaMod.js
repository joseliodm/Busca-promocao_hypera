const saninitizaMod = {
    url:(variavel) => {
        const variavelVirgula = variavel.replace(/,/gi,'');
        const variavelChEsq = variavelVirgula.replace(/\[/gi,'');
        const variavelDir = variavelChEsq.replace(/\]/gi,'');
        const variavelAspas = variavelDir.replace(/"/gi,'');
        return variavelAspas
    },
    relatorio:(varelatorio) => {
        const relatorioSanitizado = saninitizaMod.url(varelatorio);
        const relatorioSanitizadoFinal = relatorioSanitizado.replace(/\//gi,'-');
        return relatorioSanitizadoFinal
    }
}

module.exports = saninitizaMod;
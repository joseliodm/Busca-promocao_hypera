const puppeter = require('puppeteer');;
const mysql = require('mysql')
const ProgressBar = require('electron-progressbar');

//data e hora
async function rpaMod()  {
//Barra de progresso

  const progressBar = new ProgressBar({
    indeterminate: false,
    text: 'Buscando promoções!!!...',
    detail: 'Tempo estimado 20 minutos...', 
});
    progressBar
    .on('completed', () => {
        console.log('Busca Completa!');
        progressBar.detail = 'Tarefa concluida.Saindo...';
    })
    .on('aborted', () => {
        console.log('Tarefa abortada!');
        progressBar.detail = 'Tarefa abortada.Saindo...';
    })
    .on('progress', (Value) => {
        progressBar.detail = `Valor ${Value} de ${progressBar.getOptions().maxValue}%`;
    })


const browser = await puppeter.launch({ 
    headless: false,
    defaultViewport: null,
    args: [
      '--window-size=500,800',
    ]
});

const page = await browser.newPage();     
//página de login

// Acessa o site
page.setDefaultNavigationTimeout(0); //Acessa a página sem esperar o timeout
await page.goto('https://www.parceirohypera.com.br/Campanha');
await page.click('#prosseguirPolitCookie');
await page.waitForSelector('input[name="usr"]');
await page.type('input[name="usr"]', '15986565000167',{delay:100}); // Email
await page.type('input[name="psw"]', 'plus2021', {delay:100}); // Senha

await page.keyboard.press('Enter');  // Clica no botão de login

const fileData = []
const fileData2 = []
const fileData3 = []
const fileData4 = []
progressBar.detail = 'Página de promoções';
//repetição de acesso aos links iniciando em 000
await page.waitForTimeout('12000');
for (let i = 0; i < 10; i++) {
  progressBar.detail = `${i} paginas de promoções buscadas`;
  page.waitForTimeout('2000');
if ( await page.$(`#\\33 00${i} > div > a`) === null) {

} else {
  
    await page.click(`#\\33 00${i} > div > a`); 
    await page.waitForTimeout('2000');
        const nome = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > a').innerText),
        ]
        const codigo = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > div.mb-3').innerText),
        ]
        const preco = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > div.mb-1 > span').innerText),
        ]
        const descricao = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-4 > div:nth-child(1) > div:nth-child(1) > div.campanha-attrib-value').innerText),
        ]

          fileData.push(nome)
          console.log(nome);
          fileData2.push(codigo)
          console.log(codigo);
          fileData3.push(preco)
          console.log(preco);
          fileData4.push(descricao)
          console.log(descricao);
        
          await page.evaluate(() => {
            document.querySelector("div.row.mt-5.mb-4 > div > a").click();
       
        }).catch(error => { console.log(error) }); // Clica no botão de voltar

        await page.waitForTimeout('4000');
}
}

for (let i = 10; i < 100; i++) {
  progressBar.detail = `${i} paginas de promoções buscadas`;
  page.waitForTimeout('2000');
if ( await page.$(`#\\33 0${i} > div > a`) === null) {
  
} else {
  
    await page.click(`#\\33 0${i} > div > a`);
    await page.waitForTimeout('2000'); 
        const nome = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > a').innerText),
        ]
        const codigo = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > div.mb-3').innerText),
        ]
        const preco = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > div.mb-1 > span').innerText),
        ]
        const descricao = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-4 > div:nth-child(1) > div:nth-child(1) > div.campanha-attrib-value').innerText),
        ]
          fileData.push(nome)
          console.log(nome);
          fileData2.push(codigo)
          console.log(codigo);
          fileData3.push(preco)
          console.log(preco);
          fileData4.push(descricao)
          console.log(descricao);
          await page.evaluate(() => {
            document.querySelector("div.row.mt-5.mb-4 > div > a").click();
       
        }).catch(error => { console.log(error) }); // Clica no botão de voltar

        await page.waitForTimeout('4000');
}
}

//////////////////////////////////////////////
///////////////////////////////////////////
/////////////////////////////////
/////////////////////
///////////
/////
//

for (let i = 100; i < 700; i++) {
  progressBar.detail = `${i} paginas de promoções buscadas`;
  page.waitForTimeout('2000');
if ( await page.$(`#\\33 ${i} > div > a`) === null) {
 
} else {

    await page.click(`#\\33 ${i} > div > a`);

    await page.waitForTimeout('2000');
        const nome = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > a').innerText),
        ]
        const codigo = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > div.mb-3').innerText),
        ]
        const preco = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-8 > div:nth-child(2) > div > div > div.mb-1 > span').innerText),
        ]
        const descricao = [
            await page.evaluate(() => document.querySelector('body > main > div.row.col-12 > div.col-4 > div:nth-child(1) > div:nth-child(1) > div.campanha-attrib-value').innerText),
        ]
          
          fileData.push(nome)
          console.log(nome);
          fileData2.push(codigo)
          console.log(codigo);
          fileData3.push(preco)
          console.log(preco);
          fileData4.push(descricao)
          console.log(descricao);
      
          await page.evaluate(() => {
            document.querySelector("div.row.mt-5.mb-4 > div > a").click();
       
        }).catch(error => { console.log(error) }); // Clica no botão de voltar

        await page.waitForTimeout('4000');
}
}
//salvando fileData[nome], fileData2[codigo], fileData3[preco], fileData4[descricao] no banco de dados mysql
progressBar.detail = `Salvando dados no banco de dados`;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hypera'
});

connection.connect(function(err) {
  //delete table
  connection.query('DROP TABLE IF EXISTS produtos', function (err, result) {
    if (err) throw err;
    console.log('Table deleted');
  });
  //create table
  connection.query('CREATE TABLE IF NOT EXISTS produtos (nome VARCHAR(255), codigo VARCHAR(255), preco VARCHAR(255), descricao VARCHAR(255))', function (error, results, fields) {
    if (error) throw error;
    console.log('Tabela criada com sucesso!');
    console.log('Concluido!');
  });
  //insert data
  if (err) throw err;
  console.log("Connected!");
  for (let i = 0; i < fileData.length; i++) {
    connection.query(`INSERT INTO produtos (nome, codigo, preco, descricao) VALUES ('${fileData[i]}', '${fileData2[i]}', '${fileData3[i]}', '${fileData4[i]}')`, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }
});
console.log('Tarefa concluida');
progressBar.detail = `Tarefa concluida`;
await browser.close();

if (!progressBar.isCompleted){
  progressBar.value += 1;
  progressBar.detail = 'Tarefa concluida.Saindo...';
}
}
module.exports = rpaMod;
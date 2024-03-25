/*6 - Crie um array com informações de usuário e senhas. Depois faça com que ao carregar a página, 
seja pedido usuário e senha, e informe se o usuário existe ou não existe dentro do array. 
Pode utilizar um mesclagem entre Arrays e Objects. */



const usuarios = [
  { username: "gabriel", password: "1234" },
  { username: "pedro", password: "1234" },
  { username: "gabi", password: "1234" }
];

username = prompt("Informa usuário : ");
password = prompt("Informa a senha : ");


const user = usuarios.find(usuarios => usuarios.username == username && usuarios.password == password);

if (user) {
  alert("Usuário encontrado!");
} else {
  alert("Usuário não encontrado!");
}

import { Client } from "../../entity/Client";
import { Company } from "../../entity/Company";

export function clientIsValid(client: Client): boolean{

  if(!cpfCnpjIsValid(client.cpf)){
    return false;
  }

  if(!emailIsValid(client.email)){
    return false
  }

  if(!passwordIsValid(client.password)){
    return false;
  }

  if(!phoneNumberIsValid(client.phoneNumber)){
    return false;
  }

  console.log("clientIsValid");
  
  return true;
};

export function companyIsValid(company: Company): boolean{

  console.log("companyIsValid");

  if(!cpfCnpjIsValid(company.cpfCnpj)){
    return false;
  }

  if(!emailIsValid(company.email)){
    return false
  }

  if(!passwordIsValid(company.password)){
    return false;
  }

  if(!fieldOfActivityIsValid(company.fieldOfActivity)){
    return false;
  }

  return true;
};

function cpfCnpjIsValid(cpfCnpj: string): boolean{
  // https://medium.com/shopify-hub/como-validar-cpf-e-cnpj-usando-expressões-regulares-regex-com-javascript-60779229455d
  // https://pt.stackoverflow.com/questions/11045/expressão-regular-para-validar-um-campo-que-aceita-cpf-ou-cnpj
  const regex =  /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
  return regex.test(cpfCnpj)
};

function emailIsValid(email: string): boolean{
  // https://pt.stackoverflow.com/questions/1386/expressão-regular-para-validação-de-e-mail
  const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  return regex.test(email)
};

function passwordIsValid(password: string): boolean{
  // https://pt.stackoverflow.com/questions/71709/verificar-input-senha
  // (?=(?:.*?[A-Z]){x}) - Mínimo x letras maiúsculas
  // (?=(?:.*?[0-9]){y}) - Mínimo y números
  // (?=(?:.*?[!@#$%*()_+^&}{:;?.]){z})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&] - Mínimo z caractere especial
  const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 
  return password.length > 8 && regex.test(password);
};

function phoneNumberIsValid(phoneNumber: string): boolean{
  // https://andersonarruda.com.br/article/ValidandocelularbrasileirocomExpressaoRegular/9
  const regex = /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;
  return regex.test(phoneNumber);
};

//TODO
function fieldOfActivityIsValid(fieldOfActivity: string): boolean{
  
 return true;
};

// function cpfIsValid(cpf: String): boolean{
//   // https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
//   if (typeof cpf !== "string"){
//     return false
//   }
//   cpf = cpf.replace(/[\s.-]*/igm, '')
//   if (
//       !cpf ||
//       cpf.length != 11 ||
//       cpf == "00000000000" ||
//       cpf == "11111111111" ||
//       cpf == "22222222222" ||
//       cpf == "33333333333" ||
//       cpf == "44444444444" ||
//       cpf == "55555555555" ||
//       cpf == "66666666666" ||
//       cpf == "77777777777" ||
//       cpf == "88888888888" ||
//       cpf == "99999999999" 
//   ) {
//       return false
//   }

//   var soma = 0
//   var resto

//   for(var i = 1; i <= 9; i++) {
//     soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
//   }

//   resto = (soma * 10) % 11

//   if((resto == 10) || (resto == 11)){
//     resto = 0
//   }

//   if(resto != parseInt(cpf.substring(9, 10))){
//     return false
//   }

//   soma = 0

//   for(var i = 1; i <= 10; i++){
//     soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
//   }

//   resto = (soma * 10) % 11

//   if((resto == 10) || (resto == 11)){
//     resto = 0
//   }

//   if(resto != parseInt(cpf.substring(10, 11))){
//     return false
//   }

//   return true
// };
let nome = prompt("Olá, para prosseguir com atendimento preciso do seu Nome e Sobrenome !");

let Atendimento = prompt("Olá, " + nome + " , vimos que você faz parte da nossa rede. Digite aqui qual tipo de consulta você está procurando: Nutrição, Clínico Geral, Cardiologia ou Psicólogo.");

if (Atendimento === "Nutrição" || Atendimento === "Nutricao" || Atendimento === "nutrição" || Atendimento === "nutricao" || Atendimento === "nutricão" || Atendimento === "Nutricão") {
    let Horario = prompt("Certo! " + nome + ", Para Nutrição com a Dr. Maria temos os seguintes dias disponíveis, digite o dia de sua preferência. Opção: \n1 - Segunda às 14:00 pm \n2 - Quinta às 8:30 am");
    
    if (Horario === "1") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Segunda às 14:00 pm.`);
    } else if (Horario === "2") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Quinta às 8:30 am.`);
    } else {
        alert("Desculpe, não temos esse horário disponível.");
    }

} else if (Atendimento === "Clínico Geral" || Atendimento === "Clínico geral" || Atendimento === "clinico geral" || Atendimento === "Clinico Geral") {
    let Horario = prompt("Certo! " + nome + ", Para Clínico Geral com o Dr. Eduardo temos os seguintes dias disponíveis, digite o dia de sua preferência. Opção: \n1 - Terça às 16:00 pm \n2 - Sexta às 10:30 am");
    
    if (Horario === "1") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Terça às 16:00 pm.`);
    } else if (Horario === "2") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Sexta às 10:30 am.`);
    } else {
        alert("Desculpe, não temos esse horário disponível.");
    }

} else if (Atendimento === "Cardiologia" || Atendimento === "Cardiologista" || Atendimento === "cardiologia") {
 
  let Horario = prompt("Certo! " + nome + ", Para Clínico Geral com o Dr. Paulo temos os seguintes dias disponíveis, digite o dia de sua preferência. Opção: \n1 - Segunda às 16:00 pm \n2 - Sexta às 07:30 am");

   if (Horario === "1") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Segunda às 16:00 pm.`);
    } else if (Horario === "2") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Sexta às 07:30 am.`);
    } else {
        alert("Desculpe, não temos esse horário disponível.");
    }
  
  } else if (Atendimento === "Psicólogo" || Atendimento === "Psicologo" || Atendimento === "psicólogo" || Atendimento === "psicologo") {
 
  let Horario = prompt("Certo! " + nome + ", Para Clínico Geral com o Dr. Lorena temos os seguintes dias disponíveis, digite o dia de sua preferência. Opção: \n1 - Quarta às 14:00 pm \n2 - Sexta às 10:00 am");

   if (Horario === "1") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Quarta às 14:00 pm.`);
    } else if (Horario === "2") {
        alert(`Certo, ${nome}! Sua consulta foi agendada para Sexta às 10:00 am.`);
    } else {
        alert("Desculpe, não temos esse horário disponível.");
    }
  } else {
    alert("Desculpe, não temos esse serviço. Por favor, escolha entre Nutrição, Clínico Geral, Cardiologia ou Psicólogo.");
  }


//Uncaught SyntaxError: Unexpected token 'else' 
//Fiz o primeiro nutrição e consegui fazer sem problemas. A partir do segundo, essa frase acima estava me assombrando, então perguntei ao GPT para me ensinar como corrigir.
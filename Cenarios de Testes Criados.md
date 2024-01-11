Esquema do Cenário: Realizar Transferência 

Dado que estou na tela de Realizar Transferência entre contas  
Quando informo Cliente Destino 
    <ClienteDestino> e Valor <Valor> e Data de Efetivação <DataEfetivacao>
E realizo a Transferencia
Então  resultado<resultado>



Exemplos:

|ClienteDestino   |Valor            |DataEfetivacao  |resultado                |

|Não Correntista  |< saldo vigente  |Data Anterior   |Não realiza transferência|

|Não Correntista  |< saldo vigente  |Data Atual      |Não realiza transferencia|

|Não Correntista  |< saldo viginte  |Data Posterior  |Não realiza transferencia|

|Não Correntista  |saldo atual      |Data Anterior   |Não realiza transferencia|

|Não Correntista  |saldo atual      |Data Atual      |Não realiza transferencia|

|Não Correntista  |saldo atual        |Data Posterior|Não realiza transferencia|

|Não Correntista|>= saldo vigente|Data Anterior|Não realiza transferencia|

|Não Correntista|>= saldo vigente|Data Atual|Não realiza transferencia|
|Não Correntisa|>= saldo vigente|Data Posterior|Não realiza transferencia|

|Correntista  |< saldo vigente  |Data Anterior   |Não realiza transferencia|

|Correntista  |< saldo vigente  |Data Atual      |realiza transferencia e  sensibiliza o saldo|

|Correntista  |< saldo viginte  |Data Posterior  |realiza transferencia e sensibiliza o saldo|
|Correntista  |saldo atual      |Data Anterior  | Não realiza transferencia|

|Correntista |saldo atual       |Data Atual        |realiza transferencia e saldo fica zerado|

|Correntista|saldo atual|Data Posterior|realiza transferencia e saldo fica zerado|

|Correntista|>= saldo vigente|Data Anterior|Não realiza transferencia|

|Correntista|>= saldo vigente|Data Atual|realiza transferencia e saldo fica negativo|

|Correntisa|>= saldo vigente|Data Posterior|realiza transferencia e saldo fica negativo|

Cenario: Cancelar Transferencia
Dado que estou na tela de Realizar Transferencia entre contas  
Quando informo Cliente Destino  e Valor e Data de Efetivação 
E cancelo a transferencia
Então os valores dos campos são limpos 

# Admin Panel

https://github.com/m-rcussilva/admin-panel/assets/35894743/6752d8a8-e4a3-4d45-a1c9-6758e40a3855

### Como utilizar

#### 1. Banco de Dados

Comandos abaixo: inicie o servidor MySQL, acesse o servidor MySQL, crie seu banco de dados, selecione o banco de dados que você criou e pare o servidor MySQL

    - mysql.server start
    - mysql -u user_name -p
    - CREATE DATABASE database_name;
    - USE database_name
    - mysql.server stop

#### 2. Backend:  

No arquivo `application.properties` adicione o código abaixo e substitua `database_name`, `user_name`, `user_password` pelos seus dados do MySQL e inicie o servidor

    spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/database_name 
    spring.datasource.username=user_name  
    spring.datasource.password=user_password  
    spring.jpa.hibernate.ddl-auto=update  
    spring.jpa.show-sql=true  

#### 3. Fronent:  

Inicie o servidor:  

    npm run dev

### Stack

1. Backend:  
    - Linguagem de programação: Java
    - Framework: Java

2. Banco de Dados:
    - MySQL

3. Frontend:
    - Linguagem de programação: TypeScript
    - Framework: NextJS

### Levantamento de requisitos

- **Funcionalidades:**
  - Tela de login [*]
  - Registrar funcionários [*]
  - Gerenciamento de funcionários (CRUD) [parcialmente completo]
  - Botão de Log Out [*]

- **Requisitos de Adm:**
  - Adm: adicionar, editar e excluir funcionários [parcialmente completo]
  - Adm: visualizar informações do perfil de cada funcionário criado []

- **Requisitos de Autenticação e Autorização:**
  - A autenticação do Adm será realizada através do email e senha []
  - Após autenticado o Adm não pode voltar para a página de Login. []
    (Autorização)

- **Integração com o Banco de Dados:**
  - MySQL [*]

### TODO

1. Utilizar o Spring Security e JWT para autenticação e autorização do admin.
2. Ao adicionar um novo funcionário não está sendo possível excluí-lo, para que isso ocorra é preciso atualizar a página.
3. Buscar funcionários por nome ou cargo.  

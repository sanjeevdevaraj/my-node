# my-node
Middle ware component using Node JS

# Run NPM Packages:
       - Download the package
       - Open the corresponding location in your local
       - Open Commend Prompt in the same location
       - Execute below command which install dependencies in local system
                -- npm install
       - Execute below command which start execute our node package
                -- npm start
       - Now node is up and running in below path:port
                -- http://localhost:8000
        
# End point exposed in node server
  # GET Request - Get all client details
      http://localhost:8000/getClientDetails
  # POST Request - save client details
      http://localhost:8000/addClientData

# MySql Server 

# Install MSSQL:
  
         - Kindly download dotnet framework 4.5.2 (which is mandatory for Mysql server). Kindly ignore if it is availabe. 
         
         - Kindly download and install either one of the following
                -- mysql-installer-community-8.0.17.0 (Large size )
                -- mysql-installer-web-community-8.0.17.0 (Small size so will download all package while installing in our system)
   
         - Kindly provide below Username and password for DB while installing 
                -- user: "root",
                -- password: "password",
   
         - After intstalling open MSSQL Workbench in your local
  
  # Table and Schema Creation 
        - Use below Schema name 
                -- mydb
                
        - Run the below Query for table creation and insertion.
        
          CREATE TABLE `registration` (
          `enquiry_id` int(11) NOT NULL AUTO_INCREMENT,
          `client_name` varchar(45) DEFAULT NULL,
          `country_code` int(4) DEFAULT NULL,
          `phone_number` varchar(15) DEFAULT NULL,
          `email_id` varchar(25) DEFAULT NULL,
          `contact_me` tinyint(1) DEFAULT NULL,
          `home_loan` tinyint(1) DEFAULT NULL,
          `created_date` datetime DEFAULT NULL,
          `updated_date` datetime DEFAULT NULL,
          PRIMARY KEY (`enquiry_id`)
          ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='registration table';
  
  
          INSERT INTO registration(client_name,country_code,phone_number,email_id,contact_me,home_loan,created_date,updated_date)
          VALUES ('Sanjeev',91,'8344051654','srdsanjeev@gmail.com',1,1, now(), now());
  
  
  
  
  
  
  
    
    
        
 

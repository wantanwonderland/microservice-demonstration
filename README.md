# email-microservice-sample
 Demonstrate the usage of microservice using email trigger
 
# Architecture
![System Architecture@2x-2](https://user-images.githubusercontent.com/46364125/136459223-df8e9912-0b4a-42a5-bbc3-63691de35799.png)

# How To Use
1) Make sure redis is running
2) Run both project using npm command
3) Send POST request to http://localhost:3000/email
4) In order to send email, please set SENDINBLUE_KEY and SENDER_EMAIL environemnt variable. Key can be generated from sendinblue website

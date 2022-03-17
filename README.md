## Django Password manager

### Features
- Supports creation of multiple accounts for new users.
- e-mail verification with existing log in or new account creation.
- Passwords are encrypted before storing in the DB which is even unknown to the admin. 

### Control flow diagram
![Control flow](https://user-images.githubusercontent.com/58583793/183398662-94e231a1-485b-4956-93df-1ab44f8bbc77.jpg)

### Project demo
https://user-images.githubusercontent.com/58583793/183387400-4f905271-dea3-428c-bcae-b95f3c45cb47.mp4

### Development
After cloning the repository and creating a virtual environment, move to the base project directory to execute `pip3 install -r requirements.txt`. Once all the requirements are installed, run, `python3 manage.py runserver` to start up the server locally. 

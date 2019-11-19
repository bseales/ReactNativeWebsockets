# ReactNativeWebsockets
A React Native client application that communicates with a Python server

### Before Running
You will need to have some things installed before running.
* Python 3
* Websockets (pip install websockets)
* Yarn (brew install yarn)
* Expo application on either iOS or Android

The local IP address of the server machine will also need to change in both `server.py` and `RobotController.js` before running.

### To Run 
Begin by navigating to the root folder and running `python server.py` to start the server. Afterwards, `cd clientApp/client-app` will navigate to the application directory. Then run `yarn install` to install any dependencies that are needed, and `yarn start` to begin the application.

Once the application starts, it will exchange greeting messages with the server. 

Pressing any button on the application will send the button ID to the server, which will print it out along with timestamps for when the message was send and when it was received.


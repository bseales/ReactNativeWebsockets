import asyncio
import websockets
import json
import datetime
import time

LOCAL_IP_ADDRESS = "192.168.1.204"

async def hello(websocket, path):
    print("\n\nThis is the server. \n Message codes: \n 1 = up \n 2 = down \n 3 = left \n 4 = right")
    name = await websocket.recv()
    receivedMessage = f"Received message: {name}!"
    await websocket.send("Hello from the server!")
    print(f"> {receivedMessage}")

    while True:
        msg = await websocket.recv()
        msgObj = json.loads(msg)
        print("\n" + msgObj['message'])
        timeNow = datetime.datetime.now()
        timeSent = datetime.datetime.strptime(msgObj['time'], "%Y-%m-%dT%H:%M:%S.%fZ")
        print('sent at     ' + str(timeSent.second) + "." + str(timeSent.microsecond) + ' seconds')
        print('received at ' + str(timeNow.second) + "." + str(timeNow.microsecond) + ' seconds\n\n')
        
print("The server has started.")
start_server = websockets.serve(hello, LOCAL_IP_ADDRESS, 1234)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
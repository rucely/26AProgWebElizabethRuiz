import json
from flask import Flask
app = Flask(__name__)

@app.route('/getMyInfo')
def getMyInfo():
    value = {
        "name": "Elicita",
        "lastname": "Ruiz",
        "socialMedia":
        [
            {"facebookUser": "elyely"},
            {"instagramUser": "ruce.ly"},
            {"xUser": "ruce_ly"},
            {"linkedin": "elizabeth-ruiz"},
            {"githubUser": "rucely"}
        ],
    }
    return json.dumps(value)
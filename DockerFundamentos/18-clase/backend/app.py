from flask import Flask,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/getMyInfo')
def getMyInfo():
    value = {
        "name": "elicita",
        "lastname": "ruiz",
        "socialMedia":
        {
            "facebookUser": "elyely",
            "instagramUser": "ruce.ly",
            "xUser": "ruce_ly",
            "linkedin": "rucely",
            "githubUser": "rucely"
        },  
    }

    return jsonify(value)

if __name__ == '__main__':
    app.run(port=5000)
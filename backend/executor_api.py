from flask import Flask
import json
from flask import jsonify
from flask import request
import executor_handler as eu

app = Flask(__name__)

@app.route('/')
def hello():
    return 'hello world'

@app.route('/build_and_run', methods=['POST'])
def build_and_run():
    data = json.loads(request.data)
    result = eu.run(data["code"], data["language"])
    return jsonify(result)

if __name__=="__main__":
    eu.load_image()
    app.run(port=5000)
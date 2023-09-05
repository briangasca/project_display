from flask import render_template
from flask import request
from flask import Flask
app = Flask(__name__)

@app.route("/")
def render_home():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host = "0.0.0.0")
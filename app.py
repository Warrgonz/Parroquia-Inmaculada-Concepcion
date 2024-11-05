from flask import Flask
from routes import blueprints

app = Flask(__name__)

for blueprint in blueprints:
    app.register_blueprint(blueprint)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
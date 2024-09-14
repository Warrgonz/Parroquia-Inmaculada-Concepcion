from flask import Blueprint

inicio_bp = Blueprint('inicio', __name__)

@inicio_bp.route('/')
def inicio():
    return "hello world"
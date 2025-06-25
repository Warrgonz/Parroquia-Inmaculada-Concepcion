from flask import Blueprint, render_template

usuarios_bp = Blueprint('usuarios', __name__)

@usuarios_bp.route('/usuarios')
def usuarios():
    return render_template('private/usuarios.html')

@usuarios_bp.route('/usuarios/agregar')
def agregar_usuario():
    return render_template('private/usuarios_agregar.html')
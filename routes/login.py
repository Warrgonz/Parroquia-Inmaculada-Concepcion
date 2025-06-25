from flask import Blueprint, render_template

seguridad_bp = Blueprint('seguridad', __name__)

@seguridad_bp.route('/inicio_sesion')
def login():
    return render_template('public/inicio_sesion.html')

@seguridad_bp.route('/inicio_sesion/crear/cuenta')
def crear_cuenta():
    return render_template('public/crear_cuenta.html')

@seguridad_bp.route('/inicio_sesion/recuperar_contrasena')
def recuperar_contrasena():
    return render_template('public/recuperar_contrasena.html')

@seguridad_bp.route('/inicio_sesion/recuperar_contrasena/cambio')
def cambiar_contrasena():
    return render_template('public/cambiar_contrasena.html')

@seguridad_bp.route('/inicio_sesion/crear/cuenta/confirmacion')
def confirmacion():
    return render_template('public/confirmar_cuenta.html')
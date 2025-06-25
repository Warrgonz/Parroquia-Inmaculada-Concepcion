from flask import Blueprint, render_template

actividades_bp = Blueprint('actividades', __name__)

@actividades_bp.route('/actividades')
def inicio():
    return render_template('public/actividades.html')

@actividades_bp.route('/actividades/catalogo')
def actividades_catalogo():
    return render_template('public/actividades_catalogo.html')

@actividades_bp.route('/dashboard/actividades')
def admin():
    return render_template('private/calendario.html')
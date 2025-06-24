from flask import Blueprint, render_template

donaciones_bp = Blueprint('donaciones', __name__)

@donaciones_bp.route('/donaciones')
def inicio():
    return render_template('public/donaciones.html')